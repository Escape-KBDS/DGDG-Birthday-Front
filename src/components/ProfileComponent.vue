<template>
    <label for="mbti">MBTI</label>
    <div>
        <select name="mbti" required v-model="selectedMBTI">
            <option value="" disabled selected>Select MBTI</option>
            <option v-for="mbtiType in mbtiOptions" :value="mbtiType" :key="mbtiType">{{ mbtiType }}</option>
        </select>
    </div>
    <label for="gender">Gender</label>
    <div>
        <select name="gender" required v-model="selectedGender">
            <option value="" disabled selected>Select Gender</option>
            <option v-for="gender in genderOptions" :value="mbtiType" :key="gender">{{ gender }}</option>
        </select>
    </div>
    <label for="age">Age</label>
    <div>
        <input type="text" placeholder="Input Age"/>
    </div>
    <label for="profileImage">Profile IMG</label>
    <div>
        <input  type="file" id="file" class="inputfile" />    
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
</style>