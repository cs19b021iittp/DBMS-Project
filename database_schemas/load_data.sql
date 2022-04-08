-- Loading Data into "discounts" table 

INSERT INTO "discounts"("name", "percent")
VALUES ('FLAT50', 50);

INSERT INTO "discounts"("name", "percent")
VALUES ('MEGADEAL', 80);

INSERT INTO "discounts"("name", "percent")
VALUES ('SUPER30', 30);

INSERT INTO "discounts"("name", "percent")
VALUES ('BUMPER_DISCOUNT', 70);

INSERT INTO "discounts"("name", "percent")
VALUES ('SUMMER_SALE', 20);

INSERT INTO "discounts"("name", "percent")
VALUES ('OFFER10', 10);

INSERT INTO "discounts"("name", "percent")
VALUES ('GREATER60', 60);

INSERT INTO "discounts"("name", "percent")
VALUES ('HOTPINKSALE', 40);

INSERT INTO "discounts"("name", "percent")
VALUES ('UPTO30', 30);

INSERT INTO "discounts"("name", "percent")
VALUES ('EXTRA20OFF', 20);


--------------------------------------------------------------------------------------------------------------------------------

-- Loading Data into "products" table 

INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('Blue Sofa', '', 'The perfect Blue luxury sofa you can ever imagine! Confortable, durable and huge savings', 'furniture', 'stylestop', 1, 5000, 3, 1);

INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('double cot bed', '', 'King-size bed ideal for mattresses sized 78 x 72 inches.Features a spacious box storage for storing clothes, toys, manchester etc...', 'furniture', 'home_centre', 1, 15000, 2, 4);

INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('TV Cabinet', '', 'It has eye catching design which fits perfectly on wall. It has weight capacity of 10 kg.', 'furniture', 'stylestop', 1, 800, 5, 6);

INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('Book shelf', '', 'Storage Shelve for Books Storage Organizer. Cabinet Shelves for Bedroom Office Living Room', 'furniture', 'ddecor', 1, 1700, 4, 9);

INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('Brown coffee Table', '', 'Unique Hand Made Design On Solid Wood.Made with high durable wood that gives you assurance of stability of item', 'furniture', 'home_centre', 1, 1000, 6, 2);

INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('study table', '', 'Product is made of High durability Engineered board. Suitable for study,living room,bed room, office. Also be used as a computer desk, study desk, gaming desk & office desk', 'furniture', 'ddecor', 1, 2000, 2, 7);

INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('Home temple', '', 'Homecrafts Handpainted Wooden Home Temple/mandir. Has one Led Light Inside ,Wall mounted as well as it can be kept on flat floor.', 'furniture', 'home_centre', 1, 4500, 1, 10);

INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('Plastic Chairs', '', 'Plastic Sofa Chair for Home and Garden. Bearing Capacity Upto 150kgs (Set of 4)', 'furniture', 'ddecor', 1, 5800, 2, 8);

INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('Storage cabinet', '', 'Plastic Cabinet for Storage Clothes | Space Organizer | Shelves | Cupboard | Living Room | Kids | Multipurpose for Home & Office by Prima', 'furniture', 'stylestop', 1, 4200, 5, 5);

INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('stool chairs', '', 'Steadfast Leatherette Adjustable High Barstool, Adjustable Height Stool Chairs, Counter Height Swivel Bar Stools with backrest for Kitchen Island, Bar Chair, Counter Stool, Pack of 2', 'furniture', 'ddecor', 1, 3000, 4, 3);



-----------------------------------------------------------------------


INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('African Trivbal women art piece', 'https://m.media-amazon.com/images/I/81jZy7pSR7L._SX679_.jpg', ' Beautiful Finish Uniquely Hand Crafted Home Dcor African Tribal Women Art Piece (Set of 3, Multicolour)', 'show_pieces', 'stylestop', 1, 1000, 6, 1);

INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('Goddess Lakshmi idol', 'https://m.media-amazon.com/images/I/61+xmpHzDsL._AC_UL480_FMwebp_QL65_.jpg', 'Material: Dust marble.Made from best quality material.Color:Multicolor.This gift is ideal for wedding gifts, anniversary gifts ', 'show_pieces', 'home_centre', 1, 500, 7, 8);

INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('Budha idol', 'https://m.media-amazon.com/images/I/91FwdCVfcJL._SX679_.jpg', 'Polyresin Sitting Buddha Idol Statue Showpiece for Home Decor Diwali Decoration and Gifting, Orange and Black, 24CM, 1Piece', 'show_pieces', 'ddecor', 1, 400, 4, 6);

INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('Deer Family Set', 'https://m.media-amazon.com/images/I/51lo-5Fv3tL._SX679_.jpg', 'Home Decor Lucky Deer Family Set, Piano Finish Ceramic Figures - (Set of 3). Suitable for various home decoration styles, can put in living room, bedroom, dining room, office desk, study, club etc.', 'show_pieces', 'stylestop', 1, 850, 3, 3);

INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('Krishna with Cow Standing Under Tree Plying Flute', 'https://m.media-amazon.com/images/I/81OeAM3C1LL._SX679_.jpg', 'Handmade Handicraft Gift Piece Gives Royal and Rich Look Wherever It Is Placed.', 'show_pieces', 'home_centre', 1, 700, 4, 9);

INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('Blue Sofa', '', '', 'show_pieces', 'ddecor', 1, 5000, 3, 2);

INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('Blue Sofa', '', '', 'show_pieces', 'stylestop', 1, 5000, 3, 5);

INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('Blue Sofa', '', '', 'show_pieces', 'home_centre', 1, 5000, 3, 7);

INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('Blue Sofa', '', '', 'show_pieces', 'ddecor', 1, 5000, 3, 10);

INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('Blue Sofa', '', '', 'show_pieces', 'stylestop', 1, 5000, 3, 4);


----------------------------------------------------


INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('Blue Sofa', '', '', 'plants', 'stylestop', 1, 5000, 3, 1);

INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('Blue Sofa', '', '', 'plants', 'stylestop', 1, 5000, 3, 8);

INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('Blue Sofa', '', '', 'plants', 'stylestop', 1, 5000, 3, 6);

INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('Blue Sofa', '', '', 'plants', 'stylestop', 1, 5000, 3, 3);

INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('Blue Sofa', '', '', 'plants', 'stylestop', 1, 5000, 3, 9);

INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('Blue Sofa', '', '', 'plants', 'stylestop', 1, 5000, 3, 2);

INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('Blue Sofa', '', '', 'plants', 'stylestop', 1, 5000, 3, 5);

INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('Blue Sofa', '', '', 'plants', 'stylestop', 1, 5000, 3, 7);

INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('Blue Sofa', '', '', 'plants', 'stylestop', 1, 5000, 3, 10);

INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('Blue Sofa', '', '', 'plants', 'stylestop', 1, 5000, 3, 4);

----------------------------------------------------------------

