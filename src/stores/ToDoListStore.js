import { defineStore, mapActions, mapStores } from "pinia";
import { useToDoUsers } from "@/stores"; 
export const useToDoList = defineStore("toDosList", {
  state: () => {
    return {
      emptyTask: { title: "", description: "", date: "" },
      currenTask: { title: "", description: "", date: "" },
      fetching: false,
      taskPosition: 0,
      taskOnPage: 5,
      // startList: [],
      tasksList: [],

    };
  },
  getters: {
    // results(state) {
    //   return state.newToDoItem;
    // },
    isFetching(state) {
      return state.fetching;
    },
    // my getters
    viewList(state) {
      const viewedList = [...state.tasksList];
      return viewedList.splice(state.taskPosition, state.taskOnPage);
    },
    // getters: {
    //   doneTodos: (state) => state.todos.filter((todo) => todo.done),
    // },
  },
  actions: {
    saveUserTodos(user) {
    // Зберігаємо tasksList, додаємо UserId користувача currentUser зі toDoUserStore
      this.userTasksList = [];
      localStorage.setItem("name", user.name);
    },

    loadMore(amount) {
      this.taskOnPage = amount;
    },
    //  Звичайний GET запрос
    loadTodos() {
      fetch("https://dummyjson.com/todos")
        .then((res) => res.json())
        .then(console.log);
    },
    // асинхронний GET запрос
    // усі - https://dummyjson.com/todos
    // Запрос для user з id: 5
    //  https://dummyjson.com/todos/user/5

    // async fetchToDoStartList() {
    //   this.fetching = true;
    //   const response = await fetch("https://dummyjson.com/todos");
    //   try {
    //     const result = await response.json();
    //     // отримуємо todos для усіх users та записуємо у startList
    //     this.startList = [...result.todos];
    //   } catch (err) {
    //     this.startList = [];
    //     console.error("Error loading StartList:", err);
    //     return err;
    //   }
    //   this.fetching = false;
    // },
    async fetchUserTaskList(user) {
      this.fetching = true;
      const response = await fetch(`https://dummyjson.com/todos/user/${user.id}`);
      try {
        const result = await response.json();
        // отримуємо todos для усіх users та записуємо у startList
        this.tasksList = [...result.todos];
        this.tasksList.forEach((task) => {
          task.title = task.todo;
          delete task.todo;
        });
        // this.tasksList = [...this.startList];
        // this.tasksList = [...result.todos];
      } catch (err) {
        this.tasksList = [];
        console.error("Error loading tasksList:", err);
        return err;
      }
      this.fetching = false;
    },
    addTodoItem() {
      // додаємо Task у список і визначаємо id цього Task

      this.tasksList.push({ id: Date.now(), ...this.currenTask });
      this.currenTask = { ...this.emptyTask };

      // тут можливо, краще було б окремо визначати ключ id,
      // так простіше було б мати доступ, по типу цього
      // this.tasksList.id = Date.now() = {...currenTask};
    },
    editToDoItem() {
      // let id = this.toEditTask.id;
      let id = this.currenTask.id;
      // по id знаходимо index Task-а
      let index = this.tasksList.findIndex((task) => task.id === id);
      // змінюємо значення усіх властивостей на відредаговані

      this.tasksList[index] = { ...this.currenTask };
    },
    setCurrenTask(task) {
      this.currenTask = { ...task };
    },
    deleteTask() {
      let id = this.currenTask.id;
      let index = this.tasksList.findIndex((task) => task.id === id);
      // this.currenTask = { ...this.emptyTask };
      this.initializeTask();
      // видаляємо елемент
      id || index ? this.tasksList.splice(index, 1) : console.log("Empty cell");
    },
    initializeTask() {
      this.currenTask = { ...this.emptyTask };
    },
  },
});



