import { createPinia, defineStore } from "pinia";
// import { createPinia } from 'pinia'
export const pinia = createPinia();
export const useToDoList = defineStore("ToDoListStore", {
  state: () => {
    return {
      toEditTask: {},
      fetching: false,
      taskList: [],
    };
  },
  getters: {
    results(state) {
      return state.newToDoItem;
    },
    isFetching(state) {
      return state.fetching;
    },
  },
  actions: {
    async fetchNewToDoItem() {
      this.fetching = true;
      const response = await fetch("data/newtodoitems.json");
      try {
        const result = await response.json();
        this.newToDoItem = result.items;
      } catch (err) {
        this.newToDoItem = "";
        console.error("Error loading new todoItems:", err);
        return err;
      }
      this.fetching = false;
    },
    addTodoItem(currenTask) {
      this.taskList.push({id: Date.now(), ...currenTask});
    },
    editToDoItem(taskToEdit) {
      console.log(taskToEdit);
      // забрати дані з форми Edit так змінити потрібний Task
    }
  },
});



