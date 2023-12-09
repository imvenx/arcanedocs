<template>
  <g v-on="touchEvents"
    :style="`transform:translate(${startX ? startX + 'px' : x + '%'}, ${startY ? startY + 'px' : y + '%'})`">

    <circle id="outerCircle" r="20%" fill="transparent" :stroke="color" stroke-dasharray="220" />

    <circle ref="cursor" r="10%" fill="black" />
    <!-- :cx="cursorX - startX" :cy="cursorY - startY" -->

    <!-- <text dominant-baseline="middle" text-anchor="middle" fill="white" font-size="2em">{{ name }}</text> -->
    <text x="-15%" dominant-baseline="middle" text-anchor="middle" fill="grey" font-size="2em">
      {{ padEvents.left.name }}</text>
    <text x="15%" dominant-baseline="middle" text-anchor="middle" fill="grey" font-size="2em">
      {{ padEvents.right.name }}</text>
    <text y="-30%" dominant-baseline="middle" text-anchor="middle" fill="grey" font-size="2em">
      {{ padEvents.up.name }}</text>
    <text y="30%" dominant-baseline="middle" text-anchor="middle" fill="grey" font-size="2em">
      {{ padEvents.down.name }}</text>
  </g>
</template>

<script lang="ts" setup>
import { PadEvent, Arcane } from 'arcanepad-web-sdk';
import { ref, onMounted } from 'vue';


const cursor = ref<HTMLElement>()

const { name, x, y, color, padEvents } = withDefaults(defineProps<{
  name: string,
  x: string,
  y: string,
  color: string,
  padEvents: { left: PadEvent, right: PadEvent, up: PadEvent, down: PadEvent },
  emitRawTouchEvents: boolean
}>(), { color: 'green', emitRawTouchEvents: false })


// const startX = ref(0)
// const startY = ref(0)
let startX = 0
let startY = 0
let currentX = 0
let currentY = 0
// const cursorX = ref(0)
// const cursorY = ref(0)
const cursorSensibility = 30

const actionTriggerRefreshTime = 200
let _isActionTriggered = false
function actionTriggered() {
  _isActionTriggered = true
  setTimeout(() => _isActionTriggered = false, actionTriggerRefreshTime)
}

let touchPressInterval: any

const touchEvents = {
  touchstart: (e: TouchEvent) => onTouchStart(e),
  touchmove: (e: TouchEvent) => onTouchMove(e),
  touchend: (e: TouchEvent) => onTouchEnd(e),
}

onMounted(() => {
  cursor.value?.animate([
    { filter: `drop-shadow(0 0 0rem ${color})` },
    { filter: `drop-shadow(0 0 1.7rem ${color})` },
  ], { duration: 1000, iterations: Infinity, direction: "alternate", easing: 'ease' })

  requestAnimationFrame(updatePos);
})


function updatePos() {
  cursor.value?.setAttribute('cx', currentX - startX + 'px')
  cursor.value?.setAttribute('cy', currentY - startY + 'px')

  requestAnimationFrame(updatePos);
}

// const pressing = ref(false)

function onTouchStart(e: TouchEvent) {

  // socket.emit(name + 'TouchStart', { x: e.targetTouches[0].clientX, y: e.targetTouches[0].clientY })

  // touchPressInterval = setInterval(onTouchPress, 33)

  // pressing.value = true
  startX = currentX = e.targetTouches[0].clientX
  startY = currentY = e.targetTouches[0].clientY

  cursor.value?.setAttribute('cx', currentX - startX + 'px')
  cursor.value?.setAttribute('cY', currentY - startY + 'px')

}

function onTouchMove(e: TouchEvent) {

  // socket.volatile.emit(name + 'TouchMove', { x: e.targetTouches[0].clientX, y: e.targetTouches[0].clientY })

  // clearInterval(touchPressInterval)
  // touchPressInterval = setInterval(onTouchPress, 33)

  currentX = e.targetTouches[0].clientX
  currentY = e.targetTouches[0].clientY

  cursor.value?.setAttribute('cx', currentX - startX + 'px')
  cursor.value?.setAttribute('cy', currentY - startY + 'px')

  const diffX = currentX - startX
  const diffY = currentY - startY

  if (_isActionTriggered) return

  if (Math.abs(diffX) > Math.abs(diffY)) {
    checkMove(diffX, 'x')
    return
  }

  checkMove(diffY, 'y')

}

// function onTouchPress() {

//     // socket.volatile.emit(name + 'TouchPress')

//     const diffX = currentX - startX.value
//     const diffY = currentY - startY.value

//     if (_isActionTriggered) return

//     if (Math.abs(diffX) > Math.abs(diffY)) {
//         checkMove(diffX, 'x')
//         return
//     }

//     checkMove(diffY, 'y')
// }

function onTouchEnd(e: TouchEvent) {

  // socket.emit(name + 'TouchEnd')

  // pressing.value = false

  clearInterval(touchPressInterval)

  startX = startY = currentX = currentY = 0

  cursor.value?.setAttribute('cx', '0')
  cursor.value?.setAttribute('cy', '0')

}

function checkMove(diff: number, axis: 'x' | 'y') {

  if (Math.abs(diff) < cursorSensibility) return

  actionTriggered()

  const direction = diff > 0 ? '+' : '-'

  emitMoveEvent(axis, direction)
}

function emitMoveEvent(axis: 'x' | 'y', direction: '+' | '-') {

  if (axis === 'x') {
    if (direction === '-') {
      Arcane.msg.emitToViews(padEvents.left)
      return
    }
    Arcane.msg.emitToViews(padEvents.right)
    return
  }

  if (direction === '-') {
    Arcane.msg.emitToViews(padEvents.up)
    return
  }
  Arcane.msg.emitToViews(padEvents.down)
}

</script>

<style>
text {
  user-select: none;
}

#outerCircle {
  animation: outerCircleAnim 3s infinite linear;
}

@keyframes outerCircleAnim {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>

