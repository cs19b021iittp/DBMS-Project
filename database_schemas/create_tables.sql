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

CREATE TABLE "buyers" (
  "id" SERIAL PRIMARY KEY,
  "phone_number" char(10),
  "first_name" varchar,
  "last_name" varchar,
  "wallet_balance" decimal CHECK("wallet_balance" > 0.0)
);

CREATE TABLE "addresses" (
  "id" SERIAL PRIMARY KEY,
  "user_id" int,
  "address_line1" varchar,
  "address_line2" varchar,
  "city" varchar,
  "pincode" varchar,
  "country" varchar
);

CREATE TABLE "payment_cards" (
  "id" SERIAL PRIMARY KEY,
  "user_id" int,
  "name_on_card" varchar,
  "card_number" char(16),
  "cvv" char(3)
);

CREATE TABLE "order_items" (
  "id" SERIAL PRIMARY KEY,
  "order_id" int,
  "product_id" int,
  "quantity" int DEFAULT 1 CHECK("quantity" > 0)
);

CREATE TABLE "orders" (
  "id" int PRIMARY KEY,
  "user_id" int UNIQUE NOT NULL,
  "status" order_status,
  "created_at" timestamp,
  "arriving_on" timestamp,
  "order_total" decimal,
  "billing_address" int,
  "payment_method" payment_options
);

CREATE TABLE "products" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar,
  "image" varchar,
  "description" text,
  "category" products_categories,
  "brand" brands,
  "seller_id" int NOT NULL,
  "price" decimal CHECK("price" > 0.0),
  "left_in_stock" int CHECK("left_in_stock" > 0),
  "discount_id" int
);

CREATE TABLE "discounts" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar,
  "percent" decimal CHECK("percent" > 0.0)
);

CREATE TABLE "cart_items" (
  "id" SERIAL PRIMARY KEY,
  "user_id" int,
  "product_id" int,
  "quantity" int CHECK("quantity" > 0)
);

CREATE TABLE "sellers" (
  "id" int,
  "phone_number" char(10),
  "seller_name" varchar,
  "account_balance" decimal CHECK("account_balance" > 0.0)
);

ALTER TABLE "order_items" ADD FOREIGN KEY ("order_id") REFERENCES "orders" ("id");

ALTER TABLE "order_items" ADD FOREIGN KEY ("product_id") REFERENCES "products" ("id");

ALTER TABLE "products" ADD FOREIGN KEY ("seller_id") REFERENCES "sellers" ("id");

ALTER TABLE "addresses" ADD FOREIGN KEY ("user_id") REFERENCES "buyers" ("id");

ALTER TABLE "products" ADD FOREIGN KEY ("discount_id") REFERENCES "discounts" ("id");

ALTER TABLE "buyers" ADD FOREIGN KEY ("id") REFERENCES "payment_cards" ("user_id");

ALTER TABLE "cart_items" ADD FOREIGN KEY ("product_id") REFERENCES "products" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("user_id") REFERENCES "buyers" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("billing_address") REFERENCES "addresses" ("id");

ALTER TABLE "cart_items" ADD FOREIGN KEY ("user_id") REFERENCES "buyers" ("id");