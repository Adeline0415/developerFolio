import React, {useContext} from "react";
import "./Publication.scss";
import Button from "../../components/button/Button";
import {publicationSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../..//contexts/StyleContext";

function renderAuthors(authors) {
  const name = "Chia-Suan Yu";
  if (!authors.includes(name)) {
    return authors;
  }
  const [before, after] = authors.split(name);
  return (
    <>
      {before}
      <strong>{name}</strong>
      {after}
    </>
  );
}

export default function Publication() {
  const {isDark} = useContext(StyleContext);

  if (!publicationSection.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="publications">
        <div>
          <h1 className="publication-title" style={{textAlign: "left"}}>
            {publicationSection.title}
          </h1>
          <p
            className={
              isDark
                ? "dark-mode publication-subtitle"
                : "subTitle publication-subtitle"
            }
          >
            {publicationSection.subtitle}
          </p>

          <div className="publication-container" style={{textAlign: "center"}}>
            {publicationSection.publications.map((publication, i) => (
              <div
                key={i}
                className={
                  isDark
                    ? "dark-mode publication-card publication-card-dark"
                    : "publication-card publication-card-light"
                }
              >
                <div className="publication-detail">
                  {/* 1. 論文標題置中 */}
                  <h5
                    className={isDark ? "dark-mode card-title" : "card-title"}
                    style={{textAlign: "center"}}
                  >
                    {publication.title}
                  </h5>

                  {/* 2. 期刊/會議名稱置中 */}
                  <p
                    className={
                      isDark ? "dark-mode publication-meta" : "publication-meta"
                    }
                    style={{textAlign: "center"}}
                  >
                    {publication.meta}
                  </p>

                  {/* 3. 作者名單置中 */}
                  <p
                    className={
                      isDark ? "dark-mode card-subtitle" : "card-subtitle"
                    }
                    style={{textAlign: "center"}}
                  >
                    {renderAuthors(publication.description)}
                  </p>

                  {/* 下面保留你原本已經改好的 Button 區塊 */}
                  {publication.link && publication.linkLabel ? (
                    <div
                      className="publication-button-div"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                        marginTop: "15px"
                      }}
                    >
                      <a
                        href={publication.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{textDecoration: "none"}}
                      >
                        <Button text={publication.linkLabel || "paper"} />
                      </a>
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}
