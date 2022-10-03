<template>
    <div class="wrapper-bar">
      <ToDoIconAddItem class="center-in-bar"></ToDoIconAddItem>
    </div>
</template>

<script>
  export default {
  name: 'ToDoBottomBar'
  }
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
@import "@/assets/utility.scss";
.wrapper-bar {
  text-align: center;
  background-color: $neutral-color-200;
  height: 4.06rem;

}

.center-in-bar {
  position: relative;
  bottom: 50%;
}
</style>