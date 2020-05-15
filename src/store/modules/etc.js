// import { ETC, EtDatetime } from 'abushakir'

// initial state
const state = () => ({
    thisMonth: [],
    nextMonth: null,
    prevMonth: null,
    today: 0,
    date: {},
    monthGeez: "",
    allDays: [],
    monthStartDay: -1
})

// getters
const getters = {}

// actions
const actions = {}

// mutations
const mutations = {
    setThisMonth(state, etc) {
        state.thisMonth = etc
        state.monthStartDay = etc[0][3]
    },
    setNextMonth(state, etc) {
        state.nextMonth = etc
    },
    setPrevMonth(state, etc) {
        state.prevMonth = etc
    },
    setToday(state, today) {
        state.today = today
    },
    setDate(state, date) {
        state.date = date
        state.monthGeez = date.month
    },
    setAllDays(state, daysList){
        state.allDays = daysList
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}