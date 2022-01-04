<template>
  <article>
    <h1>{{ page.title }}</h1>
    <nuxt-content :document="page" />
  </article>
</template>

<script>
export default {
  name: "CVPage",
  async asyncData({ $content, params }) {
    const page = await $content("cvs", params.slug).fetch();
    const education = await $content("cvs", "education").fetch();
    const pageBodyChildren = page?.body?.children;
    if (pageBodyChildren) {
      const educationIndex = pageBodyChildren.findIndex(({ children }) => {
        return (
          Array.isArray(children) &&
          children.filter(({ type, value }) => {
            return type === "text" && value === "!!!EDUCATION!!!";
          }).length > 0
        );
      });

      if (educationIndex > -1) {
        page.body.children = [
          ...pageBodyChildren.slice(0, educationIndex),
          ...education.body.children,
          ...pageBodyChildren.slice(educationIndex + 1),
        ];
      }
    }

    return {
      page,
    };
  },
};
</script>

<style lang="scss">
.nuxt-content {
  table {
    width: 100%;
    border-spacing: 0;

    td {
      padding: 0.2rem 0.5rem;
    }

    td + td {
      border-left: 1px solid #ddd;
    }
  }

  hr {
    margin: 1rem 0;
  }
}
</style>
