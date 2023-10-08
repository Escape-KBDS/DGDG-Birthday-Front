<template>
  <header>
    <img src="../assets/logo_transparent.png" class="header-image">
    <div class="logo">DGDG</div>
  </header>
</template>

<style scoped>
header {
  padding: 10px 0;
  display: flex;
  align-items: center;
  max-height: 70px; /* 원하는 높이로 설정 */
  overflow: hidden; /* 헤더 크기를 넘을 경우 오버플로우를 숨김 */
}

.header-image {
  max-width: 100%;
  max-height: 50px;
  height: 50%;
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

nav ul {
  list-style: none;
  padding: 0;
  display: flex;
}

nav li {
  margin-right: 15px;
}

nav a {
  color: #fff;
  text-decoration: none;
}
</style>
