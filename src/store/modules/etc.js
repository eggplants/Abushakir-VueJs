// let dt = new $etDT();
// let etc = new $etc(this.dt.year, this.dt.month, this.dt.day)
// initial state
const state = () => ({
    thisMonth: [],
    nextMonth: null,
    prevMonth: null,
    today: 0,
    date: {},
    monthGeez: "",
    allDays: [],
    monthStartDay: -1,
    //
    // dateTime: dt,
    // calendar: etc,
    year: {},
    month: {},
    weekdays: [],
    months: [],
    weekday: ""
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
        console.log(date)
        state.date = date
        state.monthGeez = date.month
    },
    setAllDays(state, daysList) {
        state.allDays = daysList
    },
    setWeekDays(state, list) {
        state.weekdays = list
    },
    setWeekday(state, a) {
        state.weekday = a;
    },
    setMonthsList(state, list) {
        state.months = list
    }

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}