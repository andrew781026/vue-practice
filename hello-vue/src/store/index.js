import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

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
        '[LIST] updateSingleItem': function (state, payload) {
            state.list.splice(payload.index, 1, payload.newItem);
            // state.list[payload.index] = payload.newItem;
        },
        '[LIST] deleteSingleItem': function (state, payload) {
            state.list.splice(payload.index, 1);
        },
        '[LIST] addSingleItem': function (state, payload) {
            state.list.push(payload.newItem);
        },
    },
    actions: { // actions 相當於 Redux.action
        updateItem(context, payload) {

            context.commit({
                type: '[LIST] updateSingleItem',
                newItem: payload.newToDo,
                index: payload.index
            })
        },
        deleteItem(context, payload) {

            context.commit({
                type: '[LIST] deleteSingleItem',
                index: payload.index
            })
        },
        addItem(context, payload) {

            context.commit({
                type: '[LIST] addSingleItem',
                newItem: payload.newToDo
            })
        },
    },
    modules: {}
})
