import NewsCard from "../NewsCard";

const NewsList = ({ articles }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {articles.map((article, index, arr) => {
        if (!article.urlToImage || !article.author || !article.content) {
          return null;
        }

        return (
          <NewsCard
            key={index}
            article={article}
            notLastChild={!(arr.length === index + 1)}
          />
        );
      })}
    </div>
  );
};

export default NewsList;
