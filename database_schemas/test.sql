/* CREATE TABLE IF NOT EXISTS todo(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL
);

DROP table IF EXISTS todo; */

CREATE TYPE "login" AS ENUM (
  'logged_in',
  'logged_out'
);

CREATE TYPE "order_status" AS ENUM (
  'on_the_way',
  'delivered',
  'cancelled'
);

CREATE TYPE "payment_options" AS ENUM (
  'wallet',
  'card'
);

CREATE TYPE "products_categories" AS ENUM (
  'furniture',
  'lighting',
  'plants',
  'show_pieces'
);

CREATE TYPE "brands" AS ENUM (
  'home_centre',
  'ddecor',
  'stylestop'
);