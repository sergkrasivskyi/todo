<template>
  <form>
      <ToDoFormInput 
        class="wide" 
        type="text" 
        placeholder="Enter task title" 
        :modelValue="title"
        @update:modelValue="addTitle">
        <template v-slot:label-text>
          Title
        </template>
      </ToDoFormInput>
      <ToDoFormInput 
        class="wide" 
        type="text" 
        placeholder="Enter task description" 
        :modelValue="description"
        @update:modelValue="addDescription">
        <template v-slot:label-text>
          Description
        </template>
    </ToDoFormInput>
      <ToDoFormInput 
        class="wide" 
        type="date" 
        placeholder="Enter Date end" 
        :modelValue="date"
        @update:modelValue="addDate">
        <template v-slot:label-text>
          Date end
        </template>
      </ToDoFormInput>

  </form>
</template>

<script>
// import  stores  from '@/stores'
  export default {
    name: 'ToDoTask',
    props: {
      title: {
        type: String,
        default: ""
      },
      description: {
        type: String,
        default: ""
      },
      date: {
        type: String,
        default: ""
      }
  },
  methods: {
      addTitle(event) {
        toDosList.currenTask.title = event.target.value
      },
      addDescription(event) {
        toDosList.currenTask.description = event.target.value
      },
      addDate(event) {
        toDosList.currenTask.date = event.target.value
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>