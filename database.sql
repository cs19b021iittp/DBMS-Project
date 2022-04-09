DROP table IF EXISTS "buyers";

CREATE TABLE "buyers" (
  "id" SERIAL PRIMARY KEY,
  "phone_number" char(10),
  "first_name" varchar,
  "last_name" varchar,
  "wallet_balance" decimal
);

INSERT INTO "buyers"("phone_number", "first_name", "last_name", "wallet_balance")
VALUES ('1234567890', 'Ramu', 'Sharma', 100.3);

SELECT * FROM "buyers";
