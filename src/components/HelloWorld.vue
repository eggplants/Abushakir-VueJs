<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <!-- Today -->
        <v-row align="center" justify="center" class="my-5">
          <div>
            <span class="display-2">{{ today }}</span>
          </div>
        </v-row>
        <!-- Weekdays -->
        <v-row align="center" justify="center" class="mt-12">
          <v-col align="center" cols="1" v-for="(days, i) in weekdays" :key="i">
            <span class="title font-weight-bold">{{ days }}</span>
          </v-col>
        </v-row>
        <!-- Days -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { EtDatetime, ETC } from "abushakir";
export default {
  data: () => ({
    tracked: {
      // '2019-01-09': [23, 45, 10],
      // '2019-01-08': [10],
      // '2019-01-07': [0, 78, 5],
      // '2019-01-06': [0, 0, 50],
      // '2019-01-05': [0, 10, 23],
      // '2019-01-04': [2, 90],
      // '2019-01-03': [10, 32],
      // '2019-01-02': [80, 10, 10],
      // '2019-01-01': [20, 25, 10],
    },
    colors: ["#1867c0", "#fb8c00", "#000000"],
    category: ["Development", "Meetings", "Slacking"]
  }),
  computed: {
    today() {
      let td = new EtDatetime();
      console.log("8888888888888888");
      console.log(new ETC(2012).weekdays);
      let name = `${td.monthGeez} ${td.day < 10 ? `0${td.day}` : td.day}, ${td.year}`
      return name;
    },
    thisYear() {
      return new EtDatetime().year;
    },
    weekdays() {
      return new ETC(this.thisYear).weekdays;
    },
    allMonths() {
      return new ETC(this.thisYear).allMonths;
    }
  },
  created() {
    console.log(new EtDatetime());
  }
};
</script>