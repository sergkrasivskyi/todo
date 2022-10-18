import { defineStore } from "pinia";
export const useContentStore = defineStore("content", {
  state: () => {
    return {
      userContent: {id: '', text: ''}
    };
  },
  actions: {
    addContent() {
      console.log('Add Content!');
    }
  }
});
