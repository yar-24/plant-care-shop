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
  const [open3, setOpen3] = React.useState(true);
  const [open4, setOpen4] = React.useState(true);
  const [open5, setOpen5] = React.useState(true);
  const [open6, setOpen6] = React.useState(true);
  const [open7, setOpen7] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };
  const handleClick3 = () => {
    setOpen3(!open3);
  };
  const handleClick4 = () => {
    setOpen4(!open4);
  }; 
  const handleClick5 = () => {
    setOpen5(!open5);
  }; 
  const handleClick6 = () => {
    setOpen6(!open6);
  };
  const handleClick7 = () => {
    setOpen7(!open7);
  };

  const Container = styled.div`
    width: 25%;
    background-color: #fff;
    margin-top: 20px;
    display: block;
  `;

  return (
    <Container>
      <List
        sx={{ width: '100%', maxWidth: 300, bgcolor: "background.paper" }}
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
            Filter
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
            <ListItemText primary="Flowering" />
            <FormControlLabel
              value="start"
              control={<Checkbox />}
              labelPlacement="start"
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Ferns" />
            <FormControlLabel
              value="start"
              control={<Checkbox />}
              labelPlacement="start"
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Cacti & succulents" />
            <FormControlLabel
              value="start"
              control={<Checkbox />}
              labelPlacement="start"
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Palms & trees" />
            <FormControlLabel
              value="start"
              control={<Checkbox />}
              labelPlacement="start"
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Bamboo & grasses" />
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
                Environment
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
            <ListItemText primary="Indoor" />
            <FormControlLabel
              value="start"
              control={<Checkbox />}
              labelPlacement="start"
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Outdoor" />
            <FormControlLabel
              value="start"
              control={<Checkbox />}
              labelPlacement="start"
            />
          </ListItemButton>
        </Collapse>
        <ListItemButton onClick={handleClick3}>
          <ListItemText
            primary={
              <Typography variant="h6" component="h5">
                Plant Height
              </Typography>
            }
            sx={{
              fontWeight: "bold",
              fontSize: 30,
            }}
          />
          {open3 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open3} timeout="auto" unmountOnExit>
          <ListItemButton>
            <ListItemText primary="Tall / 1m-2.8m" />
            <FormControlLabel
              value="start"
              control={<Checkbox />}
              labelPlacement="start"
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Medium / 50cm-1m" />
            <FormControlLabel
              value="start"
              control={<Checkbox />}
              labelPlacement="start"
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Small / 15-50cm" />
            <FormControlLabel
              value="start"
              control={<Checkbox />}
              labelPlacement="start"
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Tiny / 0-15cm" />
            <FormControlLabel
              value="start"
              control={<Checkbox />}
              labelPlacement="start"
            />
          </ListItemButton>
        </Collapse>
        <ListItemButton onClick={handleClick4}>
          <ListItemText
            primary={
              <Typography variant="h6" component="h5">
                Benefit
              </Typography>
            }
            sx={{
              fontWeight: "bold",
              fontSize: 30,
            }}
          />
          {open4 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open4} timeout="auto" unmountOnExit>
          <ListItemButton>
            <ListItemText primary="Air purifier" />
            <FormControlLabel
              value="start"
              control={<Checkbox />}
              labelPlacement="start"
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Easy care" />
            <FormControlLabel
              value="start"
              control={<Checkbox />}
              labelPlacement="start"
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Child and pet friendly" />
            <FormControlLabel
              value="start"
              control={<Checkbox />}
              labelPlacement="start"
            />
          </ListItemButton>
        </Collapse>
        <ListItemButton onClick={handleClick5}>
          <ListItemText
            primary={
              <Typography variant="h6" component="h5">
                Product tipe
              </Typography>
            }
            sx={{
              fontWeight: "bold",
              fontSize: 30,
            }}
          />
          {open5 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open5} timeout="auto" unmountOnExit>
          <ListItemButton>
            <ListItemText primary="Pots" />
            <FormControlLabel
              value="start"
              control={<Checkbox />}
              labelPlacement="start"
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Plants " />
            <FormControlLabel
              value="start"
              control={<Checkbox />}
              labelPlacement="start"
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Bundles " />
            <FormControlLabel
              value="start"
              control={<Checkbox />}
              labelPlacement="start"
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Tools & accessories " />
            <FormControlLabel
              value="start"
              control={<Checkbox />}
              labelPlacement="start"
            />
          </ListItemButton>
        </Collapse>
        <ListItemButton onClick={handleClick6}>
          <ListItemText
            primary={
              <Typography variant="h6" component="h5">
                Prices
              </Typography>
            }
            sx={{
              fontWeight: "bold",
              fontSize: 30,
            }}
          />
          {open6 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open6} timeout="auto" unmountOnExit>
          <ListItemButton>
            <ListItemText primary="10 - 50K " />
            <FormControlLabel
              value="start"
              control={<Checkbox />}
              labelPlacement="start"
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="50 - 100K " />
            <FormControlLabel
              value="start"
              control={<Checkbox />}
              labelPlacement="start"
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="100 - 500K" />
            <FormControlLabel
              value="start"
              control={<Checkbox />}
              labelPlacement="start"
            />
          </ListItemButton>
        </Collapse>
        <ListItemButton onClick={handleClick7}>
          <ListItemText
            primary={
              <Typography variant="h6" component="h5">
                Sale
              </Typography>
            }
            sx={{
              fontWeight: "bold",
              fontSize: 30,
            }}
          />
          {open7 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open7} timeout="auto" unmountOnExit>
          <ListItemButton>
            <ListItemText primary="Discounted items" />
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
