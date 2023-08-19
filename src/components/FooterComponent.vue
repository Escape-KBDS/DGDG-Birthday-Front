<template>
    <div class="footer">
        <ul class="footer-button-plus">
            <input @change="upload" @click="loginWithKakao()" type="file" id="file" class="inputfile" />
            <label for="file" class="input-plus">+</label>
        </ul>
        
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer {
    width: 100%;
    position: sticky;
    bottom: 0;
    padding-bottom: 10px;
    background-color: white;
}

.footer-button-plus {
    width: 80px;
    margin: auto;
    text-align: center;
    cursor: pointer;
    font-size: 24px;
    padding-top: 12px;
}

.sample-box {
    width: 100%;
    height: 600px;
    background-color: bisque;
}

.inputfile {
    display: none;
}

.input-plus {
    cursor: pointer;
}
</style>