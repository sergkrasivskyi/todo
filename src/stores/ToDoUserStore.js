import { defineStore } from 'pinia'
export const useToDoUsers = defineStore("toDoUser", {
  state: () => {
    return {
      userList: [
        { name: "Serg", email: "" },
        { name: "Sveta", email: "" },
      ],
      currentUser: { name: "", email: "" },
    };
  },
  actions: {
    addUser() {
      this.userList.push({ id: Date.now(), ...this.currentUser });
    }
  },
  // getters: {
  //   currentUser() {
  //     return user
  //   }
  // }
})