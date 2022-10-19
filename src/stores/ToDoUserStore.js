import { defineStore, mapActions } from "pinia";
import { useToDoList } from "@/stores";
export const useToDoUsers = defineStore("toDoUser", {
  state: () => {
    return {
      userList: [
        { id: 1, name: "Serg", email: "" },
        { id: 4, name: "Sveta", email: "" },
      ],
      currentUser: { name: "", email: "" },
    };
  },
  getters: {
    isExistUser(state) {
      // повертаємо або самого user, або undefined
      return state.currentUser;
    },
  },
  actions: {
      // функція веріфікації користувача
    toVerify(event) {
      // для початку верифікуємо за ім'ям, потім ускладнемо - пароль і т.п.
      let name = event.target.value;
      // console.log(name);
      let result = this.userList.find((user) => user.name === name);
      // console.log(result);
      // результат - призначаємо currentUser верифікований обїєкт
      result
        ? (this.currentUser = { ...result })
        : (this.currentUser = undefined);
    },
    resetCurrentUser() {
      //  Скидуємо значення на початкове, яке було до входу у App
      this.currentUser.name = "";
    },
  },
});
