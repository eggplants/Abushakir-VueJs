<template>
  <v-app>
    <v-app-bar app flat absolute prominent>
      <v-row align="center" justify="center" class="mt-10">
        <div>
          <span class="display-3 font-weight-bold primary--text">
            Abush<span class="font-weight-thin">akir</span><span class="headline">Js</span>
          </span>
        </div>
      </v-row>
    </v-app-bar>

    <v-content>
      <HelloWorld />
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld
  },

  data: () => ({
    //
  })
};
</script>
