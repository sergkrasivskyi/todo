<template>
  <div class="wrapper-add-task">
    <ToDoHeaderAppBar
      @pageClose="cancelEditPage"
      >
      <template v-slot:header-app-text>
        Edit task
      </template>
    </ToDoHeaderAppBar>
    <div class="container flow">
      <ToDoIconLogo class="center" space-type="200"></ToDoIconLogo>
      <ToDoTask
        v-model:title="taskTitle"
        v-model:description="taskDescription"
        v-model:date="taskDate"
      ></ToDoTask>
      <div class="buttons">
        <ToDoButton class="bg-accent-400 task-button"
          @clickButton="updateTask" 
          >{{ updateAlert }}</ToDoButton>
        <ToDoButton class="bg-accent-600 task-button"
          @clickButton="deleteTask"
        >{{deleteAlert}}</ToDoButton>
      </div>
    </div>
  </div>
</template>

<script>
import { toDosListStore, toDoUserStore } from '@/main'
export default {
  name: 'ToDoEditTaskScreen',
  data() {
    return {
      updateAlert: 'Done!',
      deleteAlert: 'Delete'
    }
  },
  props: {
    toUpdateTask: {type: Object, default: null}
  },
  methods: {
    updateTask() {
      toDosListStore.editToDoItem()
      this.updateAlert = "Updated!"
      setTimeout(this.$router.push, 1000, '/homescreen');
    },
    deleteTask() {
      this.deleteAlert = 'Deleted!'
      toDosListStore.deleteTask()
      setTimeout(this.$router.push, 400, '/homescreen');
      
      // this.$emit('taskDeleted')
      
    },
    cancelEditPage() {
      // toDosList.currenTask = { ...toDosList.emptyTask }
      toDosListStore.initializeTask()
      setTimeout(this.$router.push, 100, '/homescreen');
      // this.$emit('cancelEditPage')
    }
  },
  computed: {
    taskTitle() {
      return toDosListStore.currenTask.title
    },
    taskDescription() {
      return toDosListStore.currenTask.description
    },
    taskDate() {
      return toDosListStore.currenTask.date
    },
   
  }

}
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
@import "@/assets/utility.scss";

:where(.flow > :not(:first-child)) {
  margin-top: 2.5rem;
}

.buttons {
  display: flex;
  justify-content: space-around;
}

.wrapper-add-task {
  height: 100vh;
}
</style>