import {  Button,Card,CardActions,CardContent,Grid,Typography, } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListFood = () => {
    const [foods, setFoods] = useState([]);

    const getFoods = async () => {
        const response = await axios.get("http://localhost:3000/foods");
        setFoods(response.data);
      }
    
      useEffect(()=>{
        getFoods();
      },[])
    return (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4">Book List For Consumers</Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              {foods.map((Food) => (
                <Grid item xs={4} key={Food.id}>
                  <Card>
                    <CardContent>
                    <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        {Food.food_category}
                      </Typography>
                      <Typography variant="h5" component="div">
                        {Food.food_name}
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {Food.food_price}
                      </Typography>
                      <Typography variant="body2">{Food.id}</Typography>
                    </CardContent>
                    <CardActions>
                    <Button component={Link} to={`/consumer/detail/${Food.id}`}>View Details</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      );
};

export default ListFood;