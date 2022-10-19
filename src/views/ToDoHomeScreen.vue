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
        v-for="item in viewList"
        :key="item.id"
        :taskDate="item.date"
        :taskTitle="item.title"
        @click="toEditTaskScreen(item)"
      ></ToDoItem>

      <!-- end loop -->
      <ToDoButton class="accent-400 bg-primary-200" space-type="300"
        @clickButton="showMoreTasks"
      >Load more...</ToDoButton>
    </div>
    <ToDoBottomBar class="flex-bottom" space-type="550"
      @addTaskClick="addTask"
    ></ToDoBottomBar>
    <!-- loadTodos -->
  </div>
</template>

<script>
import { mapStores, mapActions, mapState } from 'pinia'
import { useToDoList, useToDoUsers } from '@/stores'

export default {
  name: 'ToDoHomeScreen',
  computed: {
    // За допомогою mapState маємо доступ до state нашого store але ми не змінюємо ці значення
    // Щоб змінити, потрібно брати інший хелпер - mapWritableState, але зазвичай state 
    // не змінюють у компоненті, а використовуть для цього actions
    ...mapState(useToDoList, ['viewList']),
    ...mapState(useToDoUsers, ['currentUser']),
    // ...mapStores(useToDoList, useToDoUsers),
    // console.log(listStore);
    // tasksList() {
      //   return this.toDosListStore.tasksList;
      //   // console.log(stores);
      // }
    },
  methods: {
    showMoreTasks() {
      this.loadMore(15)
    },
    goToSplashscreen() {
      // Скидуємо значення currentUser на початкове, яке було до входу у App
      // this.toDoUserStore.currentUser.name = ''
      // за допомогою action самого userStore
      this.saveUserTodos(this.currentUser)
      this.resetCurrentUser()
      this.$router.push('/')
    },
    addTask() {
      this.$router.push('/addscreen') 
      // this.$emit('addTask')
    },
    toEditTaskScreen(item) {
      // this.$emit('editTask', item)
      this.setCurrenTask(item)
      this.$router.push('/editscreen')
    },
    loadToList() {
      this.loadTodos()
    },
    // Цей хелпер mapActions використовуємо у methods, інші у computed
    ...mapActions(useToDoList, ['loadTodos', 'setCurrenTask', 'loadMore', 'saveUserTodos']), 
    ...mapActions(useToDoUsers, ['resetCurrentUser']), 
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