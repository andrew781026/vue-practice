<template>
    <div class="todo">

        <b-form-checkbox v-on:change="checkChange" v-model="isDone">

            <del v-if="done === true">{{msg}}</del>
            <span v-else>{{msg}}</span>

        </b-form-checkbox>

        <b-button variant="outline-secondary" :style="{marginLeft:'5px'}" @click="edit(index)">編輯</b-button>
        <b-button variant="outline-secondary" :style="{marginLeft:'5px'}" @click="del(index)">刪除</b-button>

    </div>
</template>

<script>
    import {mapMutations} from 'vuex';

    export default {
        name: "ViewSingleToDo",
        props: {
            done: Boolean,
            index: Number,
            msg: String,
        },
        methods: {
            ...mapMutations([
                'updateSingleItem',
                'deleteSingleItem',
            ]),
            edit: function (index) {

                this.updateSingleItem({index, newItem: {mode: 'edit'}});
            },
            del: function (index) {

                this.deleteSingleItem({index});
            },
            checkChange: function (checked) {

                this.updateSingleItem({index: this.index, newItem: {done: checked}});
            },
        },
        data: function () {
            return {
                isDone: this.done,
            }
        }
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
