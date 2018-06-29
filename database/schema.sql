CREATE TABLE products (
	id int PRIMARY KEY
);

CREATE TABLE users (
	id int AUTO_INCREMENT PRIMARY KEY,
	nickname varchar(50) NOT NULL,
	active_since datetime NOT NULL,
	age int,
	body_type varchar(25),
	athletic_type varchar(25),
	city varchar(50) NOT NULL,
	state varchar(50) NOT NULL,
	country varchar(50) NOT NULL
);
-- body_type options: curvy, athletic, lean, petite, muscular, slim, solid
-- athletic_type options: sweaty generalist, yogi, runner, dancer, cyclist

CREATE TABLE reviews (
	id int AUTO_INCREMENT PRIMARY KEY,
	created_at datetime NOT NULL,
	title varchar(500) NOT NULL,
	details varchar(5000) NOT NULL,
	fit varchar(50) NOT NULL,
	rating int NOT NULL,
	what_you_like varchar(250),
	what_you_didnt_like varchar(250),
	voted_helpful int DEFAULT 0,
	voted_not_helpful int DEFAULT 0,
	inappropriate int DEFAULT 0,
	user_id int NOT NULL,
	product_id int NOT NULL,
	FOREIGN KEY (user_id) REFERENCES users(id),
	FOREIGN KEY (product_id) REFERENCES products(id)
);
-- fit options: second skin, tight, snug, just right, roomy, oversized, flowy

-- CREATE TABLE review_comments (
--   id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   created_at datetime NOT NULL,
--   nickname varchar(50) NOT NULL,
--   comment_text varchar(500) NOT NULL
-- );

-- ****************************************************************************
-- BACKUP SEEDING OPTION: UNCOMMENT LINES BELOW TO LOAD LOCAL CSVS INTO DB
-- NOTE: YOUR VERSION OF SQL MIGHT NOT PERMIT THE USE OF 'LOCAL'
-- ****************************************************************************

-- LOAD DATA LOCAL INFILE './users.csv'
-- INTO TABLE users
-- FIELDS TERMINATED BY ','
-- -- ENCLOSED BY '"'
-- LINES TERMINATED BY '\n'
-- IGNORE 1 ROWS;

-- LOAD DATA LOCAL INFILE './reviews.csv'
-- INTO TABLE reviews
-- FIELDS TERMINATED BY ','
-- -- ENCLOSED BY '"'
-- LINES TERMINATED BY '\n'
-- IGNORE 1 ROWS;

-- ****************************************************************************
-- BACKUP SEEDING OPTION: UNCOMMENT THE LINES BELOW TO SEED 3 REVIEWS INTO DB
-- ****************************************************************************
-- INSERT INTO products (id) VALUES (1);
-- INSERT INTO products (id) VALUES (2);
-- INSERT INTO products (id) VALUES (3);

-- INSERT INTO users (id, active_since, nickname, age, body_type, athletic_type, city, state, country)
-- 	VALUES (1000, "2014-01-24 09:02:44", "jmicca", 24, "athletic", "yogi", "irvine", "ca", "usa");
-- INSERT INTO users (id, active_since, nickname, age, body_type, athletic_type, city, state, country)
-- 	VALUES (1001, "2012-06-24 04:02:35", "smonno", 33, "curvy", "runner", "yerbavista", "ca", "usa");

-- INSERT INTO reviews (title, created_at, rating, details, fit, what_you_like, what_you_didnt_like, user_id, product_id, voted_helpful)
-- 	VALUES ("almost there...", "2018-11-06 14:02:44", 3, "i really wanted to love these but the material just isn't good.",
-- 					"tight", "the style", "the material", 1000, 1, 3);
-- INSERT INTO reviews (title, created_at, rating, details, fit, what_you_like, user_id, product_id, voted_helpful)
-- 	VALUES ("this was great!", "2017-01-18 16:02:11", 5, "the color wasn't exactly what was shown on the website but I liked in anyway",
-- 					"tight", "the style", 1001, 1, 1);
