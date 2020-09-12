<template>
  <v-app>
    <v-content style="background-color: #f9f9f9">
      <v-img :src="backgroundImage">
        <v-container color="primary">
          <v-row align="center" justify="center">
            <div>
              <span class="display-2 font-weight-bold button--text">
                Abush<span class="font-weight-thin">akir</span>
                <span class="headline">Js</span>
              </span>
            </div>
          </v-row>
          <!-- Smaller screen -->
          <v-row align="start" justify="space-between" class="hidden-lg-and-up">
            <v-col cols="12" align="center">
              <calendar />
            </v-col>
            <v-col cols="12">
              <v-row align="center" justify="center">
                <span class="title justify-center">የ{{ months[monthGeez-1] }} ወር በዓላት እና አፅዋማት</span>
              </v-row>
              <v-row align="start" justify="space-between">
                <v-col cols="12" v-for="i in 2" :key="i" class="py-0">
                  <notifications />
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <!-- Large screen -->
          <v-row align="start" justify="space-between" class="hidden-md-and-down">
            <v-col cols="7" align="center" lg="7" md="8" sm="12" xs="12">
              <calendar />
            </v-col>
            <v-col cols="4" md="4" sm="12" xs="12">
              <div>
                <span class="headline">የ{{ months[monthGeez-1] }} ወር በዓላት እና አፅዋማት</span>
              </div>
              <v-row align="start" justify="space-between">
                <v-col cols="12" v-for="i in 2" :key="i">
                  <notifications />
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-img>
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
import calendar from "./components/Calendar";
import notifications from "@/components/NotificationCard";
import { mapState, mapMutations } from "vuex";
export default {
  name: "App",
  components: {
    calendar,
    notifications,
  },

  data: () => ({
    backgroundImage: require("@/assets/logo.svg"),
    thisMonth: null,
  }),
  beforeMount() {
    let dt = new this.$etDT();
    let etc = new this.$etc(dt.year, dt.month, dt.day);
    this.init(etc);
  },
  computed: {
    ...mapState("etc", ["monthGeez", "months"]),
  },
  methods: {
    ...mapMutations("etc", [
      "setThisMonth",
      "setNextMonth",
      "setPrevMonth",
      "setToday",
      "setWeekDays",
      "setDate",
      "setAllDays",
      "setWeekday",
      "setMonthsList",
    ]),
    init(etc) {
      this.setWeekday(etc._date.weekday);
      this.setThisMonth(etc.monthDays());
      this.setDate(etc._date.date);
      this.setMonthsList(etc.allMonths);
      this.setAllDays(etc.monthDays.length);
      this.setPrevMonth(etc.prevMonth);
      this.setNextMonth(etc.nextMonth);
      this.setWeekDays(etc.weekdays);
      this.setToday(etc._date.date);
    },
  },
};
</script>
