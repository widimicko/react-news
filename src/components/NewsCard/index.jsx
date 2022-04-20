import formatDate from "../../utils/formatDate";

import "./style.css";

const NewsCard = ({ article, notLastChild }) => {
  const { urlToImage, title, publishedAt, author, source, description, url } =
    article;

  return (
    <>
      <div className={`newsCard ${notLastChild && "newsCardGap"}`}>
        <div className="imgContainer">
          <img src={urlToImage} alt="title" className="img" />
          <p className="imgTitle">{title}</p>
        </div>

        <div className="newsCardContent">
          <p className="newsCardDate">{formatDate(publishedAt)}</p>
          <p className="newsCardAuthor">{`${author} | ${source.name}`}</p>
          <p className="newsCardDesc">{description}</p>
          <a
            href={url}
            className="url"
            target="_blank"
            rel="noreferrer noopener"
          >
            Go to website
          </a>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
