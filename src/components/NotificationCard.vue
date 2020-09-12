<template>
  <v-card style="border-radius: 15px; overflow:hidden" class="elevation-10">
    <v-row no-gutters align="center">
      <v-col cols="4" align="center">
        <v-card class="button white--text py-4" width="100%">
          <div>
            <span class="display-1">{{ $converter(date.day) }}</span>
          </div>
          <span class="headline">{{ weekdays[((today.day + weekday) - 1) % 7] }}</span>
        </v-card>
      </v-col>
      <v-col cols="8">
        <!-- <v-row> -->
        <div class="mx-2">
          <span class="title">Lorem ipsum dolor sit, amet consectetur.</span>
        </div>
        <!-- </v-row> -->
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      day: "ማግሰኞ",
    };
  },
  computed: {
    ...mapState("etc", [
      "thisMonth",
      "nextMonth",
      "prevMonth",
      "today",
      "date",
      "weekdays",
      "weekday",
      "monthGeez",
      "monthStartDay",
    ]),
  },
};
</script>
