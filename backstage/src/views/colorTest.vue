<template>
    <div class="UserProfilePreview">
        <div style="height: 20px;line-height: 20px">切换颜色</div>
        <el-color-picker
                :predefine="predefineColors"
                show-alpha
                @active-change="changeColor"
                v-model="color1">
        </el-color-picker>
        <div style="width: 100px;height: 100px;background-color: var(--colorTest);"></div>
        <div class="colorTest"></div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                color1: 'rgba(85,119,55,0.6)',
                predefineColors: [
                    '#ff4500',
                    '#ff8c00',
                    '#ffd700',
                    '#90ee90',
                    '#00ced1',
                    '#1e90ff',
                    '#c71585',
                    'rgba(255, 69, 0, 0.68)',
                    'rgb(255, 120, 0)',
                    'hsv(51, 100, 98)',
                    'hsva(120, 40, 94, 0.5)',
                    'hsl(181, 100%, 37%)',
                    'hsla(209, 100%, 56%, 0.73)',
                    '#c7158577'
                ]
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            changeColor(color) {
                console.log(color)
                document.getElementsByTagName('body')[0].style.setProperty('--colorTest', color)
                document.getElementsByTagName('body')[0].style.setProperty('--colorWarning', color)
            }
        },
        created() {
            console.log(this.$router)
        },
    }
</script>
<style lang="scss">
    @import "../assets/ThemeStyle/theme.scss";
    .colorTest {
        margin-top: 10px;
        width: 100px;
        height: 100px;
        background-color: $colorTest;
    }
</style>
