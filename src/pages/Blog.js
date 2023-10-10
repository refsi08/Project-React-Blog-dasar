import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getArticle() {
      const reqData = await fetch("https://api.spaceflightnewsapi.net/v3/articles");
      const response = await reqData.json();

      setArticle(response);
      setLoading(false);
    }
    getArticle();
  });
  return (
    <>
      <div className="main">
        <h1>New Blog</h1>
        {loading && (
          <h1>
            <i>Loading Data...</i>
          </h1>
        )}
        {!loading && (
          <ul className="cards">
            {article.map((item) => (
              <li className="cards_item" key={item.id}>
                <div className="card">
                  <div className="card_image">
                    <img src={item.imageUrl} alt="" />
                  </div>
                  <div className="card_content">
                    <h2 className="card_title">{item.title}</h2>
                    <p className="card_text">{item.summary}</p>

                    <Link to={`/blog/${item.id}`}>
                      <button className="btn card_btn">Read More</button>
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <h3 className="made_by">Made with RefDev</h3>
    </>
  );
}
