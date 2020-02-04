import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        list: [
            {
                id: 1,
                msg: '買一本好書',
                done: false,
            },
            {
                id: 2,
                msg: '打電話給小明',
                done: true,
            },
            {
                id: 3,
                msg: '寫一篇文章',
                done: false,
            },
        ],
    },
    mutations: { // mutations 相當於 Redux.reducer
        updateSingleItem: function (state, {newItem, index}) {

            // mix newItem and current Item properties
            const singleItem = {
                ...state.list[index],
                ...newItem,
            };

            // vue 中的資料更新 : https://pjchender.blogspot.com/2017/05/vue-vue-reactivity.html

            /*

            // 此 method , vue 會監測不到更新
            state.list[index] = {
                ...state.list[index],
                mode: 'view'
            };

            */

            // 利用 arr.splice(startIndex, deleteCount, addItem)
            // state.list.splice(index, 1, newToDo);
            state.list.splice(index, 1, singleItem);
        },
        deleteSingleItem: function (state, payload) {
            state.list.splice(payload.index, 1);
        },
        addSingleItem: function (state, payload) {
            state.list.push(payload.newItem);
        },
    },
    actions: { // actions 相當於 Redux.action
        updateItem(context, payload) {

            context.commit({
                type: 'updateSingleItem',
                newItem: payload.newToDo,
                index: payload.index
            })
        },
        deleteItem(context, payload) {

            context.commit({
                type: 'deleteSingleItem',
                index: payload.index
            })
        },
        addItem(context, payload) {

            context.commit({
                type: 'addSingleItem',
                newItem: payload.newToDo
            })
        },
    },
    modules: {}
})
