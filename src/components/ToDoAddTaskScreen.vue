<template>
  <div class="wrapper-add-task">
    <ToDoHeaderAppBar>
      <template v-slot:header-app-text>
        Add task
      </template>
    </ToDoHeaderAppBar>
    <div class="container flow">
      <ToDoIconLogo class="center"></ToDoIconLogo>
      <ToDoFormInput>
        <template v-slot:label-text>
          Title
        </template>
      </ToDoFormInput>
      <ToDoFormInput>
        <template v-slot:label-text>
          Description
        </template>
      </ToDoFormInput>
      <ToDoFormInput >
        <template v-slot:label-text>
          Date end
        </template>
      </ToDoFormInput>
      <div class="buttons">
        <ToDoButton class="bg-accent-400 task-button">Add</ToDoButton>
        <ToDoButton class="bg-accent-600 task-button">Cancel</ToDoButton>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToDoAddTaskScreen'
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
@import "@/assets/utility.scss";
:where(.flow > :not(:first-child) ) {
  margin-top: 1.5rem;
}
.buttons {
  display: flex;
  justify-content: space-around;
}
.wrapper-add-task {
  height: 100vh;
}
.center {
  
}
</style>