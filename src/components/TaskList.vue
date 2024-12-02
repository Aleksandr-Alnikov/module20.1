<template>
  <ul>
    <li v-for="task in tasks" :key="task.id">
      <p>{{task.title}}</p>
      <div class="wrapper">
        <p>{{task.status}}</p>
        <button @click="editTask(task)">Редактировать</button>
        <button @click="deleteTask(task.id)">Удалить</button>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['tasks'],
  methods: {
    editTask(task) {
      this.$emit('edit-task', task);
    },
    deleteTask(id) {
      this.$emit('delete-task', id);
    }
  }
};
</script>

<style>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin-bottom: 10px;
  padding: 10px;
  border-bottom: 1px solid #c19c9c;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
button {
  background-color: transparent;
  border: 0;
  cursor: pointer;
}
.wrapper {
  display: flex;
  gap: 15px;
}
</style>