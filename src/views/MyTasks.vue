<template>
  <div>
    <h1>Мои задачи</h1>
    <div v-if="selectedTask">
      <TaskForm :task="selectedTask" @save-task="updateTask" />
      <button @click="cancelEdit">Отмена</button>
    </div>
    <div v-else>
      <TaskList :tasks="tasks" @edit-task="setTaskForEdit" @delete-task="deleteTask" />
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import TaskList from '../components/TaskList.vue';
import TaskForm from '../components/TaskForm.vue';

export default {
  components: { TaskList, TaskForm },
  data() {
    return {
      selectedTask: null
    };
  },
  computed: {
    ...mapGetters('tasks', ['tasks'])
  },
  methods: {
    ...mapActions('tasks', ['editTask', 'deleteTask']),
    setTaskForEdit(task) {
      this.selectedTask = { ...task };
    },
    updateTask(task) {
      this.editTask(task).then(() => {
        this.selectedTask = null;
      });
    },
    cancelEdit() {
      this.selectedTask = null;
    }
  }
};
</script>