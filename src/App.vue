<script setup lang="ts">
import { useRandomTopArticles } from '@/composables/useRandomTopArticles';
import TheStory from '@/components/TheStory.vue';
const { stories, error } = useRandomTopArticles();
</script>

<template>
  <div class="container">
    <div class="container__heading">
      <h1>merkle<span>hacker news</span></h1>
      <h2>The ten hot topics</h2>
    </div>

    <TheStory
      v-for="story in stories"
      :key="story.id"
      :title="story.title"
      :url="story.url"
      :timeStamp="story.time"
      :score="story.score"
      :author="story.by"
      :karma="story.karma"
    />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css');

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  position: relative;
  font-weight: normal;
}

body {
  font-family: 'Space Grotesk', sans-serif;
}

a {
  text-decoration: none;
}
.container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
  padding: 20px;
  min-height: 100vh;
  background-color: #1e2530;
  width: 100%;

  &__heading {
    width: 100%;
    margin-top: 36px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1024px) {
      margin-top: 104px;
    }
  }
}

h1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 50px;
  text-transform: uppercase;
  color: #ffffff;
  line-height: 40px;

  @media (min-width: 1024px) {
    flex-direction: row;
    font-weight: bold;
    font-size: 58px;
  }

  span {
    position: relative;
    font-size: 28px;
    color: black;
    -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: #ffffff;

    @media (min-width: 1024px) {
      margin-left: 14px;
      font-size: 58px;
    }

    &::after {
      content: '';
      width: 29px;
      height: 5px;
      background-color: #36d5a4;
      position: absolute;
      bottom: 10px;
      border-radius: 8px;
      margin-left: 10px;

      @media (min-width: 1024px) {
        margin-left: 11px;
        width: 47px;
        bottom: 0;
      }
    }
  }
}

h2 {
  margin-top: 8px;
  font-size: 15px;
  color: #36d5a4;

  @media (min-width: 1024px) {
    margin-top: 16px;
    font-size: 28px;
  }
}
</style>
