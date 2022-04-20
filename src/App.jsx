import { useState, useEffect } from "react";

import "./app.css";

import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";
import Error from "./components/Error";
import NewsList from "./components/NewsList";
import Category from "./components/Category";

import getNews from "./services/getNews";

import CATEGORIES from "./constant/categories";

function App() {
  const [articles, setArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0].slug);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);
      const response = await getNews({ searchQuery: selectedCategory });

      if (!response) {
        setIsLoading(false);
        setIsError(true);

        return;
      }

      setArticles(response.articles);
      setIsLoading(false);
    };

    fetchNews();
  }, [selectedCategory]);

  const handleCategoryChange = (slug) => {
    setSelectedCategory(slug);
  };

  return (
    <>
      <Navbar />
      <div className="categories">
        {CATEGORIES.map((category, index) => (
          <Category
            key={index}
            category={category}
            selected={selectedCategory}
            handleChange={() => handleCategoryChange(category.slug)}
          />
        ))}
      </div>
      <Container>
        {isLoading && <Loading />}
        {isError && <Error />}
        {!isLoading && articles.length > 0 && <NewsList articles={articles} />}
      </Container>
    </>
  );
}

export default App;
