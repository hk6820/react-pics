import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID hwEobizgmmI-ZMAx8JKeENr3tkb7q6Ts5O3-eE6NpJQ'
      }
});