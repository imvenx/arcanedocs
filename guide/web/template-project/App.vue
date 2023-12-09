<template>
  Sdk-Test-App
  <div v-if="clientInitialized" style="display: grid; grid-template-columns: 50% 50%; height: 100vh;">
    <div>
      <router-view />
    </div>
    <div style="display: flex; flex-direction: column;">
      <div style="margin-left: 5em;">
        <button @click="reload">Reload</button>
        <pre>
  clientId:{{ Arcane.msg.clientId }}
  deviceId:{{ Arcane.msg.deviceId }}
  </pre>
      </div>
      <ArcaneLogger />
    </div>
  </div>
</template>
  
<script setup lang="ts">
import ArcaneLogger from 'components/ArcaneLogger.vue'
import { onBeforeMount, onMounted, onUnmounted, ref } from 'vue';
import { CustomEventNames } from './models/CustomEvents';
import { AEventName, Arcane } from 'arcanepad-web-sdk';
import { ArcaneInitParams } from 'arcanepad-web-sdk/src/models/Models';

export interface WebSocketWithID extends WebSocket {
  id: string
}

const clientInitialized = ref(false)
onBeforeMount(() => {
  Arcane.init(new ArcaneInitParams({ hideMouse: false }))
  Arcane.msg.on(AEventName.Initialize, () => {
    clientInitialized.value = true
  })

  // We can also do it like this instead of above:
  // let initialState = await Arcane.arcaneClientInitialized()

})

onUnmounted(() => {
  Arcane.close()
})

onMounted(() => {
  Arcane.msg.on(CustomEventNames.Attack, () => {
    console.log('attacked, ahhh!')
  })
})

const reload = () => location.reload()

</script>
  