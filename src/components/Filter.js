import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Checkbox, FormControlLabel, Typography } from "@mui/material";
import styled from "styled-components";

export default function Filter() {
  const [open, setOpen] = React.useState(true);
  const [open2, setOpen2] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };

  const Container = styled.div`
    width: 30%;
    background-color: #fff;
  `;

  return (
    <Container>
      <List
        sx={{ width: "100%", maxWidth: 350, bgcolor: "background.paper" }}
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            component="div"
            id="nested-list-subheader"
            style={{
              backgroundColor: "#009E72",
              color: "white",
              fontSize: "24px",
              fontWeight: 700,
            }}
          >
            Fitler
          </ListSubheader>
        }
      >
        <ListItemButton onClick={handleClick}>
        <ListItemText
            primary={
              <Typography variant="h6" component="h5">
                Plant Tipe
              </Typography>
            }
            sx={{
              fontWeight: "bold",
              fontSize: 30,
            }}
          />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <ListItemButton>
            <ListItemText primary="Inbox" />
            <FormControlLabel
              value="start"
              control={<Checkbox />}
              labelPlacement="start"
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Inbox" />
            <FormControlLabel
              value="start"
              control={<Checkbox />}
              labelPlacement="start"
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Inbox" />
            <FormControlLabel
              value="start"
              control={<Checkbox />}
              labelPlacement="start"
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Inbox" />
            <FormControlLabel
              value="start"
              control={<Checkbox />}
              labelPlacement="start"
            />
          </ListItemButton>
        </Collapse>
        <ListItemButton onClick={handleClick2}>
          <ListItemText
            primary={
              <Typography variant="h6" component="h5">
                Plant Tipe
              </Typography>
            }
            sx={{
              fontWeight: "bold",
              fontSize: 30,
            }}
          />
          {open2 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open2} timeout="auto" unmountOnExit>
          <ListItemButton>
            <ListItemText primary="Inbox" />
            <FormControlLabel
              value="start"
              control={<Checkbox />}
              labelPlacement="start"
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Inbox" />
            <FormControlLabel
              value="start"
              control={<Checkbox />}
              labelPlacement="start"
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Inbox" />
            <FormControlLabel
              value="start"
              control={<Checkbox />}
              labelPlacement="start"
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Inbox" />
            <FormControlLabel
              value="start"
              control={<Checkbox />}
              labelPlacement="start"
            />
          </ListItemButton>
        </Collapse>
      </List>
    </Container>
  );
}
