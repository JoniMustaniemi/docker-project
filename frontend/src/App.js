import React, { useEffect, useState } from "react";
import "./App.css";

const Loading = () => (
  <div className="Results">
    <p>Loading...</p>
  </div>
);

const ErrorDisplay = ({ message }) => (
  <div className="Results">
    <p>Error: {message}</p>
  </div>
);

const CompetitorsTable = ({ data }) => (
  <div className="Results">
    <h1>
      <u>Competitors Table</u>
    </h1>
    {data.length > 0 ? (
      <table className="Competitors-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Sex</th>
            <th>Background</th>
            <th>Interesting Fact</th>
          </tr>
        </thead>
        <tbody>
          {data.map((competitor) => (
            <tr key={competitor.competitorId}>
              <td>{competitor.competitorId}</td>
              <td>{competitor.name}</td>
              <td>{competitor.age}</td>
              <td>{competitor.sex}</td>
              <td>{competitor.background}</td>
              <td>{competitor.interestingFact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <p>No data available.</p>
    )}
  </div>
);

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8080/";

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Network response was not ok");

        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return (
      <>
        <Loading />
      </>
    );
  if (error)
    return (
      <>
        <ErrorDisplay message={error} />
      </>
    );

  return (
    <div className="App">
      <CompetitorsTable data={data} />
    </div>
  );
};

export default App;
