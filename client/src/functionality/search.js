import { queryExchange } from "./utils";

export async function searchFunction(searchString) {
  console.log("Inside the search function");
  console.log(searchString);
  searchString = searchString.toLowerCase();

  var queryString = 'SELECT * FROM "products"';
  var productIds = new Set();
  var category = ``;
  var brand = ``;
  if (searchString.includes("furniture")) category = `'furniture',`;
  if (searchString.includes("lighting")) category = category + `'lighting',`;
  if (searchString.includes("plants")) category = category + `'plants',`;
  if (searchString.includes("show_pieces"))
    category = category + `'show_pieces',`;
  if (category != "") category = "(" + category.slice(0, -1) + ")";

  if (searchString.includes("home_centre")) brand = `'home_centre',`;
  if (searchString.includes("ddecor")) brand = brand + `'ddecor',`;
  if (searchString.includes("stylestop")) brand = brand + `'stylestop',`;
  if (brand != "") brand = "(" + brand.slice(0, -1) + ")";

  if (category != "" && brand != "")
    queryString =
      queryString +
      ` WHERE "category" IN ` +
      category +
      ` AND "brand" IN` +
      brand;
  else if (category != "")
    queryString = queryString + ` WHERE "category" IN ` + category;
  else if (brand != "")
    queryString = queryString + ` WHERE "brand" IN ` + brand;

  queryString = queryString + `;`;
  //queryString = queryString + ' WHERE LOWER(product_name) LIKE \'%' + searchString + '%\''

  //var searchKeywords = searchString.split(" ");

  console.log("Query String");
  console.log(queryString);
  //console.log(searchKeywords)
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
  console.log('in navbar', result.rows);

  // Assign value to a key
  sessionStorage.setItem("search_results", JSON.stringify(result.rows));
  // Access value associated with the key
  

  


}
/* const searchValue = "blue sofa ddecor stylestop";
const productList = searchFunction(searchValue);
console.log(productList); */
