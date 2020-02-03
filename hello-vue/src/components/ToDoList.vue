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
                    v-if="single.mode === 'edit'"
                    :key="index"
                    :index="index"
                    :done="single.done"
                    :msg="single.msg"
                    :confirm="confirm"
                    :cancel="cancel"
            />

            <ViewSingleToDo
                    v-else
                    :key="index"
                    :index="index"
                    :done="single.done"
                    :msg="single.msg"
                    :del="del"
                    :edit="edit"
                    :doneChange="doneChange"
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

                    this.$store.dispatch('addItem', {
                        newToDo: {msg: this.item},
                    });

                    // this.list.push({msg: this.item});
                    this.item = '';
                }
            },
            clearItem: function () {
                this.item = '';
            },
            edit: function (index) {

                const newToDo = {
                    ...this.list[index],
                    mode: 'edit'
                };

                // 利用 arr.splice(startIndex, deleteCount, addItem)
                // this.list.splice(index, 1, newToDo);

                this.$store.dispatch('updateItem', {
                    newToDo,
                    index
                });
            },
            del: function (index) {
                this.$store.dispatch('deleteItem', {index});
            },
            confirm: function (newMsg, index) {

                const newToDo = {
                    ...this.list[index],
                    msg: newMsg,
                    mode: 'view'
                };

                // 利用 arr.splice(startIndex, deleteCount, addItem)
                // this.list.splice(index, 1, newToDo);

                this.$store.dispatch('updateItem', {
                    newToDo,
                    index
                });
            },
            doneChange: function (newDone, index) {

                const newToDo = {
                    ...this.list[index],
                    done: newDone,
                };

                // 利用 vm.$set(array, index, value) 方法
                // this.$set(this.list, index, newToDo);

                this.$store.dispatch('updateItem', {
                    newToDo,
                    index
                });
            },
            cancel: function (index) {
                // vue 中的資料更新 : https://pjchender.blogspot.com/2017/05/vue-vue-reactivity.html

                /*

                // 此 method , vue 會監測不到更新
                this.list[index] = {
                    ...this.list[index],
                    mode: 'view'
                };

                 */

                const newToDo = {
                    ...this.list[index],
                    mode: 'view'
                };

                // 利用 arr.splice(startIndex, deleteCount, addItem)
                // this.list.splice(index, 1, newToDo);

                this.$store.dispatch('updateItem', {
                    newToDo,
                    index
                });
            },
        },
        updated: function () {
            // window.console.log('this.list=', this.list);
        },
        data() {

            window.console.log('this.$store.state.list=', this.$store.state.list);

            return {
                item: this.item,
                list: this.$store.state.list,
            }
        }
    }
</script>

<style scoped>

</style>
