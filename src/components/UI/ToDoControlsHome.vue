<template>
  <div class="wrapper-controls">
    <span>
      {{tasksAmount}} Todos
    </span>
    <span class="accent-400">
      View all
    </span>
  </div>
</template>

<script>
import { toDosList } from '@/main'
export default {
  name: 'ToDoControlsHome',
  computed: {
    tasksAmount() {
      return toDosList.taskList.length
    }
  }
  
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
@import "@/assets/utility.scss";

.wrapper-controls {
  padding-block: 1rem;
  padding-inline: 0.69rem;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.2;
  // margin-top: 2.62rem;
  height: 3.125rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px dashed rgba(34, 34, 34, 0.5);
}
</style>