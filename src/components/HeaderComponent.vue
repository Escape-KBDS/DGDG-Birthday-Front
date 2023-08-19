<template>
    <div class="header">
        <ul class="header-button-left">
            <li>header left</li>
        </ul>
        <ul class="header-button-right">
            <li>header right</li>
        </ul>
        <img src="https://t1.daumcdn.net/cfile/tistory/99857F4F5E738F472F" class="logo" />
    </div>
</template>

<script>
export default {
    name: 'HeaderComponent',
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
  font-family: 'Montserrat', sans-serif;
  display: flex; /* 추가: 헤더 내부 컨텐츠를 가로로 정렬 */
  justify-content: space-between; /* 추가: 왼쪽, 가운데, 오른쪽 정렬 */
}

.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}

.header-button-left,
.header-button-right {
  list-style: none;
  margin-top: 10px;
  padding: 0;
  cursor: pointer;
}
</style>