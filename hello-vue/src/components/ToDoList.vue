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
            />

            <ViewSingleToDo
                    v-else
                    :key="index"
                    :index="index"
                    :done="single.done"
                    :msg="single.msg"
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
                    this.item = '';
                }
            },
            clearItem: function () {
                this.item = '';
            },
        },
        updated: function () {
            // window.console.log('this.list=', this.list);
        },
        data: function () {

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
