<template>
  <div>
    <h1>Создать задачу</h1>
    <TaskForm @save-task="saveTask" />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import TaskForm from '../components/TaskForm.vue';

export default {
  components: { TaskForm },
  methods: {
    ...mapActions('tasks', ['addTask']),
    saveTask(task) {
      this.addTask(task);
      this.$router.push('/');
    }
  }
};
</script>