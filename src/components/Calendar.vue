<template>
  <v-container>
    <template>
      <v-card
        style="border-radius: 20px; position: sticky"
        min-height="630"
        color="button"
        class="pl-2 elevation-20 white--text hidden-md-and-down"
      >
        <v-card-title primary-title>
          <v-row class="mx-auto" align="center">
            <v-col cols="6" align="start">
              <span class="font-weight-regular">{{ changeDateYear() }}</span>
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
                    <v-btn icon color="white" v-on="on" @click="goToPrevYear">
                      <v-icon color="bgd lighten-5">mdi-chevron-double-left</v-icon>
                    </v-btn>
                  </template>
                  <span>{{ lastYr[idx] }}</span>
                </v-tooltip>
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
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <v-btn icon color="white" v-on="on" @click="goToNextYear">
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
              <v-btn disabled icon :key="i" width="11%" large fab outlined class="ma-2">
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
                large
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
    <template>
      <v-card
        style="border-radius: 10px; position: sticky"
        min-height="330"
        color="button"
        class="pl-1 elevation-20 white--text hidden-lg-and-up"
      >
        <v-card-title primary-title>
          <v-row class="mx-auto" align="center">
            <v-col cols="7" align="start" class="py-0">
              <div
                class="pt-0 my-0 font-weight-regular"
                style="font-size: 14px"
              >{{ weekdays[((today.day + weekday) - 1) % 7] }}</div>
              <div
                class="font-weight-thin"
                style="font-size: 14px"
              >{{ months[monthGeez-1] }} {{ $converter(date.day) }} ፣ {{ $converter(date.year) }}</div>
            </v-col>
            <!-- Buttons -->
            <v-col>
              <v-row justify="end" class="mx-auto">
                <!-- Previous Year -->
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <v-btn icon color="white" v-on="on" @click="goToPrevYear">
                      <v-icon color="bgd lighten-5">mdi-chevron-double-left</v-icon>
                    </v-btn>
                  </template>
                  <span>{{ lastYr[idx] }}</span>
                </v-tooltip>
                <!-- Previous Month -->
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <v-btn icon color="white" v-on="on" small @click="goToPrevMonth">
                      <v-icon small color="bgd lighten-5">mdi-chevron-left</v-icon>
                    </v-btn>
                  </template>
                  <span>{{ lastMonth[idx] }}</span>
                </v-tooltip>
                <div class="mx-2"></div>
                <!-- Previous Month -->
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <v-btn icon color="white" v-on="on" small @click="goToNextMonth">
                      <v-icon small color="bgd lighten-5">mdi-chevron-right</v-icon>
                    </v-btn>
                  </template>
                  <span>{{ nextMon[idx] }}</span>
                </v-tooltip>
                <!-- Next Year -->
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <v-btn icon color="white" v-on="on" @click="goToNextYear">
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
              <v-btn disabled icon :key="i" x-large width="5%" text class="mx-3">
                <span class="grey--text caption">{{ i[0] }}</span>
              </v-btn>
            </template>
          </v-row>
        </v-card-text>
        <v-card-text class="pt-0">
          <v-row align="center" justify="start" class="mx-auto">
            <template v-for="i in monthStartDay">
              <v-btn disabled icon :key="i" width="8%" x-small outlined class="ma-2">
                <v-row class="mx-auto" justify="center" align="center">
                  <div>
                    <span
                      class="caption grey--text"
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
                width="8%"
                x-small
                class="ma-2"
                :class="i[0] == today.year && i[1] == today.month && i[2] == today.day ? 'bgd elevation-20' : 'button elevation-2'"
              >
                <v-row class="mx-auto" justify="center" align="center">
                  <div>
                    <span
                      class="caption"
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
  </v-container>
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
      "now",
      "thisMonth",
      "nextMonth",
      "prevMonth",
      "nextYear",
      "prevYear",
      "today",
      "date",
      "monthGeez",
      "weekdays",
      "weekday",
      "monthStartDay",
      "months",
    ]),
  },
  methods: {
    ...mapMutations("etc", [
      "setThisMonth",
      "setNextMonth",
      "setPrevMonth",
      "setPrevYear",
      "setNextYear",
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
      this.setPrevYear(etc.prevYear);
      this.setNextYear(etc.nextYear);
      this.setWeekDays(etc.weekdays);
      // this.setToday(etc._date.date);
    },
    goToNextMonth() {
      this.init(this.nextMonth);
    },
    goToPrevMonth() {
      this.init(this.prevMonth);
    },
    goToNextYear() {
      this.init(this.nextYear);
    },
    goToPrevYear() {
      this.init(this.prevYear);
    },
    changeDateYear() {
      if (
        this.today.year == this.date.year &&
        this.today.month == this.date.month
      ) {
        return this.weekdays[(this.today.day + this.weekday - 1) % 7];
      } else return this.weekdays[this.weekday];
    },
  },
};
</script>