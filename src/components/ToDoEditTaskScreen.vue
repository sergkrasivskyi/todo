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
        >Delete</ToDoButton>
      </div>
    </div>
  </div>
</template>

<script>
// import stores  from '@/stores'
export default {
  name: 'ToDoEditTaskScreen',
  data() {
    return {
      updateAlert: 'Done!'
    }
  },
  props: {
    toUpdateTask: {type: Object, default: null}
  },
  methods: {
    // editTitle(event) {
    //   toDosList.toEditTask.title = event.target.value
    // },
    // editDescription(event) { 
    //   toDosList.toEditTask.description = event.target.value
    // },
    // editDate(event) {
    //   toDosList.toEditTask.date = event.target.value
    // },
    updateTask() {
      // передати дані в store для мутації даних
      // редагуємо елемент
      // let id = toDosList.toEditTask.id
      // let index = toDosList.taskList.findIndex(task => task.id === id)
      // toDosList.taskList[index] = { ...toDosList.toEditTask }
      
      toDosList.editToDoItem()
      this.updateAlert = "Updated!"
      setTimeout(this.$emit, 1000, 'editDone');
    },
    deleteTask() {

      // let id = toDosList.toEditTask.id;
      // let index = toDosList.taskList.findIndex((task) => task.id === id);
      // toDosList.toEditTask = {}
      // // видаляємо елемент
      // index && id
      //   ? toDosList.taskList.splice(index, 1)
      //   : console.log("Empty cell");

      toDosList.deleteTask()
      this.$emit('taskDeleted')
      
    },
    cancelEditPage() {
      // toDosList.currenTask = { ...toDosList.emptyTask }
      toDosList.initializeTask()
      this.$emit('cancelEditPage')
    }
  },
  computed: {
    taskTitle() {
      return toDosList.currenTask.title
    },
    taskDescription() {
      return toDosList.currenTask.description
    },
    taskDate() {
      return toDosList.currenTask.date
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