import React from "react"
import Book from "../Data/Book"
import { makeStyles } from "@material-ui/core/styles"
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography
} from "@material-ui/core"


const useStyles = makeStyles({
  card: {
    width: "100%",
    height: "100%"
  },
  root: {
    flexGrow: 1
  }
});

const Detail = props => {
  const index = props.match.params.index;
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
      <Dialog
        onClose={handleClose}
        aria-labelledby="edit"
        open={open}
      >
        <DialogTitle id="edit" onClose={handleClose}>
          Edit Data
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
      <Card className={classes.card}>
        <CardMedia
          component="img"
          alt={Book[index].id}
          height="400"
          image={Book[index].imgurl}
          title={Book[index].name}
        />
        <Button
          style={{ marginLeft: 1040, top: "-230px" }}
          variant="contained"
          color="default"  onClick={()=>{ alert('Book Removed')}}
        >
          Delete
        </Button>
        <Button
          style={{ marginLeft: 960, top: "-266px" }}
          variant="contained"
          color="default"
          onClick={handleClickOpen}
        >
          Edit
        </Button>
        <CardContent
          style={{
            height: "275px",
            marginLeft: 120
          }}
        >
          <br />
          <Typography gutterBottom variant="h4" component="h1">
            {Book[index].name}
          </Typography>
          <Typography
            style={{ width: "40%" }}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {Book[index].description}
          </Typography>
          <Avatar
            src={Book[index].imgurl}
            style={{
              width: 130,
              height: 150,
              borderRadius: 5,
              marginLeft: 900,
              top: "-310px"
            }}
          />
          <Button
            style={{ marginLeft: 910, top: "-180px" }}
            variant="contained"
            color="primary"
          >
            Borrow
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default Detail;
