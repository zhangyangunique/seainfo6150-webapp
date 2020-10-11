import React, {useEffect, useState} from "react";
import { Switch, Route } from "react-router-dom";
import Article from "./Article/Article";
import DynamicArticle from "./DynamicArticle/DynamicArticle";
import { isEmpty } from "lodash";

function App() {
  const [fetchedData, setFetchedData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
			// put data fetching code here!
			const response = await fetch(
        "http://demo1390455.mockable.io/articles"
      );
			const responseJson = await response.json();
      setFetchedData(responseJson);
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);

  return isEmpty(fetchedData) ? null : (
    <div className="App">
      <Switch>
        <Route>
          <DynamicArticle article={Object.values(fetchedData)[1]} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
