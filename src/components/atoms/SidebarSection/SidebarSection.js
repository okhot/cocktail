import React from "react";
import "./SidebarSection.css";

function SidebarSection({
  title,
  options,
  open,
  onOpen,
  onClosed,
  onOptionClicked,
}) {
  return (
    <div className="SideBar__category">
      <h4 onClick={open ? onClosed : onOpen}>
        {title} <span>{open ? "-" : "+"}</span>
      </h4>
      {open ? (
        options.map((option) => (
          <p key={option} onClick={() => onOptionClicked(option)}>
            {option}
          </p>
        ))
      ) : (
        <></>
      )}
    </div>
  );
}

export default SidebarSection;
