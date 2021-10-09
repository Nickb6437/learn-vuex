<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Counter />
    <CounterSquared />
    <Buttons />
    <ColorInput />
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    'Counter': require('@/components/Counter.vue').default,
    'CounterSquared': require('@/components/CounterSquared.vue').default,
    'Buttons': require('@/components/Buttons.vue').default,
    'ColorInput': require('@/components/ColorInput.vue').default,
  }
}
</script>

<style scoped>
  div {
    margin-bottom: 10px;
  }
  .counter {
    font-size: 3rem;
  }
</style>