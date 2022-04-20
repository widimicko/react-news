import axios from "axios";

const baseUrl = process.env.REACT_APP_NEWS_BASE_URL;
const apiKey = process.env.REACT_APP_API_APIKEY;

const getNews = async ({ searchQuery = "technology" }) => {
  try {
    const response = await axios.get(
      `${baseUrl}/everything?apiKey=${apiKey}&q=${searchQuery}`
    );

    if (response.status === 200) {
      const responseData = {
        ...response.data,
        category: searchQuery,
      };

      return responseData;
    }
  } catch (error) {
    console.error(`Error getting news: ${error}`);
  }
};

export default getNews;
