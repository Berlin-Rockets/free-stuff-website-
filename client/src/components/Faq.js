// STILL NEEDS LAYOUT ADJUSTMENTS

import React, { useState } from "react";
import { Data } from "./Data";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FiMinus, FiPlus } from "react-icons/fi";

const FaqSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  background: #f4f4f2;
`;
const Container = styled.div`
  position: absolute;
  top: 30%;
`;
const Wrap = styled.div`
  background: #495464;
  color: #f4f4f2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  h1 {
    padding: 2rem;
    font-size: 1.5rem;
  }
  span {
    margin-right: 1.5rem;
  }
`;
const Dropdown = styled.div`
  background: #e8e8e8;
  color: #495464;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #f4f4f2;
  border-top: 1px solid #f4f4f2;
  p {
    font-size: 1.5rem;
  }
`;
const Faq = () => {
  const [clicked, setClicked] = useState(false);
  const toggle = (index) => {
    if (clicked === index) {
      // if clicked question is already active, then close it
      return setClicked(null);
    }
    setClicked(index);
  };
  return (
    <IconContext.Provider value={{ color: "#EA5455", size: "25px" }}>
      <FaqSection>
        <Container>
          {Data.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h1>{item.question}</h1>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p>{item.answer}</p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      </FaqSection>
    </IconContext.Provider>
  );
};
export default Faq;
