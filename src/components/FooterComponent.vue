<template>
    <footer>
      <!-- 이전 버튼 -->
      <button class="scroll-button" @click="scrollLeft" :disabled="scrollPosition === 0">&#8249;</button>
  
      <!-- 친구 버튼 목록 -->
      <div class="friends" ref="friendsContainer">
        <!-- 친구 버튼 세트 -->
        <div class="friend-set" v-for="(friend, index) in visibleFriends" :key="friend.id">
          <!-- 첫 번째 친구인 경우 > 버튼 표시 -->
          <div v-if="index === 0" class="scroll-right-button">&#8250;</div>
          <div class="story-button">
            <button class="rounded-button"></button>
          </div>
          <div class="friend-name">{{ friend.name }}</div>
          <!-- 마지막 친구인 경우 < 버튼 표시 -->
          <div v-if="index === visibleFriends.length - 1" class="scroll-left-button">&#8249;</div>
        </div>
      </div>
  
      <!-- 다음 버튼 -->
      <button class="scroll-button" @click="scrollRight" :disabled="scrollPosition >= friends.length - visibleFriendsCount">&#8250;</button>
    </footer>
  </template>
  
  <script>
  export default {
    data() {
      return {
        friends: [
          { id: 1, name: "친구 1" },
          { id: 2, name: "친구 2" },
          { id: 3, name: "친구 3" },
          { id: 4, name: "친구 4" },
          { id: 5, name: "친구 5" },
          { id: 6, name: "친구 6" },
          { id: 7, name: "친구 7" },
          { id: 8, name: "친구 8" },
          // 추가 친구 정보는 필요한 만큼 추가
        ],
        scrollPosition: 0,
        visibleFriendsCount: 4, // 화면에 보이는 친구 수
      };
    },
    methods: {
      scrollLeft() {
        if (this.scrollPosition > 0) {
          this.scrollPosition -= 1;
        }
      },
      scrollRight() {
        if (this.scrollPosition < this.friends.length - this.visibleFriendsCount) {
          this.scrollPosition += 1;
        }
      },
    },
    computed: {
      // 화면에 보이는 친구 목록을 계산
      visibleFriends() {
        return this.friends.slice(this.scrollPosition, this.scrollPosition + this.visibleFriendsCount);
      },
    },
    watch: {
      // 사용자 화면 크기가 변경될 때, 가로 스크롤 초기화
      '$el.offsetWidth': {
        handler() {
          this.scrollPosition = 0;
        },
        immediate: true,
      },
    },
    mounted() {
      // 사용자 화면 크기가 변경될 때, 가로 스크롤 초기화
      window.addEventListener('resize', () => {
        this.scrollPosition = 0;
      });
    },
  };
  </script>
  
  <style scoped>
  footer {
    background-color: #333;
    color: #fff;
    padding: 10px 0;
    text-align: center;
    overflow-x: auto; /* 가로 스크롤 활성화 */
    white-space: nowrap; /* 가로로 줄 바꿈 방지 */
  }
  
  .friend-list {
    display: flex;
    align-items: center;
    margin: 0 auto;
  }
  
  .friends {
    display: inline-flex;
    align-items: center;
  }
  
  .friend-set {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 10px; /* 각 버튼 세트 간격 조절 */
  }
  
  .story-button {
    width: 60px; /* 버튼 너비 */
    height: 60px; /* 버튼 높이 */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .rounded-button {
    background-color: #f0f0f0; /* 버튼 배경색 */
    border: 1px solid #ccc; /* 테두리 스타일 */
    border-radius: 50%; /* 원형 버튼 모양 */
    width: 40px; /* 버튼 너비 */
    height: 40px; /* 버튼 높이 */
    cursor: pointer;
  }
  
  .rounded-button::before {
    content: "❤"; /* 아이콘 내용 설정 */
    font-size: 20px; /* 아이콘 크기 설정 */
    line-height: 40px; /* 아이콘을 버튼 가운데 정렬하기 위한 값 */
    color: #fff; /* 아이콘 색상 */
    display: block;
    text-align: center;
  }
  
  .friend-name {
    color: #fff; /* 친구 이름 텍스트 색상 */
    margin-top: 5px; /* 친구 이름과 버튼 간격 조절 */
  }
  
  .scroll-button {
    background-color: transparent;
    border: none;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
    outline: none;
    padding: 5px;
  }
  
  .scroll-button:hover {
    background-color: #555;
  }
  
  /* 스크롤 이벤트 발생 시, 가로 스크롤 기능 활성화 */
  ::-webkit-scrollbar {
    height: 10px;
    background-color: #333;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #f0f0f0;
    border-radius: 5px;
  }
  
  ::-webkit-scrollbar-track {
    background-color: #333;
  }
  
  /* > 버튼 스타일 설정 */
  .scroll-right-button {
    font-size: 24px;
    color: #fff;
    cursor: pointer;
    margin-top: 5px; /* > 버튼과 친구 이름 간격 조절 */
  }
  
  /* < 버튼 스타일 설정 */
  .scroll-left-button {
    font-size: 24px;
    color: #fff;
    cursor: pointer;
    margin-top: 5px; /* < 버튼과 친구 이름 간격 조절 */
  }
  </style>
  