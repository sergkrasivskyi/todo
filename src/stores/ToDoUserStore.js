import { defineStore } from 'pinia'
export const useToDoUsers = defineStore("toDoUser", {
  state: () => {
    return {
      userList: [],
      currentUser: {name: '', email: ''}
    }
  }
})