import React, { memo, useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default memo(() => {
  const params = useParams();
  const [, setLoading] = useState(false);
  const [data, setData] = useState();

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);

      const data = await fetch(
        `http://51.250.23.5:9005/api/v1/logs/${params?.name}`
      );

      const res = await data.text();

      setData(res?.replaceAll("\n", "<br />"));

      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, [params?.name]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return <div dangerouslySetInnerHTML={{ __html: data }} />;
});
