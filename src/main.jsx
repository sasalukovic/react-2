import React from "react";
import ReactDOM from "react-dom/client";
// import StarRating from "./StarRating";
import App from "./App.jsx";
// import HowReactWorks from "./HowReactWorks";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    /> */}
    {/* <HowReactWorks /> */}
    <App />
  </React.StrictMode>
);
