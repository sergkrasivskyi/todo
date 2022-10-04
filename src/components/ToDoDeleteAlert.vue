<template>
  <div class="delete-alert-wrapper">
    <div class="wrapper">
      <h1>Task deleted</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToDoDeleteAlert'
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
@import "@/assets/utility.scss";

h1 {
  font-family: 'Creepster', serif;
}
.delete-alert-wrapper {
    background: linear-gradient($accent-color-600, $accent-color-400);
    padding-inline: 2rem;
    height: 100vh;
  & .wrapper {
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

}
</style>