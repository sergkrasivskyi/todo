<template>
  <div class="wrapper">
    <!-- Splash Screen -->
    <ToDoSplash v-if="isSplash"
      @startToDo="viewToDoHomeScreen"/>
    <!-- Home Screen -->
    <ToDoHomeScreen v-else-if="isHomeScreen"
      @addTask="viewToDoAddTaskScreen"
      @editTask="viewToDoEditTaskScreen"
      />
    
    <!-- AddTask Screen -->
    <ToDoAddTaskScreen v-else-if="isAddTaskScreen"
      @addTaskDone="viewToDoHomeScreen"
      @cancelAddPage="viewToDoHomeScreen"/>
    
    <!-- EditTask Screen -->
    <ToDoEditTaskScreen v-else-if="isEditTaskScreen"
      :toUpdateTask="toUpdateTask"
      @editDone="viewToDoHomeScreen"
      @taskDeleted="viewToDoDeleteAlert"
      @cancelEditPage="viewToDoHomeScreen"
    />
    <!-- Delete Alert Screen -->
    <ToDoDeleteAlert v-else-if="isToDoDeleteAlert"/>
    
  </div>

</template>

<script>
export default {
  name: 'ToDoListView',
  data() {
    return {
      isSplash: true,
      isHomeScreen: false,
      isAddTaskScreen: false,
      isEditTaskScreen: false,
      isToDoDeleteAlert: false,
      toUpdateTask: {}
    }
  },
  methods: {
    viewToDoHomeScreen() {
      this.isToDoDeleteAlert = false
      this.isAddTaskScreen = false
      this.isEditTaskScreen = false
      this.isSplash = false
      this.isHomeScreen = true
    },
    viewToDoAddTaskScreen() {
      this.isHomeScreen = false
      this.isAddTaskScreen= true
    },
    viewToDoEditTaskScreen(item) {
      this.isHomeScreen = false
      this.isEditTaskScreen = true
      this.toUpdateTask = item
      console.log(item.title);
    },
    viewToDoDeleteAlert() {
      this.isEditTaskScreen = false
      this.isToDoDeleteAlert = true
      setTimeout(this.viewToDoHomeScreen, 1000);
    },
    goToHomeScreen() {
      router.push('/todolist/homescreen')
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