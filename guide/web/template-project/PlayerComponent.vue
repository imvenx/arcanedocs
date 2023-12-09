<template>
  <div :style="style">
    <!-- <div>P{{ playerNumber }} </div> -->
    <div>User: {{ pad.user }}</div>
    <div> pad id: {{ pad.iframeId }}</div>
    <div> internal id: {{ pad.internalId }}</div>
    <div>Connected:{{ isConnected }}</div>
    <hr>
    <div style="display:flex">
      <div style="display: flex;">
        <button @click="pad.startGetQuaternion()">Start</button>
        <button @click="pad.stopGetQuaternion()">Stop</button>
      </div>
      <div> quaternion: {{ quaternion }}</div>
    </div>
    <hr>
    <div style="display:flex">
      <div style="display: flex;">
        <button @click="pad.startGetRotationEuler()">Start</button>
        <button @click="pad.stopGetRotationEuler()">Stop</button>
      </div>
      <div> euler: {{ euler }}</div>
    </div>
    <hr>
    <div style="display:flex">
      <div style="display: flex;">
        <button @click="pad.startGetPointer()">Start</button>
        <button @click="pad.stopGetPointer()">Stop</button>
      </div>
      <div> pointer: {{ pointer }}</div>
    </div>

    <div>Is Menu Open: {{ isMenuOpen }}</div>
    <div v-if="attacking" style="color:red">Attacking!</div>

  </div>
</template>

<script lang="ts" setup>
import { ArcanePad, IframePadConnectEvent, IframePadDisconnectEvent } from 'arcanepad-web-sdk';
import { CustomEventNames, AttackEvent } from 'src/models/CustomEvents';
import { ref, onMounted, onUnmounted } from 'vue';


const { pad } = defineProps<{ pad: ArcanePad }>()

const isConnected = ref(true)

const quaternion = ref<any>({})
const euler = ref<any>({})
const pointer = ref<any>({})

const style = { border: `2px solid #${pad.user?.color}` }

const attacking = ref(false)
const isMenuOpen = ref(false)

onMounted(async () => {

  pad.onOpenArcaneMenu(() => isMenuOpen.value = true)
  pad.onCloseArcaneMenu(() => isMenuOpen.value = false)

  pad.onGetQuaternion((e) => {
    quaternion.value = e
  })

  pad.onGetRotationEuler((e) => {
    euler.value = e
  })

  pad.onGetPointer((e) => {
    pointer.value = e
  })

  pad.onConnect((e: IframePadConnectEvent) => {
    isConnected.value = true
  })

  pad.onDisconnect((e: IframePadDisconnectEvent) => {
    isConnected.value = false
  })

  pad.on(CustomEventNames.Attack, (e: AttackEvent) => {
    attacking.value = true
    setTimeout(() => {
      attacking.value = false
    }, 1000);
  })

  // Arcane.pad.on(CustomEventNames.Attack, pad.clientId, (e: AttackEvent) => {
  //   console.log("asdasdasds")
  //   // attacking.value = true
  //   setTimeout(() => {
  //     attacking.value = false
  //   }, 1000);
  // })

  // Arcane.msg.on("MoveRight" + pad.clientId, () => { })
  // Arcane.msg.emit(new MoveLeft(), Arcane.userViewsIds)

  // Arcane.pad.onDisconnect(clientId, ()=> ...)
  // Arcane.pad.onReconnect(clientId, ()=> ...) ???
  // Arcane.view.onReconnect(clientId, ()=> ...) ???

})

onUnmounted(() => {
  // console.log("stopping get rotation vector for ", pad.internalId)
  // Arcane.pad.stopGetRotationVector(pad.clientId)

  // Arcane.msg.emit(new StopGetRotationVectorEvent(), [internalId])
  // Arcane.msg.off(AEventName.GetRotationVector)
})

</script>

<style scoped></style>
