<template>
  <div class="container">
    <div class="centered-content">
      <h3 class="moving-text ">DGDG Birthday</h3>
      <div class="logo">
        <img src="../assets/logo_transparent.png" alt="DGDG BirthDay Logo" style="width: 50%;">
      </div>
      <button class="kakao-login-button" style="width: 150px" @click="loginWithKakao">
        로그인
      </button>
      <button class="normal-login-button" style="width: 150px" @click="loginWithKakao">
        둘러보기
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "DGDG",
  methods: {
    loginWithKakao() {
      this.$router.push('/main');
    }
  },
};
</script>
<style>

@keyframes moveUpDown {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.moving-text {
  font-size: 24px;
  position: relative;
  animation: moveUpDown 2s ease-in-out infinite;
}
.logo {
  animation: hi;
  animation-duration: 3s;
  animation-timing-function: linear;
  animation-delay: 1s;
  animation-iteration-count: 100;
}
.centered-content {
  text-align: center;
  padding: 20px;
}
.kakao-login-button,
.normal-login-button {
  display: block;
  margin: 10px auto;
  padding: 8px 16px;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
}
.kakao-login-button {
  background-color: #1b0fbd;
}

.normal-login-button {
  background-color: #007aff;
}
.container {
  justify-content: center;
  align-items: center;
  /* background-color: #f0f0f0; */
}

/* 모바일 화면에 대한 미디어 쿼리 */
/* @media (max-width: 768px) {
    .centered-content {
      padding: 10px;
    }
  
    .logo {
      margin-top: 20px;
    }
  
    .kakao-login-button,
    .normal-login-button {
      font-size: 12px;
      padding: 6px 12px;
    }
  } */
</style>
  