import { reactive, computed } from 'vue';
import { defineStore } from 'pinia';
import api from '@/plugins/axios';

export const useHomeStore = defineStore('home', () => {
  const state = reactive({
    currentMovie: {},
  });

  const currentMovie = computed(() => state.currentHome);

  const getHomeDetail = async (homeId) => {
    const response = await api.get(`home/${homeId}?language=pt_br`);
    state.currentMovie = response.data;
  };

  return { currentMovie, getHomeDetail };
});
