import React, { useState } from "react";

import { faqData } from "./data";
import "./styles.css";

const AccordionIndex = () => {
  const [selectedId, setSelectedId] = useState(null);

  const handleSelection = (id) => {
    setSelectedId(selectedId === id ? null : id);
  };

  return (
    <div className="wrapper">
      <div className="accordion">
        {faqData && faqData.length > 0 ? (
          faqData.map((item) => (
            <Accordion
              key={item.id}
              item={item}
              onSelection={handleSelection}
              selectedId={selectedId}
            />
          ))
        ) : (
          <div>No data found !</div>
        )}
      </div>
    </div>
  );
};

function Accordion({ item, onSelection, selectedId }) {
  const isOpen = selectedId === item.id;
  return (
    <div className="item">
      <div onClick={() => onSelection(item.id)} className="title">
        <h3>{item.question}</h3>
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && (
        <div
          className="content
      "
        >
          {item.answer}
        </div>
      )}
    </div>
  );
}

export default AccordionIndex;
