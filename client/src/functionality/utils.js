export async function queryExchange(queryPassed) {
    const response = await fetch("/api/query", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: queryPassed,
      }),
    }).catch((error) => {
      console.log(error);
    });
    const json = await response.json();
    //console.log(json);
    return json;
    // for select, data.fields gives the column details,
    // data.rows gives the list of rows, each list item
    // is an object that contains column name as the key and
    // cell value as the value
    //console.log(data);
  }

