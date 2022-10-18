<template>
  <div class="splash-wrapper">
    <div class="wrapper">
      <ToDoIconLogo />
      <h1>Make successful your day</h1>
      <h2 class="accent-200">Make small somethings to get big gift in your life</h2>
      <div class="authorize-form">
        <ToDoAuthorization />
        <ToDoButton class="bg-accent-400 button-splash"
          @clickButton="gotoHomeScreen"
        >Start</ToDoButton>
      </div>
    </div>
  </div>
</template>

<script>
import { mapStores, mapState } from 'pinia'
import { useToDoUsers } from '@/stores' 

// import contentStore from '@/stores/ToDoContentStore'
export default {
  name: 'SplashScreen',
  state: () => {
    
    return {
      
    }
  },
  computed: {
    // Можна розгорнути весь toDoUserStore за допомогою 
    // ...mapStores(useToDoUsers)
    // Ми беремо гетер 'isExistUser' зі toDoUserStore
    ...mapState(useToDoUsers, ['isExistUser']),
  },
  methods: {
    startToDo() {
      this.$emit('startToDo')
    },
    gotoHomeScreen() {
      // console.log(this.$router);

      // console.log(event)
      // const contentStore = useContentStore();
      // console.log(this.$pinia.state.value)
      // Перенесли перевірку у методи toDoUserStore
      // let userName = this.toDoUserStore.currentUser.name
      // let isExistUser = this.toDoUserStore.userList.find((user) => user.name === userName)
      // isExistUser ? this.$router.push('/homescreen') : console.log('User does not exist')

      // інший метод
      // this.toDoUserStore.isExistUser ? this.$router.push('/homescreen') : console.log('User does not exist')
      
      // Ще один метод - за допомогою mapState - імпортували гетер 'isExistUser' 
      // зі стору toDoUserStore, отримуємо доступ за допомогою this.isExistUser
      this.isExistUser ? this.$router.push('/homescreen') : console.log('User does not exist')

    }
  }


}
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
@import "@/assets/utility.scss";
h1 {
  font-family: 'Creepster', serif;
}
h2 {
  font-family: 'Montserrat', serif;
  font-weight: 500;
    font-size: 1rem;
    line-height: 1.2;
}
.splash-wrapper {
  background: linear-gradient($accent-color-600, $accent-color-400);
  padding-inline: 2rem;
  height: 100vh;
  
}
.wrapper {
  background-color: $primary-color-400;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 20px 20px;
  
  color: $primary-color-200;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  row-gap: 2rem;

  padding-inline: 2rem;
  padding-block: 3.5rem 4.6rem;
}
.authorize-form {
  display: flex;
  column-gap: 2rem;
}
</style>