import React from 'react';
import { Container } from '../../utils/styledComponents';
import { Header, Description, Bold, Table, Title, Row } from './Areas_styles';
import { colorPalette } from '../../utils/styles';

export default () => (
  <Container>
    <Header>IDEA KONFERENCJI I OBSZARY TEMATYCZNE</Header>
    <Description>
      Mamy zaszczyt i przyjemność zaprosić do wzięcia udziału w konferencji organizowanej przez
Katedrę Badań Marketingowych Uniwersytetu Ekonomicznego we Wrocławiu pt. „Badania
marketingowe – metody, trendy, zastosowania”, która odbędzie się w dniach 20-22 maja 2018
roku we Wrocławiu.
    </Description>
    <Description>
    Konferencja jest kontynuacją cyklicznych spotkań poświęconych problematyce badań
  marketingowych, które zostały zapoczątkowane na konferencji w 2004 roku.
    </Description>
    <Bold>Problematyka konferencji obejmuje następujące obszary i grupy zagadnień</Bold>
    <Table>
      <Title bgcolor={colorPalette.red}>Metody badania postaw i zachowań konsumentów</Title>
      <Row>Skale pomiaru postaw i preferencji konsumentów</Row>
      <Row>Metody sondażowe w badaniach zachowań konsumentów</Row>
      <Row>Eksperyment w badaniu reakcji konsumentów na bodźce marketingowe</Row>
      <Row>Etnografia w badaniach zachowań konsumentów</Row>
      <Row>Metody badania wpływu czynników rynkowych na zachowania konsumentów</Row>
      <Row>Podejście kulturowe w badaniu zachowań</Row>
      <Row>Badania zachowań w przestrzeni wirtualnej</Row>
      <Row>Pomiar satysfakcji i lojalności klientów</Row>
      <Row>Metody przewidywania zachowań konsumentów</Row>
    </Table>
    <Table>
      <Title bgcolor={colorPalette.yellow}>Metody badań związanych z marketingiem</Title>
      <Row>Analizy marketingowe służące formułowaniu strategii</Row>
      <Row>Design Thinking w kreowaniu innowacji rynkowych i społecznych</Row>
      <Row>Metody wielowymiarowe w badaniach segmentacji rynku</Row>
      <Row>Metody badania poziomu obsługi klienta</Row>
      <Row>Metody pomiaru wartości marki</Row>
      <Row>Pomiar efektywności działań marketingowych</Row>
    </Table>
    <Table>
      <Title bgcolor={colorPalette.blue}>Nowe technologie w badaniach marketingowych</Title>
      <Row>Badania z wykorzystaniem urządzeń elektronicznych</Row>
      <Row>Łączenie analiz finansowych z badaniami marketingowymi</Row>
      <Row>Big Data i metaanaliza w badaniach marketingowych</Row>
      <Row>Customer Intelligence w rozwoju badań marketingowych</Row>
      <Row>Triangulacja i hybrydyzacja w badaniach marketingowych</Row>
    </Table>

  </Container>

);
