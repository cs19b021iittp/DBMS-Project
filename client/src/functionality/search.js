import { queryExchange } from "./utils";

export async function searchFunction(
  searchString,
  categories,
  brands,
  priceRange,
  sortPrice
) {
  console.log("Inside the search function");
  console.log("searchString");
  console.log(searchString);
  console.log("categories");
  console.log(categories);
  console.log("brands");
  console.log(brands);
  console.log("priceRange");
  console.log(priceRange);
  console.log("sortPrice");
  console.log(sortPrice);
  searchString = searchString.toLowerCase();

  var queryString = 'SELECT * FROM "products" ';

  // for ( let i = 0; i<categories.length; i++ ) {
  //   console.log(categories[i])
  // }

  if (categories !== null && categories.length > 0) {
    var categoryString = "";
    for (var i = 0; i < categories.length; i++) {
      categoryString = categoryString + "'" + categories[i] + "',";
    }
    categoryString = categoryString.slice(0, -1);
    if (queryString.includes("WHERE ")) {
      queryString += " AND ";
      queryString += " category IN (" + categoryString + ")";
    } else {
      queryString += " WHERE category IN (" + categoryString + ")";
    }
  }
  if (brands !== null && brands.length > 0) {
    var brandString = "";
    for (var i = 0; i < brands.length; i++) {
      brandString = brandString + "'" + brands[i] + "',";
    }
    brandString = brandString.slice(0, -1);
    if (queryString.includes("WHERE ")) {
      queryString += " AND ";
      queryString += " brand IN (" + brandString + ")";
    } else {
      queryString += " WHERE brand IN (" + brandString + ")";
    }
  }
  if (priceRange !== null && priceRange !== 0) {
    if (queryString.includes("WHERE ")) {
      queryString += " AND ";
    } else {
      queryString += " WHERE ";
    }
    if (priceRange === 1) {
      queryString += " price < 1000";
    } else if (priceRange === 2) {
      queryString += " price >= 1000 AND price < 5000";
    } else if (priceRange === 3) {
      queryString += " price >= 5000 AND price < 10000";
    } else if (priceRange === 4) {
      queryString += " price > 10000";
    }
  }

  // var productIds = new Set();
  // var category = ``;
  // var brand = ``;
  // if (searchString.includes("furniture")) category = `'furniture',`;
  // if (searchString.includes("lighting")) category = category + `'lighting',`;
  // if (searchString.includes("plants")) category = category + `'plants',`;
  // if (searchString.includes("show_pieces"))
  //   category = category + `'show_pieces',`;
  // if (category != "") category = "(" + category.slice(0, -1) + ")";

  // if (searchString.includes("home_centre")) brand = `'home_centre',`;
  // if (searchString.includes("ddecor")) brand = brand + `'ddecor',`;
  // if (searchString.includes("stylestop")) brand = brand + `'stylestop',`;
  // if (brand != "") brand = "(" + brand.slice(0, -1) + ")";

  // if (category != "" && brand != "")
  //   queryString =
  //     queryString +
  //     ` WHERE "category" IN ` +
  //     category +
  //     ` AND "brand" IN` +
  //     brand;
  // else if (category != "")
  //   queryString = queryString + ` WHERE "castegory" IN ` + category;
  // else if (brand != "")
  //   queryString = queryString + ` WHERE "brand" IN ` + brand;

  if (sortPrice !== null && sortPrice !== "") {
    sortPrice = sortPrice === "decreasing" ? `DESC ` : `ASC `;
    var sortPriceString = ` ORDER BY price ${sortPrice}`;
    queryString += sortPriceString;
  }

  queryString = queryString + `;`;

  console.log("Query String");
  console.log(queryString);

  /**
   * if any of the categories or brand names are mentioned, then we apply that filter on the search
   * if no category or brand is mentioned, then we apply the search on all the products
   * then we use the remaining keywords and search the names of the products that
   * then we search for these keywords in the description and the name of the product and display them as fuzzy search - optional
   *
   * The idea is to apply the above logic and design 1 SQL query - send it as a post request,
   * extract only the product ids from the response and return them
   * then use the product ids in the front end to get the details of the products
   */

  const result = await queryExchange(queryString);
  console.log("in navbar", result);

  // perform fuzzy search here on 'result'
  // For a fuzzy search, we check the item names and their descriptions for any of the keywords

  var searchResults = result.rows;
  var finalSearchResults = [];
  var searchKeywords = searchString.toLowerCase().split(" ");

  if (searchKeywords.length > 0 && searchResults.length > 0) {
    console.log("searchKeywords", searchKeywords);

    for (var i = 0; i < searchKeywords.length; i++) {
      for (var j = 0; j < searchResults.length; j++) {
        console.log("searchResults[j].name", searchResults[j].name);
        console.log(
          "searchResults[j].description",
          searchResults[j].description
        );

        if (
          searchResults[j].name.toLowerCase().search(searchKeywords[i]) !==
            -1 ||
          searchResults[j].description
            .toLowerCase()
            .search(searchKeywords[i]) !== -1
        ) {
          finalSearchResults.push(searchResults[j]);
        }
      }
    }
  }

  console.log("Final result after fuzzy search if applicable");
  console.log(finalSearchResults);
  sessionStorage.setItem("search_results", JSON.stringify(finalSearchResults));
  return;
}
