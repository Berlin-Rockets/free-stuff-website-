import { useState } from "react";
import { faqs } from "./Data";
import AccordionItem from "./AccordionItem";
import "./Accordion.css";

const Accordion = () => {
  const [clicked, setClicked] = useState("0");

  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };

  return (
    <div className="container">
      <div class="section-head col-sm-12">
        <h4>
          <span>Frequently Asked Questions</span>
        </h4>
        <ul className="accordion">
          {faqs.map((faq, index) => (
            <AccordionItem
              onToggle={() => handleToggle(index)}
              active={clicked === index}
              key={index}
              faq={faq}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Accordion;
