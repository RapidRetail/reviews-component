const path = require('path');
const { Client } = require('pg');

const client = new Client()
client.connect()
const loadDataSql = (callback) => {
  client.query('CREATE TABLE products (id int NOT NULL PRIMARY KEY, gender char(5) NOT NULL, category varchar(12) NOT NULL, type varchar(12) NOT NULL, colors varchar(30) NOT NULL)')
  client.query('CREATE TABLE users (id int AUTO_INCREMENT PRIMARY KEY, nickname varchar(50) NOT NULL, active_since datetime NOT NULL, age int, body_type varchar(25), athletic_type varchar(25), city varchar(50) NOT NULL, state varchar(50) NOT NULL, country varchar(50) NOT NULL)')
  client.query('CREATE TABLE reviews (id SERIAL PRIMARY KEY, created_at date NOT NULL, title varchar(500) NOT NULL, details varchar(5000) NOT NULL, fit varchar(50) NOT NULL, rating int NOT NULL, what_you_like varchar(250), what_you_didnt_like varchar(250), voted_helpful int DEFAULT 0, voted_not_helpful int DEFAULT 0, inappropriate int DEFAULT 0, user_id int NOT NULL, product_id int NOT NULL)')
  const copyDataProductsQuery = `COPY products (id, gender, category, type, colors) FROM '${path.join(__dirname, 'products.tsv')}' WITH DELIMITER E'\t'`
  // const copyDataUsersQuery = `COPY users (id, nickname, active_since, body_type, athletic_type, city, state, country) FROM '${path.join(__dirname, 'users.tsv')}' WITH DELIMITER E'\t'`
  // const copyDataReviewsQuery = `COPY reviews (created_at, title, details, fit, rating, what_you_like, what_you_didnt_like, voted_helpful, voted_not_helpful, inappropriate, user_id, product_id) FROM '${path.join(__dirname, 'reviews.tsv')}' WITH DELIMITER E'\t'`
  client.query(copyDataProductsQuery, function(err, data) {
    if (err) callback(err)
    else callback(null, data)
  })
  // client.query(copyDataUsersQuery, function(err, data) {
  //   if (err) callback(err)
  //   else callback(null, data)
  // })
  // client.query(copyDataReviewsQuery, function(err, data) {
  //   if (err) callback(err)
  //   else callback(null, data)
  // })
}

loadDataSql(function(err, data) {
  if (err) console.log(err)
})
