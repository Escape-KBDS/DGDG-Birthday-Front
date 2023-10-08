<template>
    <content>
      <div class="centered-buttons">
        <!-- 우체통 버튼 -->
        <button class="rounded-button">우체통</button>
  
        <!-- 고양이 버튼 -->
        <button class="rounded-button">고양이</button>
      </div>
    </content>
  </template>
  
  <style scoped>
  content {
    background-color: transparent; /* 배경 투명 설정 */
    width: 100%; /* 전체 너비를 사용 */
    height: 100%; /* 전체 높이를 사용 */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .rounded-button {
    background-color: transparent;
    border: 1px solid black;
    border-radius: 50%;
    width: 100px; /* 원형 버튼 너비 조정 */
    height: 100px; /* 원형 버튼 높이 조정 */
    cursor: pointer;
    font-size: 16px; /* 버튼 텍스트 크기 조정 */
    color: #333;
    margin: 10px; /* 버튼 간격 조정 */
  }
  
  .rounded-button:hover {
    background-color: #f0f0f0; /* 버튼에 마우스를 올렸을 때 배경색 변경 */
  }
  </style>
  