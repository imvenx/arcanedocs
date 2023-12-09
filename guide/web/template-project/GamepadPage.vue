<template>
  <h1>Gamepad!</h1>
  <div style="display: flex;">
    <button @click="attack">Send attack</button>
    <button @click="Arcane.pad?.calibrateQuaternion()">Calibrate
      Quaternion</button>
    <svg style="border: 1px solid purple;">
      <StickPad name="leftStick" x="25" y="50" color="purple" :pad-events="leftStickPadEvents"
        :emit-raw-touch-events="true" />
    </svg>
  </div>
</template>

<script setup lang="ts">
import { AttackEvent } from 'src/models/CustomEvents';
import StickPad from 'src/components/StickPad.vue';
import { LeftEvent, RightEvent, UpEvent, DownEvent, Arcane } from 'arcanepad-web-sdk';


const leftStickPadEvents = { left: new LeftEvent(), right: new RightEvent(), up: new UpEvent(), down: new DownEvent() }

function attack() {
  console.log('Sending Attack!')
  Arcane.msg.emitToViews(new AttackEvent(3))
  Arcane.pad?.vibrate(100)
}

</script>
