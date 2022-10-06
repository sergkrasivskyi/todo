<template>
  <div class="wrapper-add-task">
    <ToDoHeaderAppBar
      @pageClose="cancelAddPage">
      <template v-slot:header-app-text>
        Add task
      </template>
    </ToDoHeaderAppBar>
    <div class="container flow">
      <ToDoIconLogo space-type="200"></ToDoIconLogo>

      <ToDoTask></ToDoTask>
      
      <div class="buttons">
        <ToDoButton class="bg-accent-400 task-button" 
          @clickButton="addTaskToList"
          >{{ addAlert }}
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
      currenTask: { title: 'Hello', description: 'asda', date: '2022-10-06' }
    }
  },

  methods: {
    addTitle(event) {
      this.currenTask.title = event.target.value
    },
    addDescription(event) {
      this.currenTask.description = event.target.value
    },
    addDate(event) {
      this.currenTask.date = event.target.value
    },

    addTaskToList() {
      // toDosList.addTodoItem(this.currenTask)
      toDosList.addTodoItem()
      this.addAlert = 'Added!'
      setTimeout(this.$emit, 1000, 'addTaskDone');
    },
    cancelAddPage() {
      this.$emit('cancelAddPage')
    },
  
  },
  computed: {

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