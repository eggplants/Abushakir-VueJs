<template>
  <v-app>
    <v-content style="background-color: #f9f9f9">
      <v-img :src="backgroundImage" height="100vh">
        <v-container fill-height color="primary">
          <v-row align="center" justify="center">
            <div>
              <span class="display-2 font-weight-bold button--text">
                Abush<span class="font-weight-thin">akir</span>
                <span class="headline">Js</span>
              </span>
            </div>
          </v-row>
          <v-row align="start" justify="space-between">
            <v-col cols="7" align="center" lg="7" md="8" sm="12" xs="12">
              <calendar />
            </v-col>
            <v-col cols="4">
              <div>
                <span class="display-1">Notifications</span>
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
import { ETC, EtDatetime } from "abushakir";
import calendar from "./components/Calendar";
import notifications from "@/components/NotificationCard";

export default {
  name: "App",

  components: {
    calendar,
    notifications
  },

  data: () => ({
    backgroundImage: require("@/assets/logo.svg"),
    thisMonth: null
  }),
  created() {
    this.init()
  },
  methods: {
    init(){
      this.thisMonth = new ETC(new EtDatetime().year)

    }
  }
};
</script>
