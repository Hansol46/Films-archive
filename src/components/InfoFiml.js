import { Card, CardContent, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react'

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});


function InfoFilm({ idMovie }) {
    const [value, setValue] = useState([])
    const classes = useStyles();
    const APIurl = `http://www.omdbapi.com/?i=${idMovie}&apikey=1151f2b7`
    useEffect(() => {
        fetch(APIurl)
            .then(response => response.json())
            .then(result => setValue(result))
    },[])
    return (
        <div>
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        About movie:
                    </Typography>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Actors: {value.Actors}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        Runtime: {value.Runtime}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Movie info: {value.Plot}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
export default InfoFilm