//rendering our result to the browser
import { getAPI } from "./API"; // import the api helper
import React from "react";

export const CustomComponent = () => {
  const [data, setData] = React.useState([]); // set state to hold the result

  //function below triggers the helper function
  const getData = () =>
    getAPI("", "").then((res) => {
      if (res.status === 200) {
        setData(res.data);
        console.log(data);
      } else {
        console.log(res);
      }
    });

  //this runs the getData trigger function as useEffect
  React.useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <h1>Temperature Summary</h1>
      <ul>
        {
          //maps out our result for rendering
          data.map((x: any) => (
            <li style={{ textAlign: "left" }}>{x.summary}</li>
          ))
        }
      </ul>
    </div>
  );
};
