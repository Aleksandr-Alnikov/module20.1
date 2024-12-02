<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="title" placeholder="Заголовок" required />
    <textarea v-model="description" placeholder="Описание"></textarea>
    <select v-model="priority">
      <option value="низкий">Низкий</option>
      <option value="средний">Средний</option>
      <option value="высокий">Высокий</option>
    </select>
    <input type="date" v-model="dueDate" />
    <select v-model="status">
      <option value="новая">Новая</option>
      <option value="в работе">В работе</option>
      <option value="завершена">Завершена</option>
    </select>
    <button type="submit">{{isEdit ? 'Обновить' : 'Сохранить'}}</button>
  </form>
</template>

<script>
export default {
  props: ['task'],
  data() {
    return {
      id: null,
      title: '',
      description: '',
      priority: 'низкий',
      dueDate: '',
      status: 'новая'
    };
  },
  computed: {
    isEdit() {
      return !!this.task;
    }
  },
  watch: {
    task: {
      handler(newTask) {
        if (newTask) {
          this.id = newTask.id;
          this.title = newTask.title;
          this.description = newTask.description;
          this.priority = newTask.priority;
          this.dueDate = newTask.dueDate;
          this.status = newTask.status;
        }
      },
      immediate: true
    }
  },
  methods: {
    handleSubmit() {
      const task = {
        id: this.id || Date.now(),
        title: this.title,
        description: this.description,
        priority: this.priority,
        dueDate: this.dueDate,
        status: this.status
      };

      this.$emit('save-task', task);
      if (!this.isEdit) {
        this.resetForm();
      }
    },
    resetForm() {
      this.title = '';
      this.description = '';
      this.priority = 'низкий';
      this.dueDate = '';
      this.status = 'новая';
    }
  }
};
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
input, textarea, select {
  padding: 10px;
  border: 0;
  background-color: #f7f7f7;
  margin-bottom: 15px;
  font-size: 16px;
}
textarea {
  resize: none;
  height: 150px;
}
</style>