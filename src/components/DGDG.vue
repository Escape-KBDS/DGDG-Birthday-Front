<template>
  <div class="home">
    <HeaderComponent />
    <div class="main-content">
      <AsideComponent />
      <ContentComponent />
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue';
import AsideComponent from './AsideComponent.vue';
import FooterComponent from './FooterComponent.vue';
import ContentComponent from './ContentComponent.vue'; // Content 컴포넌트 추가

export default {
  components: {
    HeaderComponent,
    AsideComponent,
    FooterComponent,
    ContentComponent, // Content 컴포넌트 추가
  },
};
</script>

<style scoped>
/* 페이지 전체 스타일 조정 */
.home {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* 화면 높이를 최소화하여 푸터를 최하단에 고정 */
  overflow: hidden; /* 스크롤 숨김 */
}

.main-content {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10 auto;
  padding: 10 auto;
  height: 100%; /* 높이를 화면 높이에 맞춤 */
  flex-grow: 1; 
}
/* 이하 스타일은 이전과 동일하게 유지 */


.footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 10px 0;
}
</style>
