<template>
  <div class="wrapper-add-task">
    <ToDoHeaderAppBar>
      <template v-slot:header-app-text>
        Edit task
      </template>
    </ToDoHeaderAppBar>
    <div class="container flow">
      <ToDoIconLogo class="center" space-type="200"></ToDoIconLogo>
      <ToDoFormInput :modelValue="taskTitle"
        @update:modelValue="editTitle"
        class="wide" 
        type="text">
        <template v-slot:label-text>
          Title
        </template>
      </ToDoFormInput>
      <ToDoFormInput :modelValue="taskDescription"
        @update:modelValue="editDescription"
        class="wide" 
        type="text">
        <template v-slot:label-text>
          Description
        </template>
      </ToDoFormInput>
      <ToDoFormInput :modelValue="taskDate"
        @update:modelValue="editDate"
        class="wide" 
        type="date">
        <template v-slot:label-text>
          Date end
        </template>
      </ToDoFormInput>
      <div class="buttons">
        <ToDoButton class="bg-accent-400 task-button"
          @clickButton="updateTask" 
          >{{updateAlert}}</ToDoButton>
        <ToDoButton class="bg-accent-600 task-button"
          @clickButton="deleteTask"
        >Delete</ToDoButton>
      </div>
    </div>
  </div>
</template>

<script>
import { toDosList } from '@/main'
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
    editTitle(event) {
      toDosList.toEditTask.title = event.target.value
    },
    editDescription(event) { 
      toDosList.toEditTask.description = event.target.value
    },
    editDate(event) {
      toDosList.toEditTask.date = event.target.value
    },
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
      
    }
  },
  computed: {
    taskTitle() {
      // return toDosList.toEditTask.title
      return this.toUpdateTask.title
    },
    taskDescription() {
      return toDosList.toEditTask.description
    },
    taskDate() {
      return toDosList.toEditTask.date
    },
    // newTitle() {
    //   console.log(this.newTitle);
    // }
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