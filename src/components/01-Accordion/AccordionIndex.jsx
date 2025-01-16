import React, { useState } from "react";

import { faqData } from "./data";
import "./styles.css";

const AccordionIndex = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const toggleMultipleSelection = () => {
    setEnableMultiSelection((prev) => !prev);
    console.log(enableMultiSelection);
  };

  const handleSingleSelection = (id) => {
    setSelectedId(selectedId === id ? null : id);
  };

  const handleMultiSelection = (currentId) => {
    setMultiple((prev) =>
      prev.includes(currentId)
        ? prev.filter((id) => id !== currentId)
        : [...prev, currentId]
    );
  };

  console.log(selectedId, multiple);

  return (
    <div className="wrapper">
      <button onClick={toggleMultipleSelection}>
        {enableMultiSelection
          ? "Disable Multi Selection"
          : "Enable Multi Selection"}
      </button>
      <div className="accordion">
        {faqData && faqData.length > 0 ? (
          faqData.map((item) => (
            <Accordion
              key={item.id}
              item={item}
              onSingleSelection={handleSingleSelection}
              selectedId={selectedId}
              onMultiSelection={handleMultiSelection}
              enableMultiSelection={enableMultiSelection}
              multiple={multiple}
            />
          ))
        ) : (
          <div>No data found !</div>
        )}
      </div>
    </div>
  );
};

function Accordion({
  item,
  onSingleSelection,
  selectedId,
  onMultiSelection,
  enableMultiSelection,
  multiple,
}) {
  const isSingleOpen = selectedId === item.id; // Check for single selection
  const isMultiOpen = multiple.includes(item.id); // Check for multi-selection

  return (
    <div className="item">
      <div
        onClick={
          () =>
            enableMultiSelection
              ? onMultiSelection(item.id) // Directly invoke onMultiSelection
              : onSingleSelection(item.id) // Invoke onSingleSelection for single mode
        }
        className="title"
      >
        <h3>{item.question}</h3>
        <span>
          {enableMultiSelection
            ? isMultiOpen
              ? "-"
              : "+"
            : isSingleOpen
            ? "-"
            : "+"}
        </span>
      </div>

      {enableMultiSelection && isMultiOpen && (
        <div className="content">{item.answer}</div>
      )}

      {!enableMultiSelection && isSingleOpen && (
        <div className="content">{item.answer}</div>
      )}
    </div>
  );
}

export default AccordionIndex;
