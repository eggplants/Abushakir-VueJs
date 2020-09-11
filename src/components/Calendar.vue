<template>
  <v-card style="border-radius: 20px;" color="button" class="pl-2 elevation-20 white--text">
    <v-card-title primary-title>
      <v-row class="mx-auto" align="center">
        <v-col cols="6" align="start">
          <span class="font-weight-regular">{{ weekdays[weekday] }}</span>
          <div>
            <span
              class="display-1 font-weight-thin"
            >{{ months[monthGeez-1] }} {{ $converter(date.day) }} ፣ {{ $converter(date.year) }}</span>
          </div>
        </v-col>
        <!-- Buttons -->
        <v-col>
          <v-row justify="end" class="mx-auto">
            <!-- Previous Year -->
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <v-btn icon color="white" v-on="on" @click="prevYear">
                  <v-icon color="bgd lighten-5">mdi-chevron-double-left</v-icon>
                </v-btn>
              </template>
              <span>{{ lastYr[idx] }}</span>
            </v-tooltip>
            <!-- Previous Month -->
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <v-btn icon color="white" v-on="on" class="mx-2" @click="prevMonth">
                  <v-icon color="bgd lighten-5">mdi-chevron-left</v-icon>
                </v-btn>
              </template>
              <span>{{ lastMonth[idx] }}</span>
            </v-tooltip>
            <div class="mx-5"></div>
            <!-- Previous Month -->
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <v-btn icon color="white" v-on="on" class="mx-2" @click="nextMonth">
                  <v-icon color="bgd lighten-5">mdi-chevron-right</v-icon>
                </v-btn>
              </template>
              <span>{{ nextMon[idx] }}</span>
            </v-tooltip>
            <!-- Next Year -->
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <v-btn icon color="white" v-on="on" @click="nextYear">
                  <v-icon color="bgd lighten-5">mdi-chevron-double-right</v-icon>
                </v-btn>
              </template>
              <span>{{ nextYr[idx] }}</span>
            </v-tooltip>
          </v-row>
        </v-col>
      </v-row>
    </v-card-title>
    <v-card-text class="py-0">
      <v-row align="center" justify="start" class="mx-auto">
        <template v-for="i in weekdays">
          <v-btn disabled icon :key="i" large width="11%" fab text class="mx-2">
            <span class="grey--text subheading">{{ i }}</span>
          </v-btn>
        </template>
      </v-row>
    </v-card-text>
    <v-card-text class="pt-0">
      <v-row align="center" justify="start" class="mx-auto">
        <template v-for="i in monthStartDay">
          <v-btn disabled icon :key="i" large width="11%" fab outlined class="ma-2">
            <v-row class="mx-auto" justify="center" align="center">
              <div>
                <span
                  class="title grey--text"
                  color
                >{{ $converter((prevMonth.monthDays().length - monthStartDay) + i) }}</span>
              </div>
            </v-row>
          </v-btn>
        </template>
        <template v-for="i in thisMonth">
          <v-btn
            icon
            :key="i"
            large
            width="11%"
            fab
            class="ma-2"
            :class="i[2] == today ? 'bgd elevation-20' : 'button elevation-2'"
          >
            <v-row class="mx-auto" justify="center" align="center">
              <div>
                <span
                  class="headline"
                  :class="i[2] == today ? 'button--text' : 'white--text'"
                >{{ $converter(i[2]) }}</span>
              </div>
            </v-row>
          </v-btn>
        </template>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      idx: 0,
      lastMonth: ["ያለፈው ወር", "Last Month"],
      lastYr: ["ያለፈው ዓመት (አምና)", "Last Year"],
      nextMon: ["ቀጣይ ወር", "Next Month"],
      nextYr: ["ቀጣይ ዓመት", "Next Year"],
      months: [],
      nums: [],
      weekday: "",
      weekdays: [],
      dt: null,
      etc: null,
    };
  },
  computed: {
    ...mapState("etc", [
      "thisMonth",
      "nextMonth",
      "prevMonth",
      "today",
      "date",
      "monthGeez",
      "monthStartDay",
    ]),
  },
  created() {
    this.init();
  },
  methods: {
    ...mapMutations("etc", [
      "setThisMonth",
      "setNextMonth",
      "setPrevMonth",
      "setToday",
      "setDate",
      "setAllDays",
    ]),
    init() {
      this.dt = new this.$etDT();
      this.etc = new this.$etc(this.dt.year, this.dt.month, this.dt.day);
      this.weekday = this.dt.weekday;
      this.setThisMonth(this.etc.monthDays());
      this.setDate(this.dt.date);
      this.months = this.etc.allMonths;
      this.nums = this.etc.dayNumbers;
      this.setAllDays(this.etc.monthDays.length);
      this.setPrevMonth(this.etc.prevMonth);
      this.weekdays = this.etc.weekdays;
      this.setToday(this.dt.day);
    },
    nextMonth() {
      console.log("going to next month...");
    },
    prevMonth() {
      console.log("going to previous month...");
    },
    nextYear() {
      console.log("going to next year...");
    },
    prevYear() {
      console.log("going to previous year...");
    },
  },
};
</script>