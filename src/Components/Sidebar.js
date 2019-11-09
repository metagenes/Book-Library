import React from "react"
import Button from "@material-ui/core/Button"
import CloseIcon from "@material-ui/icons/Close"
import Dialog from "@material-ui/core/Dialog"
import Grid from "@material-ui/core/Grid"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import MuiDialogActions from "@material-ui/core/DialogActions"
import MuiDialogContent from "@material-ui/core/DialogContent"
import MuiDialogTitle from "@material-ui/core/DialogTitle"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import useStyles from "./SidebarStyle"
import { Avatar } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(MuiDialogActions);

const Sidebar = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <div className="modal-addData">
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            Add Data
          </DialogTitle>
          <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="url"
            label="Url Image"
            type="character"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            type="character"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="status"
            label="Status"
            type="character"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="year"
            label="Year"
            type="integer"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="genre"
            label="Genre"
            type="character"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="desc"
            label="Description"
            type="character"
            fullWidth
          />
          </DialogContent>
          <DialogActions>
            <Button
              style={{ backgroundColor: "blue", color: "black" }}
              autoFocus
              onClick={handleClose}
            >
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <Grid container justify="center" alignItems="center">
        <Avatar src="https://www.logolynx.com/images/logolynx/03/039b004617d1ef43cf1769aae45d6ea2.png" alt="1" className={classes.bigAvatar} />
        <h2 className={classes.h2}>Yudi Prayoga Raharja</h2>
      </Grid>
      <List>
        <ListItem button>
          <ListItemText className={classes.listItem} primary="Explore" />
        </ListItem>
        <ListItem button>
          <ListItemText className={classes.listItem} primary="History" />
        </ListItem>
        <ListItem button>
          <ListItemText
            className={classes.listItem}
            primary="Add Book"
            onClick={handleClickOpen}
          />
        </ListItem>
      </List>
    </>
  );
};

export default Sidebar;
