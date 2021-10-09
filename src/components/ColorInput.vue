<template>
    <div>
      <input 
        v-model="counterColor"
        placeholder="Enter colour code"
        type="text">
    </div>
</template>

<script>
export default {
    name: 'ColourInput',
    computed: {
        counterColor: {
            get() {
                return this.$store.state.colorCode;
            },
            set(newColor) {
                console.log('newColor: ', newColor);
                this.$store.dispatch('setColorCode', newColor);
            }
        }
    },
}
</script>

<style scoped>

</style>