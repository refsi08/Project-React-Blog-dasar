import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function BlogDetail() {
  const params = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    async function getArticle() {
      const reqArticle = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${params.id}`);
      const response = await reqArticle.json();

      setArticle(response);
    }
    getArticle();
  }, [params]);
  return (
    <>
      <div className="header">
        <h2>
          Blog <i>{article.title}</i>
        </h2>
      </div>

      <div className="row">
        <div className="leftcolumn">
          <div className="card">
            <h2>{article.title}</h2>
            <h5>{article.publishedAt}</h5>
            <img src={article.imageUrl} alt="" />
            <p>{article.newsSite}</p>
            <p>{article.summary}</p>
            <Link to={article.url}>{article.url}</Link>
          </div>
        </div>
        <div className="rightcolumn">
          <div className="card">
            <h2>About Me</h2>
            <img src={article.imageUrl} alt="" />
            <p>{article.newsSite}</p>
          </div>
          <div className="card">
            <h3>Popular Post</h3>
            <div>
              <img src={article.imageUrl} alt="" />
              <p>{article.newsSite}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
