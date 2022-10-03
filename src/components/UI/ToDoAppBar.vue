<template>
  <div class="wrapper-bar">
    <ToDoMiniLogo class="center-in-bar"></ToDoMiniLogo>
  </div>
</template>

<script>
export default {
  name: 'ToDoAppBar'
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
@import "@/assets/utility.scss";

.wrapper-bar {
  text-align: center;
  background-color: $primary-color-400;
  height: 4.375rem;

}
.center-in-bar {
  position: relative;
  top: 30%;
}
</style>