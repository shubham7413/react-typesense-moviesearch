import React from "react";
import { connectHits } from "react-instantsearch-core";
import styled from "styled-components";
import { styled as muistyle } from "@mui/material/styles";
import { LinkHit } from "../linkHit";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

const Item = muistyle(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const HitsContainer = styled.div``;

function MoviesHits({ hits }) {
  return (
    <Box sx={{ width: "100%" }}>
      <HitsContainer>
        {hits.map((hit) => (
          <LinkHit key={hit.ObjectID} hit={hit} />
        ))}
      </HitsContainer>
    </Box>
  );
}

export default connectHits(MoviesHits);
