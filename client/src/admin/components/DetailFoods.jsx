import {Button, Card, CardActions, CardContent, Grid, Typography,
  } from "@mui/material";
  import axios from "axios";
  import { useEffect, useState } from "react";
  import { useNavigate, useParams } from "react-router-dom";
  
  const DetailFoods = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [food, setFood] = useState();
  
    const getFood = async () => {
      const { data } = await axios.get(
        `http://localhost:3000/foods/${params.id}`
      );
      setFood(data);
    };
  
    const deleteFood = async () => {
      await axios.delete(`http://localhost:3000/foods/${params.id}`);
      navigate("/admin/list");
    };
  
    useEffect(() => {
      getFood();
    }, []);
  
    if (!food) {
      return <Grid>Loading...</Grid>;
    }
  
    return (
        <Card>
        <CardContent>
        <Typography
            sx={{ fontSize: 14 }}
            color="text.secondary"
            gutterBottom
          >
            {food.food_category}
          </Typography>
          <Typography variant="h5" component="div">
            {food.food_name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {food.food_price}
          </Typography>
          <Typography variant="body2">{food.id}</Typography>
        </CardContent>
        <CardActions>
        <Button color='error' onClick={() => deleteFood()}>Delete Food</Button>
        </CardActions>
      </Card>
    );
  };
  
  export default DetailFoods;
  