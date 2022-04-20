/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";

import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";
import Error from "./components/Error";
import NewsList from "./components/NewsList";

import getNews from "./services/getNews";

function App() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);
      const response = await getNews({ searchQuery: "health" });

      if (!response) {
        setIsLoading(false);
        setIsError(true);

        return;
      }

      setArticles(response.articles);
      setIsLoading(false);
    };

    fetchNews();
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        {isLoading && <Loading />}
        {isError && <Error />}
        {!isLoading && articles.length > 0 && <NewsList articles={articles} />}
      </Container>
    </>
  );
}

export default App;
