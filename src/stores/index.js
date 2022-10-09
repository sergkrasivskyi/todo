import { createPinia, mapStores, mapState} from 'pinia'

import { useToDoList } from "@/stores/ToDoListStore";
import { useToDoUsers } from "@/stores/ToDoUserStore";


export default {
  // name: 'stores',
  computed: {
    // other computed properties
    ...mapStores(useToDoList, useToDoUsers),
  },
};  
//   created() {
//     this.toDosListStore; // store with id "user"
//     this.toDoUserStore; // store with id "cart"
//   },
// };
// export const pinia = createPinia();
// export const toDosList = toDoListStore();
// export const toDoUsers = useToDoUsers();

// export const {
//   computed: {
//     // other computed properties
//     // useCounterStore has a state property named `count` and a getter `double`
//     ...mapState(useCounterStore, {
//       n: 'count',
//       triple: store => store.n * 3,
//       // note we can't use an arrow function if we want to use `this`
//       custom(store) {
//         return this.someComponentValue + store.n
//       },
//       doubleN: 'double'
//     })
//   },

//   created() {
//     this.n // 2
//     this.doubleN // 4
//   }
// }