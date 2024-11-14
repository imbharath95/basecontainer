import React, { Suspense } from "react";
import "./App.scss";

const LeftNavComponent = React.lazy(() => import("LeftNav/LeftNav"));
const TopNavComponent = React.lazy(() => import("TopNav/TopNav"));

export default function () {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section>
        <TopNavComponent />
        <div className="flex">
          <LeftNavComponent />
        </div>
      </section>
    </Suspense>
  );
}
