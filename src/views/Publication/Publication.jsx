import React from 'react';
import { Container } from '../../utils/styledComponents';
import { Header, Body, Section, Text, First, Second, Download, DownloadItem} from './Publication_styles';

export default () => (
  <Section>
  <Container>
      <Header>PUBLIKACJA</Header>
      <Text>
        <First>
          Artykuły zostaną opublikowane w Pracach Naukowych Uniwersytetu Ekonomicznego we Wrocławiu,
          które uzyskały 10 punktów na liście czasopism naukowych podanej przez
          Ministerstwo Nauki i Szkolnictwa Wyższego.
        </First>
        <Second>
          Artykuły należy przesłać na adres: badania.markt@ue.wroc.pl i załączyć w systemie SENIR,
           wybierając Prace Naukowe oznaczone jako: PN Badania marketingowe, red. K. Mazurek-Łopacińska, M. Sobocińska.
        </Second>
      </Text>

      <Download>
        <Header>Instrukcje wydawnicze i wymogi edytorskie:</Header>
        <a style={{ textDecoration: 'none' }} href="http://facebook.com"><DownloadItem key="Item1"><i className="fa fa-download" aria-hidden="true"></i>  Informacja o wymogach edytorskich</DownloadItem></a>
        <a style={{ textDecoration: 'none' }} href="http://facebook.com"><DownloadItem key="Item2"><i className="fa fa-download" aria-hidden="true"></i>  Szablon artykułu zgłaszanego do Prac Naukowych</DownloadItem></a>
        <a style={{ textDecoration: 'none' }} href="http://facebook.com"><DownloadItem key="Item3"><i className="fa fa-download" aria-hidden="true"></i>  Instrukcja dotycząca edycji szablonu artykułu</DownloadItem></a>
        <a style={{ textDecoration: 'none' }} href="http://facebook.com"><DownloadItem key="Item4"><i className="fa fa-download" aria-hidden="true"></i>  Instrukcja dotyczą zgłaszania artykułów do systemu SENIR</DownloadItem></a>
      </Download>

  </Container>
  </Section>
  );
