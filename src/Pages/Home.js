import React from "react"
import clsx from "clsx"
import CardList from "../Components/Card"
import Carousel from "../Components/Carousel"
import {
  AppBar,
  CssBaseline,
  Drawer,
  Toolbar,
  IconButton
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu"
import Navbar from "../Components/Navbar"
import useStyles from "./HomeStyle"
import Sidebar from "../Components/Sidebar"


const Home = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Toolbar className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="black"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Navbar />
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <MenuIcon style={{ color: "white" }} />
          </IconButton>
        </div>
        <Sidebar />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        <Carousel />
        <h2 className={classes.h2}>List Book</h2>
        <CardList />
      </main>
    </Toolbar>
  );
};

export default Home;
