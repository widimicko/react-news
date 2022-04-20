const NewsList = ({ articles }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {articles.map((article, index, arr) => (
        <div key={index}>
          <h1>{article.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
