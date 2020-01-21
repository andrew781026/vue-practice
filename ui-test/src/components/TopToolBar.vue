<template>
    <div class="root">
        <div class="content">
            <div class="item">
                <img class="icon" alt="Vue logo" src="../assets/tree.svg">
                <span class="text">Andrew's Blog</span>
            </div>
        </div>
        <div class="content">
            <div class="item">首頁</div>
            <div class="item">文章列表</div>
            <div class="item">關於我</div>

            <!--            Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>-->
        </div>
    </div>
</template>

<script>
    export default {
        name: "TopToolBar"
    }
</script>

<style scoped>
    .root {
        width: 100vw;
        display: flex;
        justify-content: space-between;
        background-color: #42b983;
    }

    .item {
        min-height: 30px;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .icon {
        width: 30px;
        height: 30px;
    }

    .text {
        margin-left: 5px;
    }

    .content {
        display: flex;
        margin: 0 20px 0 20px;
    }
</style>


