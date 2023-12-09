<template>
  <h1>Index!</h1>
  <div style="overflow: auto; height: 60vh;">
    <PlayerComponent v-for="pad in pads" :pad="pad" :key="pad.iframeId" />
  </div>
  <button @click="attack">Send Attack</button>
  <div>
    Pads in menu: {{ padsInMenu }}
  </div>
</template>

<script setup lang="ts">
import { AttackEvent } from 'src/models/CustomEvents';
import { Ref, ref, onMounted } from 'vue';
import PlayerComponent from 'components/PlayerComponent.vue'
import { ArcanePad, Arcane, AEventName, IframePadConnectEvent } from 'arcanepad-web-sdk';


const pads: Ref<ArcanePad[]> = ref([])
let padsInMenu = ref<string[]>([])

onMounted(() => {

  Arcane.msg.on(AEventName.OpenArcaneMenu, (e, from) => padsInMenu.value.push(from))
  Arcane.msg.on(AEventName.CloseArcaneMenu, (e, from) => {
    const indexOfPad = padsInMenu.value.indexOf(from)
    if (indexOfPad != -1) padsInMenu.value.splice(indexOfPad, 1)
  })

  init()
})

async function init() {
  let initialState = await Arcane.arcaneClientInitialized()
  pads.value = initialState.pads

  Arcane.msg.on(AEventName.IframePadConnect, (e: IframePadConnectEvent) => {
    const padExists = pads.value.some(p => p.iframeId === e.iframeId)
    if (padExists) return

    const padToAdd = new ArcanePad({ deviceId: e.deviceId, internalId: e.internalId, iframeId: e.iframeId, isConnected: true, user: e.user })
    pads.value.push(padToAdd)
  })

  // Arcane.msg.on(AEventName.IframePadDisconnect, (e: IframePadDisconnectEvent) => {
  //   const padToRemove = pads.value.find(p => p.iframeId === e.iframeId)
  //   if (!padToRemove) return

  //   pads.value.splice(pads.value.indexOf(padToRemove), 1)
  // })
}

function attack() {
  console.log('sending attack')
  Arcane.msg.emitToPads(new AttackEvent(2))
  Arcane.pads.forEach(p => p.vibrate(300))
}

</script>
