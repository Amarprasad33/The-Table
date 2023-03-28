import {  Button,Card,CardActions,CardContent,Grid,Typography, } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListFoods = () => {
    const [foods, setFoods] = useState([]);

    const getFoods = async () => {
      const { data } = await axios.get("http://localhost:8080/api");
      setFoods(data);
    }
  
    const postFoods = async () => {
      const postData = {
        "name": "Thoola masala",
        "price": 5699,
        "category": "main",
        "avaliable": true,
        "description": "Grilled Thoolas in a luscious tomato-based spiced curry sauce.",
        "image": "https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      };
      const { data } = await axios.post("http://localhost:8080/api", postData);
      setFoods(data);
    }
  
    useEffect(() => {
      getFoods();
      postFoods();
    }, [])


    return (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4">Food List</Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              {foods.map((Food) => (
                <Grid item xs={4} key={Food._id}>
                  <Card>
                    <CardContent>
                    <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        {Food.category}
                      </Typography>
                      <Typography variant="h5" component="div">
                        {Food.name}
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {Food.price}
                      </Typography>
                      <Typography variant="body2">{Food._id}</Typography>
                    </CardContent>
                    <CardActions>
                    <Button component={Link} to={`/admin/detail/${Food.id}`}>View Details</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      );
};

export default ListFoods;