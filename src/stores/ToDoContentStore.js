import { defineStore, mapStores } from "pinia";
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

export default {
  computed: {
    // other computed properties
    // ...
    // gives access to this.counterStore and this.userStore
    ...mapStores(useContentStore),
    // gives read access to this.count and this.double
    // ...mapState(useContentStore, ["userContent"]),
  },
  methods: {
    // gives access to this.increment()
    // ...mapActions(useContentStore, ["addContent"]),
  },
};