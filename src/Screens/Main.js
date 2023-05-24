import React from 'react';
import { Header } from '../Components/Header';
import { Body } from '../Components/Body';
import { Footer } from '../Components/Footer';
import { Container } from '../Styles/Main.Styles';

export const Main = () => {
  return (
    <>
        <Container>
            <Header />
            <Body />
            <Footer />  
        </Container>
    </>
  )
}
