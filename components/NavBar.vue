<template>
  <nav class="nav">
    <template v-for="(link, index) in links">
      <NavItem :key="`nav_link_${index}`" :link="link" />
    </template>
  </nav>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      links: [
        {
          name: "Home",
          to: "/",
        },
        {
          name: "CVs",
          links: [
            {
              name: "Developer",
              to: "/cv/dev",
            },
            {
              name: "Theatre Person",
              to: "/cv/theatre",
            },
          ],
        },
        {
          name: "Vue Utilities",
          links: [
            {
              name: "Counter",
              to: "/counter",
            },
            {
              name: "NNT Things",
              to: "/nntthings",
            },
            {
              name: "Permissions",
              to: "/permissions",
            },
            {
              name: "Generators",
              links: [
                {
                  name: "Season Generator",
                  to: "/seasongen",
                },
                {
                  name: "Text Generator",
                  to: "/textgen",
                },
              ],
            },
          ],
        },
      ],
    };
  },
  mounted() {},
  methods: {},
};
</script>
