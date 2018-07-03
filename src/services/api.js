import apisauce from 'apisauce';

const create = () => {
  const youtube = apisauce.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    headers: {
      'Cache-Control': 'no-cache'
    },
    timeout: 10000
  });

  return {
    getVideos(perPage=20) {
      const key = '';
      const channel = '';
      return youtube.get(`/search?key=${key}&channelId=${channel}&part=snippet,id&order=date&maxResults=${perPage}`);
    }
  }
}

export default create();
