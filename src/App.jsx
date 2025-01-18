import React from "react";
// import AccordionIndex from "./components/01-Accordion/AccordionIndex";
// import RandomColor from "./components/02-random-color/RandomColor";
import StarRating from "./components/03-star-rating/StarRating";

const App = () => {
  return (
    <div>
      {/* <AccordionIndex /> */}
      {/* <RandomColor /> */}
      <StarRating noOfStars={10} />
    </div>
  );
};

export default App;
