<template>
  <div id="app">
    <nav>
      <router-link to="/">Мои задачи</router-link>
      <router-link to="/create">Создать задачу</router-link>
      <router-link to="/settings">Настройки</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  padding: 20px 100px;
}

nav {
  margin-bottom: 20px;
  margin: 0 auto;
  display: flex  ;
  justify-content: center;
  gap: 30px;
  padding: 15px;
  border-bottom: 1px solid #c4c4c4;
  color: #000;
}
nav a {
  margin-right: 10px;
  text-decoration: none;
  color: #000;
}
nav a.router-link-active {
  font-weight: bold;
}
</style>
