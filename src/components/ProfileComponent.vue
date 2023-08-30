<template>
  <div class="container">
    <div class="centered-content">
      <label for="mbti">MBTI</label>
      <select name="mbti" required v-model="selectedMBTI">
        <option value="" disabled selected>Select MBTI</option>
        <option v-for="mbtiType in mbtiOptions" :value="mbtiType" :key="mbtiType">{{ mbtiType }}</option>
      </select>
    </div>
    <div class="centered-content">
      <label for="gender">Gender</label>
      <select name="gender" required v-model="selectedGender">
        <option value="" disabled selected>Select Gender</option>
        <option v-for="gender in genderOptions" :value="mbtiType" :key="gender">{{ gender }}</option>
      </select>
    </div>
    <div class="centered-content">

      <label for="age">Age</label>
      <input type="text" placeholder="Input Age"/>
    </div>
    <div class="centered-content">

      <label for="profileImage">Profile IMG</label>
      <input  type="file" id="file" class="inputfile" />    
    </div>
  </div>
  </template>
<script>
export default {
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
            genderOptions: [
                "Agender", "Female/Woman", "Genderqueer",
                "Gender Fluid",
                "Gender Non-Conforming",
                "Intergender", "Intersex", "Male/Man"
            ],
        };
    }
};
</script>
<style>
select option[value=""][disabled] {
    display: none;
}
.centered-content {
  text-align: center;
  padding: 20px;
  display: block;
}
</style>