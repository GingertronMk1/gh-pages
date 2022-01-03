<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-text-box-outline",
          title: "CV",
          to: "/cv",
        },
        {
          icon: "mdi-text-box-outline",
          title: "Counter",
          to: "/counter",
        },
        {
          icon: "mdi-text-box-outline",
          title: "NNT Things",
          to: "/nntthings",
        },
        {
          icon: "mdi-text-box-outline",
          title: "Permissions Generator",
          to: "/permissions",
        },
        {
          icon: "mdi-text-box-outline",
          title: "Season Generator",
          to: "/seasongen",
        },
        {
          icon: "mdi-text-box-outline",
          title: "Text Generator",
          to: "/textgen",
        },
      ],
      miniVariant: false,
      right: true,
      title: "Jack Ellis",
    };
  },
};
</script>
