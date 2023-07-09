import React from 'react';
import styles from '../styles/Projects.module.css';
import icons from '../utils/icons.json';
import Header from '../components/Header';
import DataProjects from '../utils/Projects.json';

export default function Projects() {
  return (
    <>
      <Header />
      {DataProjects.projects.map((x) => {
        const headingStyle = {
          color: x.color,
        };

        return (
          <div className={styles.content}>
            <div className={styles.card}>
              <img src={x.image} alt="Imagen" className={styles.circleImage} />
              <div className={styles.headingContainer}>
                <h1 style={headingStyle}>
                  <i className={x.icon}></i> {x.title}
                </h1>
                <h3>{x.description}</h3>
                <h2 style={headingStyle}>Proyecto escrito en:</h2>
                <h1>
                  <div style={headingStyle} className="languages-icons">
                    {icons.languages
                      .filter((language) => {
                        const languageName = Object.keys(language)[0];
                        return x.languages.includes(languageName);
                      })
                      .map((language, index) => (
                        <i
                          key={index}
                          className={Object.values(language)[0]}
                        ></i>
                      ))}
                  </div>
                </h1>
                <p>
                  {icons.tools
                    .filter((tool) => {
                      const toolName = Object.keys(tool)[0];
                      return x.tools.includes(toolName);
                    })
                    .map((tool, index) => (
                      <img
                        key={index}
                        alt={Object.keys(tool)[0]}
                        src={Object.values(tool)[0]}
                      />
                    ))}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
