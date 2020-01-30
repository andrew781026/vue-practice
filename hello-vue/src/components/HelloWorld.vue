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
                    v-on:keyup.enter="addItem"
                    placeholder="請輸入新的待辦事項"
            />

        </b-input-group>


        <div class="todo" :key="index" v-for="(single,index) in list">

            <b-form-checkbox v-model="single.done">

                <del v-if="single.done === true">{{single.msg}}</del>
                <span v-else>{{single.msg}}</span>

            </b-form-checkbox>

            <b-button variant="outline-secondary" :style="{marginLeft:'5px'}">編輯</b-button>
            <b-button variant="outline-secondary" :style="{marginLeft:'5px'}" @click="del(single,index)">刪除</b-button>

        </div>


    </div>
</template>

<script>
    export default {
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
            del: function (item, index) {
                this.list.splice(index, 1)
            }
        },
        updated: function () {
            // window.console.log('this.list=', this.list);
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
    .todo {
        border: 1px solid rgba(0, 0, 0, 0.3);
        display: flex;
        padding: 10px;
        align-items: center;
    }
</style>
