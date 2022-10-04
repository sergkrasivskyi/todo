<template>
  <div class="splash-wrapper">
    <div class="wrapper">
      <ToDoIconLogo />
      <h1>Make successful your day</h1>
      <h2 class="accent-200">Make small somethings to get big gift in your life</h2>
      <ToDoButton class="bg-accent-400 button-splash"
      @clickButton="startToDo"
      >Start</ToDoButton>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToDoSplash',
  methods: {
    startToDo() {
      this.$emit('startToDo')
    }
  }

}
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
@import "@/assets/utility.scss";
h1 {
  font-family: 'Creepster', serif;
}
h2 {
  font-family: 'Montserrat', serif;
  font-weight: 500;
    font-size: 1rem;
    line-height: 1.2;
}
.splash-wrapper {
  background: linear-gradient($accent-color-600, $accent-color-400);
  padding-inline: 2rem;
  height: 100vh;
  
}
.wrapper {
  background-color: $primary-color-400;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 20px 20px;
  
  color: $primary-color-200;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  row-gap: 2rem;

  padding-inline: 2rem;
  padding-block: 3.5rem 4.6rem;
}
</style>