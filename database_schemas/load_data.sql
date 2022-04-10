INSERT INTO "buyers"("phone_number", "first_name", "last_name", "wallet_balance")
VALUES ('9876543210', 'Sheetal', 'Sharma', 4000.1);

INSERT INTO "buyers"("phone_number", "first_name", "last_name", "wallet_balance")
VALUES ('9876543211', 'Priyanka', 'Chpra', 6000.1);

INSERT INTO "buyers"("phone_number", "first_name", "last_name", "wallet_balance")
VALUES ('9876543212', 'Deepika', 'padukone', 2000.1);

INSERT INTO "buyers"("phone_number", "first_name", "last_name", "wallet_balance")
VALUES ('9876543213', 'Kareena', 'Kapoor', 5000.1);

INSERT INTO "buyers"("phone_number", "first_name", "last_name", "wallet_balance")
VALUES ('9876543214', 'Hritik', 'Roshan', 8000.1);

INSERT INTO "addresses"("user_id", "address_line1", "address_line2", "city", "pincode", "country")
VALUES (1, 'Number 4 Teri Street', 'Block - 5', 'Agra', '560095', 'India');

INSERT INTO "addresses"("user_id", "address_line1", "address_line2", "city", "pincode", "country")
VALUES (1, 'Rajendra Rao Nagar', 'Block - 6', 'Delhi', '560096', 'India');

INSERT INTO "addresses"("user_id", "address_line1", "address_line2", "city", "pincode", "country")
VALUES (2, 'Anna Nagar', 'Block - 1', 'Madhurai', '560091', 'India');

INSERT INTO "addresses"("user_id", "address_line1", "address_line2", "city", "pincode", "country")
VALUES (2, 'Kollapatty Street', 'Block - 2', 'Salem', '560092', 'India');

INSERT INTO "addresses"("user_id", "address_line1", "address_line2", "city", "pincode", "country")
VALUES (3, 'Banjara Hills', 'Block - 3', 'Hyderabad', '560093', 'India');

INSERT INTO "addresses"("user_id", "address_line1", "address_line2", "city", "pincode", "country")
VALUES (3, 'Bank Colony', 'Block - 4', 'Khammam', '560094', 'India');

INSERT INTO "addresses"("user_id", "address_line1", "address_line2", "city", "pincode", "country")
VALUES (4, 'Kormangla colony', 'Block - 7', 'Banglore', '560097', 'India');

INSERT INTO "addresses"("user_id", "address_line1", "address_line2", "city", "pincode", "country")
VALUES (4, 'Gokulam Road', 'Block - 8', 'Mysore', '560098', 'India');

INSERT INTO "addresses"("user_id", "address_line1", "address_line2", "city", "pincode", "country")
VALUES (5, 'Alipiri Road', 'Block - 9', 'Tirupati', '560099', 'India');

INSERT INTO "addresses"("user_id", "address_line1", "address_line2", "city", "pincode", "country")
VALUES (5, 'Dollar street', 'Block - 3', 'Madanapalle', '560088', 'India');

INSERT INTO "payment_cards"("user_id", "name_on_card", "card_number", "cvv")
VALUES (1, 'Sheetal S', '1234123412341234', '123');

INSERT INTO "payment_cards"("user_id", "name_on_card", "card_number", "cvv")
VALUES (2, 'Debeshee D', '2345234523452345', '234');

INSERT INTO "payment_cards"("user_id", "name_on_card", "card_number", "cvv")
VALUES (3, 'Harshitha K', '3456345634563456', '345');

INSERT INTO "payment_cards"("user_id", "name_on_card", "card_number", "cvv")
VALUES (4, 'Shreetesh M', '4567456745674567', '456');

INSERT INTO "payment_cards"("user_id", "name_on_card", "card_number", "cvv")
VALUES (5, 'Kalidas', '5678567856785678', '567');

INSERT INTO "sellers"("phone_number", "seller_name", "account_balance")
VALUES ('1234567890', 'Aditi Singh', 5003);

INSERT INTO "sellers"("phone_number", "seller_name", "account_balance")
VALUES ('1234567891', 'Dhoni Ms', 8000);

INSERT INTO "sellers"("phone_number", "seller_name", "account_balance")
VALUES ('1234567892', 'Virat Kohli', 1000);

INSERT INTO "sellers"("phone_number", "seller_name", "account_balance")
VALUES ('1234567893', 'Rohith Sharma', 550);

INSERT INTO "sellers"("phone_number", "seller_name", "account_balance")
VALUES ('1234567894', 'Rahul Kl', 770);

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

INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('Blue Sofa set', 'https://m.media-amazon.com/images/I/91CQN4IIb0L._SX679_.jpg', 'The perfect Blue luxury sofas you can ever imagine! Confortable, durable and huge savings', 'furniture', 'stylestop', 1, 30000, 3, 1);

INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('double cot bed', 'https://m.media-amazon.com/images/I/81CCjj4-iwL._SX679_.jpg', 'King-size bed ideal for mattresses sized 78 x 72 inches.Features a spacious box storage for storing clothes, toys, manchester etc...', 'furniture', 'home_centre', 1, 15000, 2, 4);

INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('TV Cabinet', 'https://m.media-amazon.com/images/I/81iXuBvIJSL._SX679_.jpg', 'It has eye catching design which fits perfectly on wall. It has weight capacity of 10 kg.', 'furniture', 'stylestop', 1, 800, 5, 6);

INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('Book shelf', 'https://m.media-amazon.com/images/I/81FlAptkcfL._SX679_.jpg', 'Storage Shelve for Books Storage Organizer. Cabinet Shelves for Bedroom Office Living Room', 'furniture', 'ddecor', 1, 1700, 4, 9);

INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('Brown coffee Table', 'https://m.media-amazon.com/images/I/61DY8iAb+LL._SX679_.jpg', 'Unique Hand Made Design On Solid Wood.Made with high durable wood that gives you assurance of stability of item', 'furniture', 'home_centre', 1, 1000, 6, 2);

INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('study table', 'https://m.media-amazon.com/images/I/71sgiDbvSmL._SX679_.jpg', 'Product is made of High durability Engineered board. Suitable for study,living room,bed room, office. Also be used as a computer desk, study desk, gaming desk & office desk', 'furniture', 'ddecor', 1, 2000, 2, 7);

INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('Home temple', 'https://m.media-amazon.com/images/I/41SWCUDZ53L.jpg', 'Homecrafts Handpainted Wooden Home Temple/mandir. Has one Led Light Inside ,Wall mounted as well as it can be kept on flat floor.', 'furniture', 'home_centre', 1, 4500, 1, 10);

INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('Plastic Chairs', 'https://m.media-amazon.com/images/I/6169W-U6OwL._SX679_.jpg', 'Plastic Sofa Chair for Home and Garden. Bearing Capacity Upto 150kgs (Set of 4)', 'furniture', 'ddecor', 1, 5800, 2, 8);

INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('Storage cabinet', 'https://m.media-amazon.com/images/I/71FhxOP3DoL._SX679_.jpg', 'Plastic Cabinet for Storage Clothes | Space Organizer | Shelves | Cupboard | Living Room | Kids | Multipurpose for Home & Office by Prima', 'furniture', 'stylestop', 1, 4200, 5, 5);

INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('stool chairs', 'https://m.media-amazon.com/images/I/81VskLXdH4L._SX679_.jpg', 'Steadfast Leatherette Adjustable High Barstool, Adjustable Height Stool Chairs, Counter Height Swivel Bar Stools with backrest for Kitchen Island, Bar Chair, Counter Stool, Pack of 2', 'furniture', 'ddecor', 1, 3000, 4, 3);

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
VALUES('Bonsai Money Tree Plant', 'https://m.media-amazon.com/images/I/81eCQYj3-TL._SX679_.jpg', 'Crystals and Gemstones, Seven Chakra Crystal Tree Showpiece for Good Luck Home Decor Decoration Bonsai Money Tree Plant, Size 10-12 inches, Multicolor Golden Wire', 'show_pieces', 'ddecor', 1, 600, 4, 2);

INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('double peacocks statue', 'https://m.media-amazon.com/images/I/913GqKpFloS._SX679_.jpg', 'Metal Double Lovers Peacock Statue, Showpiece Figurine- Standard, Gold. Metal Peacock Couple Staute :- Size- (LXWXH) 25 X 9.5 X 15.5 CM, Weight- 570 Grams, Material:Metal (Aluminium), Color :-Gold', 'show_pieces', 'stylestop', 1, 700, 4, 5);

INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('cow and calf idols', 'https://m.media-amazon.com/images/I/616b46kJZpS._SX679_.jpg', 'Gift Items Art Handicraft gift gallery Decorative Stone Marble dust/Polyresin Cow and Calf Showpiece Idols and Figurines, 5x3x3 Inch.', 'show_pieces', 'home_centre', 1, 375, 2, 7);

INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('Butterflies wall Sticker', 'https://m.media-amazon.com/images/I/61T2zjKPiLL._SX679_.jpg', ' PVC Vinyl Light Blue 3D Butterflies Home Decor Wall Sticker 1 Combo of 12 Piece (13 cm x 15 cm). Features: Eco Friendly, Removable, Reusable', 'show_pieces', 'ddecor', 1, 150, 3, 10); 

INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('Peacock Urli Bowl', 'https://m.media-amazon.com/images/I/61W560eJKaL._SX679_.jpg', 'The Modern Soul Peacock Urli Bowl Home Decor. Makes for a great festive gift, wedding gift.', 'show_pieces', 'stylestop', 1, 800, 6, 4);

INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('Bamboo Plant', 'https://m.media-amazon.com/images/I/51goUkNZtgL.jpg', 'Two Layer Lucky Bamboo plant with Big Round Glass Pot and Colored Jelly Balls(Green). MATERIAL: Natural Plants & Glass Pot, POT COLOR: Transparent', 'plants', 'stylestop', 1, 200, 6, 1);

INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('Money Plant', 'https://m.media-amazon.com/images/I/61sThzjtVnL._SX679_.jpg', 'Good Luck Money Plant in White Square Aroez Ceramic Pot. Material: Natural Live Plant & Ceramic Pot, Qty: 1 (Plant with Pot), Pot Color: White, Pot ', 'plants', 'home_centre', 1, 300, 4, 8);

INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('Jade Plant ', 'https://m.media-amazon.com/images/I/71ntWbKvLFL._SX679_.jpg', 'Good Luck Jade Plant in White Round Dew Ceramic Pot. Material: Natural Live Plant & Ceramic Pot, Qty: 1 (Plant with Pot), Pot Color: White.', 'plants', 'ddecor', 1, 400, 3, 6);

INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('Bonsai plant', 'https://m.media-amazon.com/images/I/61mFkhVyJkL._SY879_.jpg', 'Indoor Real Bonsai Live Plants - 5 Year Old. It has the grandeur of a full grown tree, but can fit in the palm of your hand.', 'plants', 'stylestop', 1, 1200, 2, 3);

INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('Areca Palm', 'https://m.media-amazon.com/images/I/716U5ZRF3CL._SX679_.jpg', 'Areca Palm Air Purifier Natural Live Plant. These are one of the most attractive, durable and tolerant houseplants.', 'plants', 'home_centre', 1, 5000, 2, 9);

INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('Rose plant', 'https://m.media-amazon.com/images/I/518WDfe9oBS.jpg', 'Live Climbing Rose MR Lincoln Flower Plant With Pot - Decorative Outdoor Plant.Very easy to grow and care Perfect plant for outdoor garden', 'plants', 'ddecor', 1, 200, 1, 2);

INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('Pink Syngonium Plant', 'https://m.media-amazon.com/images/I/815SDOvfxhL._SY879_.jpg', 'Good Luck Pink Syngonium Plant in White Round Dew Ceramic Pot, Pink Leaves, White Pot, 1 Piece.Plant with Pot Height: 7 - 10 Inches', 'plants', 'stylestop', 1, 300, 4, 5);

INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('Dwarf Orange Plant ', 'https://m.media-amazon.com/images/I/412pTqhDjeL.jpg', 'Care Live Dwarf Orange Plant Tangerine (Santra).Low Maintenance. It Requires Less Care,so it can even Be Grown by your Kids.', 'plants', 'home_centre', 1, 400, 5, 7);

INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('Hibiscus Red -Flower Plant', 'https://m.media-amazon.com/images/I/412VEfH3j8L.jpg', 'Hibiscus Red -Flowering Healthy Live Plant with 6 Inches Fiber Pot (Real Flowering For Garden And Home).Low maintenance home plant', 'plants', 'ddecor', 1, 300, 2, 10);

INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('Cherry Fruit Plant', 'https://m.media-amazon.com/images/I/71yX3NMW-rL._SX679_.jpg', ' Live Sweet and Sour Barbados Cherry Fruit Plant.This cherry is sour when unripe and slightly sweet when fully ripe.', 'plants', 'stylestop', 1, 450, 1, 4);

INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('Wall lamp', 'https://m.media-amazon.com/images/I/51qSlehR-cL.jpg', 'Designer Turkish Glass Wall Lamp for Living & Home Decoration Lamp. Material : Glass and Metal fitting wall lamp', 'lighting', 'stylestop', 1, 500, 3, 1);

INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('Tree Lamp', 'https://m.media-amazon.com/images/I/61dkJfm3ECL._SX569_.jpg', 'Bonsai Led Desk Tree Lamp, Desk Table Decor Pearl LED Lights for Home,Bedroom, Indoor,Wedding Party,Decoration Touch Switch Battery Powered or USB Adapter (Pearl Node Lamp)', 'lighting', 'home_centre', 1, 1000, 2, 8);

INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('Floor Lamp ', 'https://m.media-amazon.com/images/I/71rHq64PqhL._SX569_.jpg', 'Double Shelf Gold Color Metal Floor Lamp with Double Shelf in Beige Color Oval Shape Shade for Living Room (Big)Pack of 1', 'lighting', 'ddecor', 1, 3000, 5, 6);

INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('Ceiling Lamp', 'https://m.media-amazon.com/images/I/61-onSWeFmL._SX569_.jpg', 'New Fancy Modern Ceiling Lamp for Living Room, Office,Bedroom Lamp with All Fixtures and Fitting Juicer3277. Light Source Type: Led, Size Name: Medium, Mounting Type: Double Circuit', 'lighting', 'stylestop', 1, 850, 7, 3);

INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('wall sticker lamp', 'https://m.media-amazon.com/images/I/51VI3MljFFL.jpg', 'Wall Sticker Home Decoration LED Lamp- Pack of 10 Pieces. Its Soft And Gentle Light Is Good For Your Eyes', 'lighting', 'home_centre', 1, 400, 6, 9);

INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('Cube wall light', 'https://m.media-amazon.com/images/I/41QRqc6Oj5L.jpg', ' Ice Cube Wooden Decorative Surface Mounted, Wall Light, Wall Sconce Decorative Wall Light for Home, Living Room, Bedroom Decoration (Pack of 1)', 'lighting', 'ddecor', 1, 550, 3, 2);

INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('String Led Light', 'https://m.media-amazon.com/images/I/515H1kgze5L._SX679_.jpg', 'Battery Operated 10 Hawaii Flower Fairy String Rice Led Light for Festivals and Many Occasions, Room, Home Decorations Lamps, Dressing Area, Safe for Kids and Birthday Gift (1 Pcs) (1.5 Meter)', 'lighting', 'stylestop', 1, 500, 5, 5);

INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('Table Lamp', 'https://m.media-amazon.com/images/I/710spbjxZFL._SY550_.jpg', 'Lighting Table Lamp Shade Empire, Table Night Lamps for Bedroom, Home Decoration Bedside Living Room, Hall Lighting, Home Decor Items with Khadi Shade - Off White, Pack of 1', 'lighting', 'home_centre', 1, 3200, 3, 7);

INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('Moon Lamp', 'https://m.media-amazon.com/images/I/61R2aQK02BS._SX569_.jpg', 'New Magnetic Levitating 3D Moon Lamp Wooden Base 14cm Night Lamp Floating Romantic Light Home Decoration for Bedroom', 'lighting', 'ddecor', 1, 12000, 4, 10);

INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id")
VALUES('Gate Lamp', 'https://m.media-amazon.com/images/I/61dT3IsAUeL._SX569_.jpg', 'Gate Light for Home Gate - Outdoor Lights for gate and Pillar - Waterproof Acrylic Warm White LED Lamp for Main Gate Light - Garden Patio Decoration.', 'lighting', 'stylestop', 1, 2000, 7, 4);
