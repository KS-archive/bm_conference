import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Container } from '../../utils/styledComponents';
import { Header, Section, Text, First, Second, Download, DownloadItem } from './Publication_styles';

export default () => (
  <Section>
    <Navbar activeIndex={2} />
    <Container>
      <Header>PUBLIKACJA</Header>
      <Text>
        <First>
          Artykuły zostaną opublikowane w Pracach Naukowych Uniwersytetu Ekonomicznego we Wrocławiu, które uzyskały 10 punktów na liście czasopism naukowych podanej przez Ministerstwo Nauki i Szkolnictwa Wyższego.
        </First>
        <Second>
          Artykuły należy przesłać na adres: badania.markt@ue.wroc.pl i załączyć w systemie SENIR, wybierając Prace Naukowe oznaczone jako: PN Badania marketingowe, red. K. Mazurek-Łopacińska, M. Sobocińska.
        </Second>
      </Text>
      <Download>
        <Header>Instrukcje wydawnicze i wymogi edytorskie:</Header>
        <a href="https://goo.gl/HxNi5d">
          <DownloadItem key="Item1">
            <i className="fa fa-download" aria-hidden="true" />
            Informacja o wymogach edytorskich
          </DownloadItem>
        </a>
        <a href="https://goo.gl/NsgCyJ">
          <DownloadItem key="Item1">
            <i className="fa fa-download" aria-hidden="true" />
            Szablon artykułu zgłaszanego do Prac Naukowych
          </DownloadItem>
        </a>
        <a href="https://goo.gl/tTi5aR">
          <DownloadItem key="Item1">
            <i className="fa fa-download" aria-hidden="true" />
            Instrukcja dotycząca edycji szablonu artykułu
          </DownloadItem>
        </a>
        <a href="https://goo.gl/uTtkZy">
          <DownloadItem key="Item1">
            <i className="fa fa-download" aria-hidden="true" />
            Instrukcja dotyczą zgłaszania artykułów do systemu SENIR
          </DownloadItem>
        </a>
      </Download>
    </Container>
  </Section>
);
