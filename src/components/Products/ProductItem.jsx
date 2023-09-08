import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/Dataprovider";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import "./productsStyles.css"


export const ProductItem = ({id, title, price, image,brand,category, description, cantidad}) => {
    
    const value = useContext(DataContext);
    const addCart= value.addCart;

    return(
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea >
                <Link to={`/productos/${id}`}>
                    <CardMedia component="img" height="180" image={image} alt={title}/>
                </Link>
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                        {title}
                    </Typography>
                    <Typography variant="h5" color="text.secondary">
                        <p>{brand} - {category}</p>
                        <p >${price}</p>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={() => addCart(id)}>
                    Añadir al carrito
                </Button>
            </CardActions>
            <CardActions>            
                <Button size="small" color="secondary"><Link to={`/productos/${id}`}>Ver detalles</Link></Button>
            </CardActions>
        </Card>
    )

}