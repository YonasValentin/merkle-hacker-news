import axios from 'axios';
import { ref } from 'vue';
import moment from 'moment';

export function useRandomTopArticles() {
  const baseUrl = 'https://hacker-news.firebaseio.com/v0';

  const stories = ref([]);
  const error = ref('');

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  async function getRandomTopArticles() {
    try {
      const response = await axios.get(`${baseUrl}/topstories.json`);
      let items = response.data;
      const list = [];

      for (let i = 0; i < 10; i++) {
        const storyId = items[getRandomInt(items.length)];
        const _story = await axios.get(`${baseUrl}/item/${storyId}.json`);
        const story = _story.data;
        // story.time = new Date(story.time);
        story.time = moment.unix(story.time).format('DD MMM.YYYY');
        const _user = await axios.get(`${baseUrl}/user/${story.by}.json`);
        const user = _user.data;
        list.push({ ...story, ...user });
      }
      list.sort((a, b) => a.score - b.score);
      stories.value = list;
    } catch (e) {
      error.value = e;
    }
  }

  getRandomTopArticles();

  return {
    stories,
    error,
  };
}
