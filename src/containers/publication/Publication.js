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
          <h1 className="publication-title">{publicationSection.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode publication-subtitle"
                : "subTitle publication-subtitle"
            }
          >
            {publicationSection.subtitle}
          </p>

          <div className="publication-container">
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
                  <h5
                    className={isDark ? "dark-mode card-title" : "card-title"}
                  >
                    {publication.title}
                  </h5>
                  <p
                    className={
                      isDark ? "dark-mode publication-meta" : "publication-meta"
                    }
                  >
                    {publication.meta}
                  </p>
                  <p
                    className={
                      isDark ? "dark-mode card-subtitle" : "card-subtitle"
                    }
                  >
                    {renderAuthors(publication.description)}
                  </p>
                  {publication.link && publication.linkLabel ? (
                    <div className="publication-button-div">
                      <a
                        href={publication.link}
                        target="_blank"
                        rel="noopener noreferrer"
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
