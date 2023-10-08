<template>
    <aside>      
      <!-- 출석체크 버튼 -->
      <button class="rounded-button">출석체크</button>
  
      <!-- MBTI 버튼 -->
      <button class="rounded-button">MBTI 순위</button>
  
      <!-- 편지쓰기 버튼 -->
      <button class="rounded-button">편지쓰기</button>
    </aside>
  </template>
  
  <style scoped>
  aside {
    background-color: transparent; /* 배경 투명 설정 */
    width: 20%;
    display: flex;
    flex-direction: column; /* 버튼들을 세로로 배치 */
    align-items: center; /* 버튼들을 가운데 정렬 */
  }
  
  .rounded-button {
    background-color: transparent;
    border: 1px solid black;
    border-radius: 25px;
    text-align: center;
    width: 50px; /* 원형 버튼 너비 조정 */
    height: 50px; /* 원형 버튼 높이 조정 */
    cursor: pointer;
    font-size: 13px; /* 버튼 텍스트 크기 조정 */
    color: #333;
    margin: 10px 0; /* 버튼 간격을 위아래로 조정 */
  }
  
  .rounded-button:hover {
    background-color: #f0f0f0; /* 버튼에 마우스를 올렸을 때 배경색 변경 */
  }
  </style>
  