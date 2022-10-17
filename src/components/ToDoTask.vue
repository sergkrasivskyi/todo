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
// import { useToDoList } from '@/stores/ToDoListStore'
// import { useToDoUsers } from '@/stores/ToDoUserStore'
// import { toDosListStore, toDoUserStore } from '@/main'

import { mapStores } from 'pinia'
import { useToDoUsers, useToDoList } from '@/stores'
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
        this.toDosListStore.currenTask.title = event.target.value
      },
      addDescription(event) {
        this.toDosListStore.currenTask.description = event.target.value
      },
      addDate(event) {
        this.toDosListStore.currenTask.date = event.target.value
      },
    },
  computed: {
      ...mapStores(useToDoList, useToDoUsers),
  }
  }
</script>

<style lang="scss" scoped>

</style>