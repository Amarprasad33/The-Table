import { Button, Grid, Input, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const CreateBook = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    await axios.post("http://localhost:8080/api", data);
    navigate("/admin/list");
  };

  return (
    <Grid>
      <Typography variant="h3">Create Book</Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <TextField label="Name" variant="outlined" {...register("name")} />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="price"
              variant="outlined"
              {...register("price")}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="author"
              variant="outlined"
              {...register("author")}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="publisher"
              variant="outlined"
              {...register("publisher")}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="language"
              variant="outlined"
              {...register("language")}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="pages"
              variant="outlined"
              {...register("pages")}
            />
          </Grid>
          <Grid item xs={12}>
            <Button component={Input} type="submit" color="success" variant="contained">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};

export default CreateBook;
