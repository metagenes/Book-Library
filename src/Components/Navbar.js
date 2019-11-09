import React from "react"
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"
import { MenuItem} from "@material-ui/core"
import Search from "@material-ui/icons/Search"
import Typography from "@material-ui/core/Typography"
import InputBase from "@material-ui/core/InputBase"
import useStyles from "./NavbarStyle"

const Navbar = () => {
  const classes = useStyles();

  return (
    <>
  
    <MenuItem className={classes.menuItem}>
      All Categories <ArrowDropDownIcon /> 
    </MenuItem>

    <MenuItem className={classes.menuItem}>
      All Times <ArrowDropDownIcon />
    </MenuItem>
    <Typography className={classes.title} variant="h6" noWrap></Typography>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <Search />
        </div>
        <InputBase
          placeholder="Search..."
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
    
    </>
  );
};

export default Navbar;
