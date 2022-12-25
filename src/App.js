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

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const AppContainer = styled.div``;

function App() {
  return (
    <AppContainer>
      <CssBaseline />
      <Container maxWidth="lg">
        <h2>Links Search Fast</h2>
        <InstantSearch indexName="links" searchClient={searchClient}>
          <h4>Search Links</h4>
          <SearchBox />
          {/* <RefinementList attribute="url" /> */}
          <LinksHits />
          <Pagination />
        </InstantSearch>
      </Container>
    </AppContainer>
  );
}

export default App;
