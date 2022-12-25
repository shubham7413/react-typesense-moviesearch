import React from "react";
import { Highlight } from "react-instantsearch-dom";
import styled from "styled-components";
import { styled as muistyle } from "@mui/material/styles";
import LinksHighlight from "../linksHighlight";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Grid from "@mui/material/Unstable_Grid2";

import { CopyToClipboard } from "react-copy-to-clipboard";

const Item = muistyle(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const HitContainer = styled.div``;

const Title = styled.div``;
const Url = styled.div``;

const HitsContainer = styled.div``;

export function LinkHit(props) {
  const { hit } = props;

  return (
    <Stack margin="dense" sx={{ m: 0.5 }}>
      {/* Item 1
      <Item>Item 2</Item>
      <Item>Item 3</Item> */}

      <HitContainer>
        <Title>
          <Grid container spacing={1}>
            <Grid xs={8}>
              <LinksHighlight hit={hit} attribute="title" />
            </Grid>

            <Grid xs>
              <Button
                variant="outlined"
                startIcon={<OpenInNewIcon />}
                href={hit.url}
                target="_blank"
              >
                {/* Delete */}
                Open in New Tab
              </Button>
            </Grid>
            <Grid xs>
              <CopyToClipboard text={hit.url}>
                <Button
                  variant="outlined"
                  startIcon={<ContentCopyIcon />}
                  // href={hit.url}
                  onClick={() => {
                    navigator.clipboard.writeText(this.state.textToCopy);
                  }}
                  // target="_blank"
                >
                  {/* Delete */}
                  Copy Link
                </Button>
              </CopyToClipboard>
            </Grid>
          </Grid>
        </Title>
        {/* <Url>
        <LinksHighlight hit={hit} attribute="url" />
      </Url> */}
      </HitContainer>
    </Stack>
  );
}
