// @ts-nocheck
import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const QuoteContainer = styled.div`
  padding: 2rem;
  border-radius: 0.5rem;
  background-color: #fff;
  max-width: 650px;
  max-height:320px;
  margin: 1rem;

  @media (min-width: 992px) {
  }
  h2 {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    position: relative;
    padding-left: 4rem;

    &::before {
      content: open-quote;
      font-size: 6rem;
      color: black;
      position: absolute;
      left: -1rem;
      top: -2rem;
    }
  }
  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.1rem;
    font-weight: bold;
    text-align: right;
    color: #666;
    margin-top: 1rem;
  }
`;

const Frase = ({ quote }) => {
  return (
    <QuoteContainer>
      <h2>{quote.quote} </h2>
      <p>- {quote.author} </p>
    </QuoteContainer>
  );
};

Frase.propTypes = {
	quote: PropTypes.object.isRequired
};

export default Frase;
