<template>
    <div class="todo">

        <b-form-input
                class="input"
                type="text"
                v-model="newToDo"
                placeholder="請輸入修改後的待辦事項"
        />

        <b-button variant="outline-secondary" :style="{marginLeft:'5px'}" @click="confirm(newToDo,index)">確定</b-button>
        <b-button variant="outline-secondary" :style="{marginLeft:'5px'}" @click="cancel(index)">取消</b-button>

    </div>
</template>

<script>
    export default {
        name: "EditSingleToDo",
        props: {
            done: Boolean,
            index: Number,
            msg: String,
            confirm: Function,
            cancel: Function,
        },
        beforeMount: function () {

            this.newToDo = this.msg;
        },
        data: function () {
            return {
                newToDo: this.newToDo,
            }
        }
    }
</script>

<style scoped>

    .input {
        width: 50%;
    }

    .todo {
        border: 1px solid rgba(0, 0, 0, 0.3);
        display: flex;
        padding: 10px;
        align-items: center;
    }
</style>
