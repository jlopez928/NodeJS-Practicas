CREATE DATABASE news_portal;

USE news_portal;

CREATE TABLE news(
    id_news INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100),
    news TEXT,
    data_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE news;

INSERT INTO news(title, news) values ('MY TITLE', 'CONTENT OF THE NEWS');

SELECT * FROM news;