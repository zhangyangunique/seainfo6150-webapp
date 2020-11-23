import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./ArticleListItem.module.css";
import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton.jsx";
import ArticleImage from "../ArticleImage/ArticleImage.jsx";

const ArticleListItem = (props) => {
  const [isTextShowing, setIsTextShowing] = useState(false);

  function onClick() {
    setIsTextShowing(!isTextShowing);
  }

  return (
    <li className={styles.container}>
      <article className={styles.article}>
        <div className={styles.wrapper}>
		  <ArticleImage url={props.article.image._url} title={props.article.title} />
          <h2 className={styles.title}>{props.article.title}</h2>
          {isTextShowing && (
            <div className={styles.text}>
              <p>{props.article.shortText}</p>
              <time className={styles.time} dateTime={props.article.timeStamp}>
                {props.article.displayDate}
              </time>
            </div>
          )}
        </div>
        <ArticleTextToggleButton
          buttonText={isTextShowing ? "Show less" : "Show more"}
          onClick={onClick}
        />
      </article>
    </li>
  );
};

ArticleListItem.propTypes = {
  article: PropTypes.object.isRequired,
};
export default ArticleListItem;
