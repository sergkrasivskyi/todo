<template>
  <button @click="clickButton">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ToDoButton',
  methods: {
    clickButton() {
      this.$emit('clickButton')
    }
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
@import "@/assets/utility.scss";

button {
  font-family: 'Montserrat';
  display: inline-block;
  // background-color: transparent;
  border-color: $accent-color-400;
  border-radius: 1.25rem;
  padding-block: 0.69rem;
  padding-inline: 1.2rem;
  color: $primary-color-200;
  cursor: pointer;
}

.button-splash {
  font-style: normal;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.2;
  text-align: center;
  padding-block: 0.75rem;
  padding-inline: 2.63rem;
}
</style>