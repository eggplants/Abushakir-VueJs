<template>
  <v-card style="border-radius: 20px;" color="button" class="pl-2 elevation-20 white--text">
    <v-card-title primary-title>
      <v-row class="mx-auto" align="center">
        <v-col cols="6" align="start">
          <span class="font-weight-regular">Friday</span>
          <div>
            <span
              class="display-1 font-weight-thin"
            >{{ months[monthGeez-1] }} {{ nums[date.day] }} ፣ {{ date.year }}</span>
          </div>
        </v-col>
        <!-- Buttons -->
        <v-col>
          <v-row justify="end" class="mx-auto">
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn icon fab color="white" v-on="on">
                  <v-icon color="primary lighten-5" x-large>mdi-chevron-left</v-icon>
                </v-btn>
              </template>
              <span>{{ lastMonth[idx] }}</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn icon fab color="white" v-on="on">
                  <v-icon color="primary lighten-5" x-large>mdi-chevron-right</v-icon>
                </v-btn>
              </template>
              <span>{{ nextMon[idx] }}</span>
            </v-tooltip>
          </v-row>
        </v-col>
      </v-row>
    </v-card-title>
    <v-card-text>
      <v-row justify="space-around" class="px-3">
        <v-flex v-for="i in weekdays" :key="i" md="1">
          <div>
            <span class="grey--text subheading">{{ i[0] }}</span>
          </div>
        </v-flex>
      </v-row>
    </v-card-text>
    <v-card-text>
      <v-row align="center" justify="start" class="mx-auto">
        <template v-for="i in monthStartDay">
          <v-btn
            disabled
            icon
            :key="i"
            large
            width="11%"
            fab
            class="ma-2 elevation-3"
            :class="i == 28 ? 'error' : 'button'"
          >
            <v-row class="mx-auto" justify="center" align="center">
              <div>
                <span
                  class="title grey--text"
                  color
                >{{ (prevMonth.monthDays().length - monthStartDay) + i }}</span>
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
            class="ma-2 elevation-15"
            :class="i[2] == today ? 'primary' : 'button'"
          >
            <v-row class="mx-auto" justify="center" align="center">
              <div>
                <span class="title white--text">{{i[2]}}</span>
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
import { ETC, EtDatetime } from "abushakir";
export default {
  data() {
    return {
      idx: 0,
      lastMonth: ["ያለፈው ወር", "Last Month"],
      nextMon: ["ቀጣይ ወር", "Next Month"],
      months: [],
      nums: [],
      weekdays: []
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
      "monthStartDay"
    ])
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
      "setAllDays"
    ]),
    init() {
      let dt = new EtDatetime();
      let etc = new ETC(dt.year, dt.month, dt.day);
      this.setThisMonth(etc.monthDays());
      this.setDate(dt.date);
      this.months = etc.allMonths;
      this.nums = etc.dayNumbers;
      this.setAllDays(etc.monthDays.length);
      this.setPrevMonth(etc.prevMonth);
      this.weekdays = etc.weekdays;
      this.setToday(dt.day)
    }
  }
};
</script>