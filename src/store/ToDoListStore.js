import { createPinia, defineStore } from 'pinia'
// import { createPinia } from 'pinia'
// export const store = createPinia();
export const useToDoList = defineStore('ToDoList', {
state: () => {
  return {
    newToDoItem: '',
    fetching: false
  }
},
getters: {
  results(state) {
    return state.newToDoItem
  },
  isFetching(state) {
    return state.fetching
  }
}, 
actions: {
  async fetchNewToDoItem() {
    this.fetching = true;
    const response = await fetch('data/newtodoitems.json')
    try {
      const result = await response.json()
      this.newToDoItem = result.items

    } catch (err) {
      this.newToDoItem = '';
        console.error('Error loading new todoItems:', err);
        return err;
    }
    this.fetching = false
  }
}
})


