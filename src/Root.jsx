import React, { memo, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import Detail from "./Detail";

export default memo(() => {
  return (
    <div>
      <Suspense fallback={<span>Загрузка...</span>}>
        <Routes>
          <Route path="/details/:name" element={<Detail />} />

          <Route path="/" exact={true} element={<App />} />
        </Routes>
      </Suspense>
    </div>
  );
});
