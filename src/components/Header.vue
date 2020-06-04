<template>
  <header class="header">
    <div class="container">
      <div class="header-inner">
        <router-link class="header-logo" to="/">Quiz App</router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  padding: 10px 0;
  background-color: #ccc;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.5);
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  z-index: 10;
}
.header-logo {
  text-decoration: none;
  color: inherit;
}
</style>
