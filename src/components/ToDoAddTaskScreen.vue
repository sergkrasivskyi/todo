<template>
  <div class="wrapper-add-task">
    <ToDoHeaderAppBar>
      <template v-slot:header-app-text>
        Add task
      </template>
    </ToDoHeaderAppBar>
    <div class="container flow">
      <ToDoIconLogo space-type="200"></ToDoIconLogo>
      <ToDoFormInput 
        class="wide" 
        type="text"
        placeholder="Enter task title"
        
        @update:modelValue="addTitle">
        <template v-slot:label-text>
          Title
        </template>
      </ToDoFormInput>
      <ToDoFormInput 
        class="wide"
        type="text"
        placeholder="Enter task description" 
        @update:modelValue="addDescription">
        <template v-slot:label-text>
          Description
        </template>
      </ToDoFormInput>
      <ToDoFormInput 
        class="wide"
        type="date" 
        placeholder="Enter Date end"
        @update:modelValue="addDate">
        <template v-slot:label-text>
          Date end
        </template>
      </ToDoFormInput>
      <div class="buttons">
        <ToDoButton class="bg-accent-400 task-button" 
          @clickButton="addTaskToList"
          >{{addAlert}}
        </ToDoButton>
        <ToDoButton class="bg-accent-600 task-button" 
          @clickButton="cancelAddPage"
          >Cancel
        </ToDoButton>
      </div>
    </div>
  </div>
</template>

<script>
import { toDosList } from '@/main'

export default {
  name: 'ToDoAddTaskScreen',
  data() {
    return {
      addAlert:'Add',
      currenTask: { title: '', description: '', date: '' }
    }
  },

  methods: {
    addTitle(event) {
      this.currenTask.title = event.target.value
      // console.log(event.target.value);
    },
    addDescription(event) {
      this.currenTask.description = event.target.value
      // console.log(event.target.value);
    },
    addDate(event) {
      this.currenTask.date = event.target.value
      // console.log(event.target.value);
    },

    addTaskToList() {
      toDosList.addTodoItem(this.currenTask)
      this.addAlert = 'Added!'
      setTimeout(this.$emit, 1000, 'addTaskDone');
      // this.$emit('addTaskDone')

    },
    cancelAddPage() {
      this.$emit('cancelAddPage')
    }
  },
  computed: {
    // addAlert() {
    //   return
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