<template>
  <div id="app">
    <header>
      <HeaderSection />
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import HeaderSection from "@/components/HeaderSection";

export default {
  name: "App",

  components: {
    HeaderSection,
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
@import url("@/assets/reset.css");

#app {
  background-color: #000;
  color: #fff;
  font-family: "Londrina Outline", cursive;
  font-size: 24px;
}

* {
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

.container {
  max-width: 1390px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
}

.active {
  display: flex;
}

@media (max-width: 1094px) {
  .container {
    max-width: 1094px;
  }
}

@media (max-width: 641px) {
  .container {
    max-width: 641px;
  }
}
</style>
