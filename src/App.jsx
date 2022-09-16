import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./App.module.css";

function App() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const data = await fetch(`http://51.250.108.249:9005/api/v1/projects`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      });

      const res = await data.json();

      setData(res);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  console.log(data);

  const listOfItems = data?.map((item) => {
    return (
      <div
        className={styles?.item}
        key={item?.name}
        onClick={() => {
          navigate(`/details/${item?.name}`);
        }}
      >
        <div className={styles?.["item-detail"]}>
          <span className={styles?.["item-field"]}>Name: {item?.name}</span>

          <span className={styles?.["item-field"]}>
            {" "}
            Repository:{" "}
            <a
              href={item?.repository}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              {item?.repository}
            </a>
          </span>

          <span className={styles?.["item-field"]}>Port: {item?.port}</span>
          <span className={styles?.["item-field"]}>Path: {item?.path}</span>
          <span className={styles?.["item-status"]}>
            Status: {item?.status}
          </span>
        </div>
      </div>
    );
  });

  return (
    <div className={styles.wrapperMain}>
      <div className={styles.main}>
        <h2 style={{ textAlign: "center" }}>Monitor</h2>
        {listOfItems}
      </div>
    </div>
  );
}

export default App;
