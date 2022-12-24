import React from "react";
import { Highlight } from "react-instantsearch-dom";
import styled from "styled-components";
import LinksHighlight from "../linksHighlight";

const HitContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  margin: 2em 1em;
`;

const Title = styled.div`
  font-weight: black;
  font-size: 24px;
  margin-top: 10px;
  text-align: center;
`;
const Url = styled.div`
  font-weight: black;
  font-size: 24px;
  margin-top: 10px;
  text-align: center;
`;

const HitsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export function LinkHit(props) {
  const { hit } = props;

  return (
    <HitContainer>
      <Title>
        <LinksHighlight hit={hit} attribute="title" />
      </Title>
      <Url>
        <LinksHighlight hit={hit} attribute="url" />
      </Url>
    </HitContainer>
  );
}
