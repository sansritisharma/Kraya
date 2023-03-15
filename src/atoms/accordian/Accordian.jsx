import { useState } from "react";
import Icon from "../icon/Icon";

const Accordion = ({ title, children }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? <Icon classText="bx bxs-chevron-up"/> : <Icon classText="bx bxs-chevron-down"/>  }</div>
      </div>
      {isActive && <div className="accordion-content">{children}</div>}
    </div>
  );
};

export default Accordion;