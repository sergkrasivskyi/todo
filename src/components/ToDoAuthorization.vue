<template>
    <ToDoFormInput 
        type="text" 
        placeholder="Enter your name" 
        :style="style"
      
        @update:modelValue="autorize">
        <template  v-slot:label-text>
          Enter your name
        </template>
    >
  </ToDoFormInput>

</template>

<script>
// import { toDoUserStore } from '@/main'
import { mapStores } from 'pinia'
// import stores from './stores'
import { useToDoUsers } from '@/stores'
export default {
  name: 'ToDoAuthorization',
  data() {
    return {
      style: {
        color: "#fff",
      },
      name: ''

    }
  },
  computed: {
    ...mapStores(useToDoUsers)
  },
  methods: {
    autorize(event) {
      this.toDoUserStore.currentUser.name = event.target.value
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
@import "@/assets/utility.scss";
.auth {
  label {
    color: $primary-color-200;
  }
}
</style>