<template>
  <div class="wrapper">
    <ToDoSplash v-if="isStart"></ToDoSplash>
    <ToDoHomeScreen v-else-if="isHomeScreen"></ToDoHomeScreen>
    <ToDoAddTaskScreen v-else-if="isAddTaskScreen"></ToDoAddTaskScreen>
    <ToDoEditTaskScreen v-else-if="isEditTaskScreen"></ToDoEditTaskScreen>
  </div>

</template>

<script>
// import ToDoSplash from '@/components/ToDoSplash.vue'
// import ToDoHomeScreen from '@/components/ToDoHomeScreen.vue'
export default {
  // components: {
  //   ToDoSplash, ToDoHomeScreen
  // }
  data() {
    return {
      isStart: false,
      isHomeScreen: false,
      isAddTaskScreen: true,
      isEditTaskScreen: false
    }
  },

}
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.wrapper {
  width: $width;
  background-color: $neutral-color-200;
}
</style>