<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <!-- Today # and notifications -->
      <v-col cols="3">
        <!-- Today -->
        <!-- <v-row align="center" justify="center" class="my-5">
          <div>
            <span class="display-2">{{ today }}</span>
          </div>
        </v-row>-->
        <!-- Weekdays -->
        <!-- <v-row align="center" justify="center" class="mt-12">
          <v-col align="center" cols="1" v-for="(days, i) in weekdays" :key="i">
            <span class="title font-weight-bold">{{ days }}</span>
          </v-col>
        </v-row>-->
        <!-- Days -->
        <v-row align="center" justify="center">
          <div>
            <span class="display-2 font-weight-bold primary--text">
              Abush
              <span class="font-weight-thin">akir</span>
              <span class="headline">Js</span>
            </span>
          </div>
        </v-row>
        <v-container fill-height>
          <v-col align="center">
            <span style="font-size: 180px">{{etDate.dayGeez}}</span>
            <div class="my-0 py-0">
              <span class="display-1">{{etc.weekdays[etDate.day]}}</span>
            </div>
            <!-- Notification goes here -->
          </v-col>
        </v-container>
      </v-col>
      <!-- calendar grid -->
      <!-- TODO: Try to use Tabs for the months list to be clear and nice. -->
      <v-col cols="8" align="start">
        <!-- This month -->
        <div>
          <span class="display-1 font-weight-bold">{{ toMonthGeez }}</span>
        </div>
        <!-- All Months -->
        <v-btn-toggle v-model="toggle_months" mandatory>
          <template v-for="(month, i) in etc.allMonths">
            <v-btn :key="i" text dense style="height: 30px">
              <span>{{ month }}</span>
            </v-btn>
          </template>
        </v-btn-toggle>
        <!-- Weekdays -->
        <v-row align="center" justify="start" no-gutters>
          <v-col align="start" v-for="(days, i) in etc.weekdays" :key="i">
            <span class="title font-weight-bold">{{ days }}</span>
          </v-col>
        </v-row>
      </v-col>
      <!-- year list -->
      <v-col cols="1">
        <span>Years</span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { etctime, ETC, EtDatetime } from "abushakir";
export default {
  data: () => ({
    toggle_months: this.etc.allMonths.indexof(this.toMonthGeez)
  }),
  computed: {
    etDate() {
      return new EtDatetime();
    },
    etc() {
      return new ETC(this.etDate.year, this.etDate.month, this.etDate.day + 4);
    },
    today() {
      let td = new etctime();
      console.log("8888888888888888");
      console.log(new ETC(2012).weekdays);
      let name = `${td.monthGeez} ${td.day < 10 ? `0${td.day}` : td.day}, ${
        td.year
      }`;
      return name;
    },
    toDateGeez() {
      return this.etc.weekdays[this.etc.day - 1];
    },
    toDateArabic() {
      return this.etc.day;
    },
    toMonthGeez() {
      return this.etc.allMonths[this.etc.month - 1];
    },
    toMonthArabic() {
      return this.etc.month;
    },
    // toYear() {},
    thisYear() {
      return new etctime().year;
    },
    weekdays() {
      return new ETC(this.thisYear).weekdays;
    },
    allMonths() {
      return new ETC(this.thisYear).allMonths;
    }
  },
  created() {
    // this.etc = new ETC();
    console.log(this.etc.allMonths.indexof(this.toMonthGeez));
  }
};
</script>