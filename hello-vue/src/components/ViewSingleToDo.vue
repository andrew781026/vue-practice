<template>
    <div class="todo">

        <b-form-checkbox v-model="done">

            <del v-if="done === true">{{msg}}</del>
            <span v-else>{{msg}}</span>

        </b-form-checkbox>

        <b-button variant="outline-secondary" :style="{marginLeft:'5px'}" @click="edit(index)">編輯</b-button>
        <b-button variant="outline-secondary" :style="{marginLeft:'5px'}" @click="del(index)">刪除</b-button>

    </div>
</template>

<script>
    export default {
        name: "ViewSingleToDo",
        props: {
            done: Boolean,
            index: Number,
            msg: String,
            del: Function,
            edit: Function,
        },
    }
</script>

<style scoped>
    .todo {
        border: 1px solid rgba(0, 0, 0, 0.3);
        display: flex;
        padding: 10px;
        align-items: center;
    }
</style>
