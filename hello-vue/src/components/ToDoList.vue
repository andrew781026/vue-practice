<template>
    <div :style="{width:'50vw',margin:'10px'}">

        <div class="content-input">

            <input
                    :class="Boolean(item)?'has-button':'no-button'"
                    class="input"
                    type="text"
                    v-model="item"
                    v-on:keyup.esc="clearItem"
                    v-on:keyup.enter="addItem"
                    placeholder="請輸入新的待辦事項"
            />

            <div v-if="Boolean(item)" class="clear-button" @click="clearItem">
                &#88;
            </div>

        </div>

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
    import {mapMutations} from 'vuex';

    export default {
        name: 'ToDoList',
        components: {
            ViewSingleToDo,
            EditSingleToDo,
        },
        methods: {
            ...mapMutations([
                'updateSingleItem',
                'deleteSingleItem',
                'addSingleItem',
            ]),
            addItem: function () {

                if (this.item) {

                    this.addSingleItem({newItem: {msg: this.item}});

                    /*
                        this.$store.dispatch('addItem', {
                            newToDo: {msg: this.item},
                        });

                        this.list.push({msg: this.item});
                    */

                    this.item = '';
                }
            },
            clearItem: function () {
                this.item = '';
            },
            edit: function (index) {

                this.updateSingleItem({index, newItem: {mode: 'edit'}});

                /*

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

                */
            },
            del: function (index) {

                this.deleteSingleItem({index});
                // this.$store.dispatch('deleteItem', {index});
            },
            confirm: function (newMsg, index) {

                this.updateSingleItem({
                    index,
                    newItem: {
                        msg: newMsg,
                        mode: 'view'
                    }
                });

                /*

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

                */
            },
            doneChange: function (newDone, index) {

                this.updateSingleItem({index, newItem: {done: newDone}});

                /*

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

                */
            },
            cancel: function (index) {

                this.updateSingleItem({index, newItem: {mode: 'view'}});

                /*

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

                 */
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

    .content-input {
        display: flex;
        margin-bottom: 20px;
        position: relative;
    }

    .clear-button {
        min-height: 100%;
        padding: 0 10px 0 10px;
        background-color: #e8ebee;
        border-top: 1px solid #b1b1b1;
        border-right: 1px solid #b1b1b1;
        border-bottom: 1px solid #b1b1b1;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        display: flex;
        align-items: center;
        color: red;
        font-weight: 700;
    }

    .input {
        z-index: 1;
        flex: 1;
        border: 1px solid #b1b1b1;
        padding: 5px 15px 5px 15px; /* top right bottom left */
    }

    .input.no-button {
        border-radius: 5px;
    }

    .input.has-button {
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }

    .input:focus {
        outline: none !important;
        border: 1px solid #7fbcfe;
        box-shadow: 0 0 2px 4px #beddfe;
    }
</style>
