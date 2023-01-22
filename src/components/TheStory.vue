<script setup lang="ts">
import { defineProps } from 'vue';
import codeImg from '@/assets/code-img.jpg';
import { library } from '@fortawesome/fontawesome-svg-core';

interface TheStory {
  title?: string;
  url?: string;
  timeStamp?: string;
  score?: number;
  author?: string;
  karma?: number;
}

const props = defineProps<{
  title: string;
  url: string;
  timeStamp: string;
  score: number;
  author: string;
  karma: number;
}>();
</script>

<template>
  <a class="the-story" :href="url">
    <div class="the-story__img">
      <div class="the-story__img-wrapper">
        <img :src="codeImg" alt="" />
      </div>
      <div class="the-story__score">{{ score }}</div>
    </div>
    <div class="the-story__content-wrapper">
      <div class="the-story__title">{{ title }}</div>
      <div class="the-story__url">{{ url }}</div>
      <div class="the-story__inner-wrapper">
        <div class="the-story__author">{{ author }}</div>
        <div class="the-story__karma">{{ karma }}</div>
        <div class="the-story__timestamp">{{ timeStamp }}</div>
      </div>
    </div>
  </a>
</template>

<style lang="scss">
.the-story {
  width: 342px;
  min-height: 510px;
  background-color: #222c3b;
  border: 3px solid #37445a;
  border-radius: 30px;
  overflow: hidden;

  &__content-wrapper {
    background-color: #222c3b;
    padding: 39px 26px 23px;
  }

  &__inner-wrapper {
    margin-top: 36px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }

  &__img {
    position: relative;
  }

  &__img-wrapper {
    width: 100%;
    height: 206px;
    border-bottom: 3px solid #37445a;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__score {
    position: absolute;
    bottom: 0;
    right: 22px;
    margin-bottom: -3.5%;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-backdrop-filter: blur(16px);
    backdrop-filter: blur(16px);
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid #ffffff;
    gap: 8px;
    border-radius: 20px;
    width: 122px;
    font-size: 21px;
    line-height: 27px;
    font-weight: bold;
    color: #36d5a4;

    &::before {
      content: 'Score';
      font-size: 14px;
      line-height: 18px;
      font-weight: 300;
      color: #ffffff;
    }
  }

  &__title {
    font-size: 28px;
    line-height: 33px;
    color: #ffffff;
  }

  &__url {
    margin-top: 15px;
    font-size: 14px;
    line-height: 18px;
    color: #879cbe;
  }

  &__author {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 16px;
    font-weight: light;
    line-height: 21px;
    color: #ffffff;

    &::before {
      font-family: 'Font Awesome 5 Free';
      font-weight: 900;
      content: '\f007';
      text-rendering: auto;
      display: inline-block;
      -webkit-font-smoothing: antialiased;
      -webkit-font-smoothing: antialiased;
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: #36d5a4;
    }
  }

  &__karma {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-left: 24px;
    font-size: 16px;
    font-weight: light;
    line-height: 21px;
    color: #ffffff;

    &::before {
      font-family: 'Font Awesome 5 Free';
      font-weight: 900;
      content: '\e473';
      text-rendering: auto;
      display: inline-block;
      -webkit-font-smoothing: antialiased;
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: #36d5a4;
    }
  }

  &__timestamp {
    grid-column: 3;
    grid-row: 3;
    font-size: 15px;
    color: #ffffff;
    font-weight: 200;
  }
}
</style>
