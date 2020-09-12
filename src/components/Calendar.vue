<template>
  <v-card style="border-radius: 20px; position: sticky" min-height="630" color="button" class="pl-2 elevation-20 white--text">
    <v-card-title primary-title>
      <v-row class="mx-auto" align="center">
        <v-col cols="6" align="start">
          <span class="font-weight-regular">{{ weekdays[((today.day + weekday) - 1) % 7] }}</span>
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
            <!-- <v-tooltip top>
              <template v-slot:activator="{ on }">
                <v-btn icon color="white" v-on="on" @click="goToPrevYear">
                  <v-icon color="bgd lighten-5">mdi-chevron-double-left</v-icon>
                </v-btn>
              </template>
              <span>{{ lastYr[idx] }}</span>
            </v-tooltip>-->
            <!-- Previous Month -->
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <v-btn icon color="white" v-on="on" @click="goToPrevMonth">
                  <v-icon color="bgd lighten-5">mdi-chevron-left</v-icon>
                </v-btn>
              </template>
              <span>{{ lastMonth[idx] }}</span>
            </v-tooltip>
            <div class="mx-5"></div>
            <!-- Previous Month -->
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <v-btn icon color="white" v-on="on" @click="goToNextMonth">
                  <v-icon color="bgd lighten-5">mdi-chevron-right</v-icon>
                </v-btn>
              </template>
              <span>{{ nextMon[idx] }}</span>
            </v-tooltip>
            <!-- Next Year -->
            <!-- <v-tooltip top>
              <template v-slot:activator="{ on }">
                <v-btn icon color="white" v-on="on" @click="goToNextYear">
                  <v-icon color="bgd lighten-5">mdi-chevron-double-right</v-icon>
                </v-btn>
              </template>
              <span>{{ nextYr[idx] }}</span>
            </v-tooltip>-->
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
          <v-btn disabled icon :key="i"  width="11%" fab outlined class="ma-2">
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
            
            width="11%"
            fab
            class="ma-2"
            :class="i[0] == today.year && i[1] == today.month && i[2] == today.day ? 'bgd elevation-20' : 'button elevation-2'"
          >
            <v-row class="mx-auto" justify="center" align="center">
              <div>
                <span
                  class="headline"
                  :class="i[0] == today.year && i[1] == today.month && i[2] == today.day ? 'button--text' : 'white--text'"
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
      nums: [],
      // weekdays: [],
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
      "weekdays",
      "weekday",
      "monthStartDay",
      "months",
    ]),
  },
  created() {
    console.log(this.thisMonth);
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
      // this.setToday(etc._date.date);
    },
    goToNextMonth() {
      this.init(this.nextMonth);
    },
    goToPrevMonth() {
      this.init(this.prevMonth);
    },
    // goToNextYear() {
    //   console.log("going to next year...");
    // },
    // goToPrevYear() {
    //   console.log("going to previous year...");
    // },
  },
};
</script>