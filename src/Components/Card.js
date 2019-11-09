import React from "react"
import Book from "../Data/Book"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/Styles"
import { Link } from "react-router-dom"

const useStyles = makeStyles({
    card: {
        maxWidth: 300,
        borderRadius: 5,
        margin: 20
    },
    root: {
        flexGrow: 1
    }
});

const CardList = () =>{
    const classes = useStyles();
    const [spacing] = React.useState(8);

    return (
        <Grid container className={classes.root} spacing={10}>
        <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
            {Book.map((book, index)=>{
                return (
                    <Card className={classes.card}>
                        <Link to={`Detail/${index}`}>
                            <CardMedia
                            component="img"
                            alt={book.id}
                            height="400"
                            image={book.imgurl}/>
                        </Link>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {book.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {book.description}
                    </Typography>
                    </CardContent>
                    </Card>
                );
            })}
            </Grid>
            </Grid>
            </Grid>
       
    );
};

export default CardList;