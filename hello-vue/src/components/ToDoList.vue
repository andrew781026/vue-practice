<template>
    <div :style="{width:'50vw',margin:'10px'}">

        <b-input-group :style="{marginBottom:'20px'}">

            <template v-slot:append v-if="Boolean(item)">
                <b-input-group-text @click="clearItem">
                    <strong class="text-danger">x</strong>
                </b-input-group-text>
            </template>

            <b-form-input
                    type="text"
                    v-model="item"
                    v-on:keyup.esc="clearItem"
                    v-on:keyup.enter="addItem"
                    placeholder="請輸入新的待辦事項"
            />

        </b-input-group>


        <template v-for="(single,index) in list">

            <EditSingleToDo
                    :key="index"
                    :index="index"
                    :done="single.done"
                    :msg="single.msg"
                    :confirm="confirm"
                    :cancel="cancel"
                    v-if="single.mode === 'edit'"
            />

            <ViewSingleToDo
                    :key="index"
                    :index="index"
                    :done="single.done"
                    :msg="single.msg"
                    :del="del"
                    :edit="edit"
                    v-else
            />

        </template>


    </div>
</template>

<script>
    import ViewSingleToDo from './ViewSingleToDo';
    import EditSingleToDo from './EditSingleToDo';

    export default {
        name: 'ToDoList',
        components: {
            ViewSingleToDo,
            EditSingleToDo,
        },
        methods: {
            addItem: function () {

                if (this.item) {

                    this.list.push({msg: this.item});
                    this.item = '';
                }
            },
            clearItem: function () {
                this.item = '';
            },
            edit: function (index) {

                this.list[index] = {
                    ...this.list[index],
                    mode: 'edit'
                };

                this.list = [...this.list];
            },
            del: function ( index) {
                this.list.splice(index, 1)
            },
            confirm: function (newMsg, index) {
                this.list[index] = {
                    ...this.list[index],
                    msg: newMsg,
                    mode: 'view'
                };

                this.list = [...this.list];
            },
            cancel: function (index) {
                this.list[index] = {
                    ...this.list[index],
                    mode: 'view'
                };

                this.list = [...this.list];
            },
        },
        updated: function () {
            window.console.log('this.list=', this.list);
        },
        data() {
            return {
                item: this.item,
                list: [
                    {
                        msg: '買一本好書',
                        done: false,
                    },
                    {
                        msg: '打電話給小明',
                        done: true,
                    },
                    {
                        msg: '寫一篇文章',
                        done: false,
                    },
                ],
            }
        }
    }
</script>

<style scoped>

</style>
