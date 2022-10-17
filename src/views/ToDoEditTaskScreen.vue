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
        v-model:title="task.title"
        v-model:description="task.description"
        v-model:date="task.date"
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
import { mapStores, mapActions } from 'pinia'
import { useToDoList } from '@/stores'

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
      this.toDosListStore.editToDoItem()
      this.updateAlert = "Updated!"
      setTimeout(this.$router.push, 1000, '/homescreen');
    },
    deleteTask() {
      this.deleteAlert = 'Deleted!'
      this.toDosListStore.deleteTask()
      setTimeout(this.$router.push, 400, '/homescreen');
      
      // this.$emit('taskDeleted')
      
    },
    cancelEditPage() {
      // toDosList.currenTask = { ...toDosList.emptyTask }
      this.toDosListStore.initializeTask()
      setTimeout(this.$router.push, 100, '/homescreen');
      // this.$emit('cancelEditPage')
    },
    // ...mapActions(useToDoList, { deleteTask: 'deleteTask' })
  },
  computed: {
    // taskTitle() {
    //   return this.toDosListStore.currenTask.title
    // },
    // taskDescription() {
    //   return this.toDosListStore.currenTask.description
    // },
    // taskDate() {
    //   return this.toDosListStore.currenTask.date
    // },
    task() {
      return { ...this.toDosListStore.currenTask }
    },

    ...mapStores(useToDoList),
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