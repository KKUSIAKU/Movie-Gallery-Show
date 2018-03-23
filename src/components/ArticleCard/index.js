import React from "react";
import PropTypes from "prop-types";

const defaultSrc = "./defaultArticleImage.png";
const defaultAlt = "poster image not available";

const ArticleCard = ({
  articleId, title, year, src, alt, poster, genres, plot }) => {
  if (src && !alt) {
    throw new Error("In <Article/> : alt property is not set while src property is found");
  }

  if (!src) {
    src = poster;
  }

  return (
    <article id={articleId}>
      <div className="card-img-container">
        <img
          className="img-fluid"
          src={src ? src : defaultSrc}
          alt={alt ? alt : defaultAlt} />
      </div>
      <header><h3 className="article-title text-secondary py-2">{title}</h3></header>
      <p>{plot? plot : "Some text here will come from server"}</p>
      <footer className="">
        <p className="my-0">{year}</p>
        <p className="text-info my-0">{genres?genres[0]:"Comedy"}</p>
      </footer>
    </article>
  );
};

ArticleCard.propTypes = {
  articleId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired
};

export default ArticleCard; 
