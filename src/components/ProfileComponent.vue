<template>
  <HeaderComponent></HeaderComponent>
  <div class="container">
    <div class="form-group">
      <h1 style="text-align: center;">MyPage</h1>
      <div class="img-logo" alt=""></div>
    </div>
    <div class="mailbox-container">
      <div class="mailbox">
        <p>내게 온 생일편지</p>
        <div class="letter-list" style="background-color: aqua;">편지 리스트가 저장될 곳</div>
      </div>
      <div class="mailbox">
        <p>내가 쓴 생일편지</p>
        <div class="letter-list" style="background-color: aqua;">편지 리스트가 저장될 곳</div>
      </div>
    </div>
    <div class="mailbox-container">
      <div class="mailbox">
        <p>나이 입력</p>
        <input type="text" class="my-input">
      </div>
      <div class="mailbox">
        <p>MBTI 입력</p>
        <div class="letter-list">
          <select name="mbti" required v-model="selectedMBTI" class="my-select">
          <option value="" disabled selected>MBTI 선택</option>
          <option v-for="mbtiType in mbtiOptions" :value="mbtiType" :key="mbtiType">{{ mbtiType }}</option>
        </select>
        </div>
      </div>
    </div>
  </div>
  <FooterComponent></FooterComponent>
</template>
<script>
import HeaderComponent from './HeaderComponent.vue';
import FooterComponent from './FooterComponent.vue';
export default {
  name: "ProfileComponent",
  components: {HeaderComponent, FooterComponent},
  data() {
    return {
      selectedMBTI: "",
      selectedGender: "",
      mbtiOptions: [
        "ISTJ", "ISFJ", "INFJ", "INTJ",
        "ISTP", "ISFP", "INFP", "INTP",
        "ESTP", "ESFP", "ENFP", "ENTP",
        "ESTJ", "ESFJ", "ENFJ", "ENTJ"
      ],
    };
  }
};
</script>
<style scoped>
.line_next {
  display: block;
  padding: 5px;
}

.img-logo {
  background-image: url("https://img.freepik.com/free-vector/cute-cat-story-highlights-icon-social-media-vector_53876-140805.jpg");
  width: 200px;
  height: 200px;
  background-size: cover;
}

.form-group {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 10px;
}

select option[value=""][disabled] {
  display: none;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.mailbox-container {
  display: flex;
  justify-content: center;
  width: 320px;
  margin: 10px;
  padding: 5px;
}

.mailbox {
  padding: 5px;
  margin: 10px;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 100%;
  background-color: greenyellow;
}

.my-input {
  width: 80%;
  height: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 12px;
  outline: none;
  align-items: center;
  justify-content: center;
}

.my-input:focus {
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

.my-select {
  width: 80%;
  height: 23px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 12px;
  outline: none;
  align-items: center;
  justify-content: center;
}


</style>
