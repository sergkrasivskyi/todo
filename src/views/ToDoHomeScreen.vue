<template>
  <div class="wrapper flow">
    <ToDoAppBar class="flex-head" space-type="0"
    @clickLogo="goToSplashscreen()"
    ></ToDoAppBar>
    <div class="container flex-main">
      <ToDoControlsHome space-type="250" />
      <ToDoItemHeader space-type="50"/>
      <!-- loop have been here -->
      <ToDoItem space-type="50"
        v-for="item in tasksList"
        :key="item.id"
        :taskDate="item.date"
        :taskTitle="item.title"
        @click="toEditTaskScreen(item)"
      ></ToDoItem>

      <!-- end loop -->
      <ToDoButton class="accent-400 bg-primary-200" space-type="300">Load more...</ToDoButton>
    </div>
    <ToDoBottomBar class="flex-bottom" space-type="550"
      @addTaskClick="addTask"
    ></ToDoBottomBar>
  </div>
</template>

<script>
import { mapStores  } from 'pinia'
import { useToDoList, useToDoUsers } from '@/stores'

export default {
  name: 'ToDoHomeScreen',
  data() {
    return {
    }
  },
  methods: {
    goToSplashscreen() {
      // Скидуємо значення на початкове, яке було до входу у App
      this.toDoUserStore.currentUser.name = ''
      // this.userStore.currentUser.name = ''
      this.$router.push('/')
    },
    addTask() {
      this.$router.push('/addscreen') 
      // this.$emit('addTask')
    },
    toEditTaskScreen(item) {
      // this.$emit('editTask', item)
      this.$router.push('/editscreen')
      this.toDosListStore.setCurrenTask(item)
    },

  },
  computed: {
    // ...mapState(useToDoList, ['listStore']),  
    ...mapStores(useToDoList, useToDoUsers),
    // console.log(listStore);
    tasksList() {
      return this.toDosListStore.taskList;
      // console.log(stores);
    }
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
@import "@/assets/utility.scss";

.wrapper {
  background-color: $primary-color-200;
  height: 100vh;
  text-align: center;
  width: 100%;
  min-width: 375px;

  & .flex-head {
    flex: 0 0 auto;
  }

  & .flex-main {
    flex: 1 1 auto
  }

  & .flex-bottom {
    flex: 0 0 auto
  }
  &.flow {
    display: flex;
    flex-direction: column;
  }
}

</style>