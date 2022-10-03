<template>
  <div class="wrapper-item-header bg-neutral-400">
    <label class="checkbox" for="todo">
      <input type="checkbox" name="todo" id="todo" disabled>
    </label>
    <span class="title">Date</span>
    <span class="text">Task</span>
  </div>
</template>

<script>
export default {
  name: 'ToDoItemHeader'
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
    flex-basis: 20%;
  }

  & .title {
    flex-basis: 30%;
  }

  & .text {
    flex-basis: 50%;
  }
}
</style>