<template>
  <router-view></router-view>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style>
body {
  height: 100%;
  margin: 0;
}

ul {
  padding: 5px;
  list-style-type: none;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
  /* overflow: hidden; */
  
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /* background-color: #f0f0f0; */
}
</style>
