<template>
  <article>
    <h1>{{ page.title }}</h1>
    <nuxt-content :document="page" />
  </article>
</template>

<script>
export default {
  name: 'CVPage',
  async asyncData({ $content }) {
    const page = await $content('cv').fetch()

    return {
      page,
    }
  },
}
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
