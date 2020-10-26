import React, { useState } from "react";
import PropTypes from "prop-types";
import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton.jsx";
import styles from "./ArticleListItem.module.css";

const ArticleListItem = (props) => {
	const [hidden, setHidden] = useState(true);

	return (
		<li className={styles.article}>
			<article>
				<h2 className={styles.articleTitle}>{props.article.title}</h2>
				{hidden ? '' :
					<div className={styles.hiddenContent}>
						<p>{props.article.shortText}</p>
						<time className={styles.displayDate} dateTime={props.article.timeStamp}>
							{props.article.displayDate}
						</time>
					</div>}
			</article>
			<ArticleTextToggleButton buttonText={hidden ? 'Show more' : 'Show less'} onClick={() => setHidden(!hidden)} />
		</li>
	);
};

ArticleListItem.propTypes = {
	article: PropTypes.object.isRequired,
};
export default ArticleListItem;
