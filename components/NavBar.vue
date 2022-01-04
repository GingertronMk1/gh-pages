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
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss"></style>
