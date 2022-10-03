<template>
  <div class="wrapper-item-header bg-neutral-200">
    <label class="checkbox" for="todo">
      <input type="checkbox" name="todo" id="todo">
    </label>
    <label class="title" for="date">
      <input type="text" name="date" id="date" :value="taskDate">
    </label>
    <label class="text" for="text">
      <input type="text" name="text" id="text">
    </label>
    
  </div>
</template>

<script>
export default {
  name: 'ToDoItem',
  props: {
    taskDate: {type: String,
    default: '01.10.2022'}
  }
}
</script>

<style lang="scss" scoped>
.wrapper-item-header {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  height: 2.8rem;
  text-align: left;
  padding-inline: 0.56rem;
  border-radius: 4px;

  & .checkbox {
    flex-basis: 15%;
  }

  & .title {
    flex-basis: 25%;
  }

  & .text {
    flex-basis: 60%;
  }
}
</style>