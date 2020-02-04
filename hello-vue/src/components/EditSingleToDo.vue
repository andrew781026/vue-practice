<template>
    <div class="todo">

        <b-form-input
                class="input"
                type="text"
                v-model="newMsg"
                placeholder="請輸入修改後的待辦事項"
        />

        <b-button variant="outline-secondary" :style="{marginLeft:'5px'}" @click="confirm(newMsg,index)">確定</b-button>
        <b-button variant="outline-secondary" :style="{marginLeft:'5px'}" @click="cancel(index)">取消</b-button>

    </div>
</template>

<script>
    import {mapMutations} from 'vuex';

    export default {
        name: "EditSingleToDo",
        props: {
            done: Boolean,
            index: Number,
            msg: String,
        },
        beforeMount: function () {

            this.newMsg = this.msg;
        },
        methods: {
            ...mapMutations([
                'updateSingleItem',
            ]),
            confirm: function (newMsg, index) {

                this.updateSingleItem({
                    index,
                    newItem: {
                        msg: newMsg,
                        mode: 'view'
                    }
                });
            },
            cancel: function (index) {

                this.updateSingleItem({index, newItem: {mode: 'view'}});
            },
        },
        data: function () {
            return {
                newMsg: this.newMsg,
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
