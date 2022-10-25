import axios from 'axios';

// Fetch images from Pixabay API using Axios

async function fetchImages(name, page, perPage) {
  const baseURL = 'https://pixabay.com/api/';
  const key = '30790248-497145c5d3b0c6576ca9c953f';

  try {
    const response = await axios.get(
      `${baseURL}?key=${key}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
    );
    return response.data;
  } catch (error) {
    console.log('ERROR: ' + error);
  }
}

export { fetchImages };

