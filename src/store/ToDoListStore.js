import { createPinia, defineStore } from "pinia";
export const pinia = createPinia();
export const useToDoList = defineStore("ToDoListStore", {
  state: () => {
    return {
      emptyTask: { title: "", description: "", date: "" },
      currenTask: { title: "", description: "", date: "" },
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
    addTodoItem() {
      // додаємо Task у список і визначаємо id цього Task

      this.taskList.push({ id: Date.now(), ...this.currenTask });
      this.currenTask = { ...this.emptyTask };
      // тут можливо, краще було б окремо визначати ключ id,
      // так простіше було б мати доступ, по типу цього
        // this.taskList.id = Date.now() = {...currenTask};
    },
    editToDoItem() {
      // let id = this.toEditTask.id;
      let id = this.currenTask.id;
      // по id знаходимо index Task-а
      let index = this.taskList.findIndex((task) => task.id === id);
      // змінюємо значення усіх властивостей на відредаговані
      
      this.taskList[index] = { ...this.currenTask };
    },
    deleteTask() {
      let id = this.currenTask.id;
      let index = this.taskList.findIndex((task) => task.id === id);
      this.currenTask = { ...this.emptyTask };
        // видаляємо елемент
        id || index
        ? this.taskList.splice(index, 1)
        : console.log("Empty cell");
  }
  },
});



