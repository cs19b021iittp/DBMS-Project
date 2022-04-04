-- Loading Data into "discounts" table 

INSERT INTO "discounts"("name", "percent")
VALUES ('FLAT50', 50);

--------------------------------------------------------------------------------------------------------------------------------

-- Loading Data into "products" table 

INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('Blue Sofa', '', 'The perfect Blue luxury sofa you can ever imagine! Confortable, durable and huge savings', 'furniture', 'stylestop', 1, 5000, 3, 1);