import logo from "./logo.svg";
import "./App.css";

import styled from "styled-components";
import {
  InstantSearch,
  Pagination,
  RefinementList,
  SearchBox,
} from "react-instantsearch-dom";
import { searchClient } from "./typesenseAdapter";
import LinksHits from "./components/linksHits";
import "instantsearch.css/themes/satellite.css";

const AppContainer = styled.div``;

function App() {
  return (
    <AppContainer>
      <h2>React/Typesense Movies InstantSearch</h2>
      <InstantSearch indexName="links" searchClient={searchClient}>
        <h4>Search Movies</h4>
        <SearchBox />
        <RefinementList attribute="title" />
        <LinksHits />
        <Pagination />
      </InstantSearch>
    </AppContainer>
  );
}

export default App;
