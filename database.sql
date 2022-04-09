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

-- temporariliy placing it here 
-- buyers

INSERT INTO "buyers"("phone_number", "first_name", "last_name", "wallet_balance")
VALUES ('9876543210', 'Sheetal', 'Sharma', 4000.1);

-- addresses
-- for each buyer create 2 addresses each. (user_id is 1 2 3 4 5)
INSERT INTO "addresses"("user_id", "address_line1", "address_line2", "city", "pincode", "country")
VALUES (1, 'Number 4 Teri Street', 'Block - 5', 'Agra', '560095', 'India');

-- payment cards 
-- for each buyer create exactly 1 payment card. (user_id is 1 2 3 4 5)
INSERT INTO "payment_cards"("user_id", "name_on_card", "card_number", "cvv")
VALUES (1, 'Sheetal S', '1234123412341234', '123');

-- sellers 
INSERT INTO "sellers"("phone_number", "seller_name", "account_balance")
VALUES ('1234567890', 'Aditi Singh', 5003);