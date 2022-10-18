import { defineStore } from 'pinia'
export const useToDoUsers = defineStore("toDoUser", {
  state: () => {
    return {
      userList: [
        { id: 1, name: "Serg", email: "" },
        { id: 2, name: "Sveta", email: "" },
      ],
      verifiedUser: { name: "", password: "" },
      currentUser: { name: "", email: "" },
    };
  },
  actions: {
    addUser() {
      this.userList.push({ id: Date.now(), ...this.currentUser });
    },
    // функція веріфікації користувача
    toVerify(user) {
      // для початку верифікуємо за ім'ям
      let name = user.name;
      // повертаємо або самого user, або undefined
      let result = this.userList.find((user) => (user.name = name));
      console.log(result);
      return result;
    },
  },
  getters: {
    // функція веріфікації користувача, 
    isExistUser() {
      let userName = this.verifiedUser.name;
      let result = this.userList.find((user) => user.name === userName);
      console.log(result);
      return result;
    },
  },
});