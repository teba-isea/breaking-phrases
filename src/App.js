// @ts-nocheck
import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Quote from './components/Quote';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top:1rem;
  flex-direction: column;
` ;

const Logo = styled.img`
  max-height:300px;
  max-width:300px;
`;

const Button = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family:  Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 1rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;

  :hover {
    cursor:pointer;
    background-size: 400px;
  }
`;

function App() {

  const [quote, setQuote] = useState({});

  const queryApi = async () => {
    try{
      const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const quote = await api.json()
    setQuote(quote[0]);
    }
    catch(e){
      alert(`Houston,We have a problem: ${e}`)
    }
  }

  useEffect( () => {
    queryApi()
  }, []);

  return (
    <Container>
      <Logo src="./logo.jpg"></Logo>
      <Quote
        quote={quote}
      />

      <Button
        onClick={queryApi}
      >
        Obtain Quote
      </Button>
    </Container>
  );
}

export default App;
