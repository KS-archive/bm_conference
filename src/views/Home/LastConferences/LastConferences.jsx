import React, { Fragment } from 'react';
import { MainContainer, Header, Poster } from './LastConferences_styles';

export default () => (
  <Fragment>
    <Header>Poprzednie konferencje</Header>
    <MainContainer>
      <Poster src={`${__ROOT_URL__}/img/last_conferences/Plakat 2004.JPG` } />
      <Poster src={`${__ROOT_URL__}/img/last_conferences/Plakat 2006.JPG` } />
      <Poster src={`${__ROOT_URL__}/img/last_conferences/Plakat 2008.JPG` } />
      <Poster src={`${__ROOT_URL__}/img/last_conferences/Plakat 2010.JPG` } />
      <Poster src={`${__ROOT_URL__}/img/last_conferences/Plakat 2012.JPG` } />
      <Poster src={`${__ROOT_URL__}/img/last_conferences/Plakat 2014.JPG` } />
      <Poster src={`${__ROOT_URL__}/img/last_conferences/Plakat 2016.jpg` } />
    </MainContainer>
  </Fragment>
);
