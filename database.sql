DROP table IF EXISTS "buyers";

CREATE TABLE "buyers" (
  "id" SERIAL PRIMARY KEY,
  "phone_number" char(10),
  "first_name" varchar,
  "last_name" varchar,
  "wallet_balance" decimal
);

