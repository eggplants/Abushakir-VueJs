<template>
  <v-card style="border-radius: 20px;" color="button" class="pl-2 elevation-20 white--text">
    <v-card-title primary-title>
      <v-row class="mx-auto" align="center">
        <v-col cols="6" align="start">
          <span class="font-weight-regular">Friday</span>
          <div>
            <span class="display-1 font-weight-thin">May 15, 2020</span>
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
              <span>{{ nextMonth[idx] }}</span>
            </v-tooltip>
          </v-row>
        </v-col>
      </v-row>
    </v-card-title>
    <v-card-text>
      <v-row align="center" justify="start" class="mx-auto">
        <template v-for="i in 30">
          <v-btn
            icon
            :key="i"
            large
            width="11%"
            fab
            class="ma-2 elevation-15"
            :class="i == 28 ? 'error' : 'button'"
          >
            <v-row class="mx-auto" justify="center" align="center">
              <div>
                <span class="title white--text">{{i}}</span>
              </div>
            </v-row>
          </v-btn>
        </template>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      idx: 0,
      lastMonth: ["ያለፈው ወር", "Last Month"],
      nextMonth: ["ቀጣይ ወር", "Next Month"],
    };
  },
  computed: {}
};
</script>