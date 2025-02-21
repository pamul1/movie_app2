CREATE TABLE movie (
  movie_id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  release_year INT NOT NULL,
  genre TEXT NOT NULL,
  duration INT NOT NULL
);

CREATE TABLE actor (
  actor_id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  date_of_birth INT NOT NULL,
  nationality TEXT NOT NULL
);

CREATE TABLE moviecasts (
  movie_id INT REFERENCES movies(movie_id),
  actor_id INT REFERENCES actors(actor_id),
  role TEXT NOT NULL
);

CREATE TABLE earning (
  earning_id SERIAL PRIMARY KEY,
  movie_id INT REFERENCES movies(movie_id),
  country TEXT NOT NULL,
  revenue INT NOT NULL
);

CREATE TABLE movie_users(
  email VARCHAR(50) PRIMARY KEY,
  name TEXT NOT NULL,
  lastName TEXT NOT NULL,
  password VARCHAR(20)

);

select a.earning_id, 
                        a.movie_id, 
                        a.country, 
                        '$'||trim(to_char(a.revenue, '999,999,999')) revenue, 
                        b.title as movie_name
                        from earnings a
                        inner join movies b 
                        on a.movie_id = b.movie_id;

select * FROM earnings

select * FROM movies