import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';


import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';



const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    recipeName: "",
    recipeType: "",
    instructions: "",
    favorite: false,
    imageLocation: "",
    keywords: "",
    ingredients: "",
  });

  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();


  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Adding a Recipe</Typography>
        <TextField
          name="recipeName"
          variant="outlined"
          label="Recipe Name"
          fullWidth
          value={postData.recipeName}
          onChange={(e) =>
            setPostData({ ...postData, recipeName: e.target.value })
          }
        />

        <TextField
          name="recipeType"
          variant="outlined"
          label="Recipe Type"
          fullWidth
          value={postData.recipeType}
          onChange={(e) =>
            setPostData({ ...postData, recipeType: e.target.value })
          }
        />

        <TextField
          name="instructions"
          variant="outlined"
          label="Instructions"
          fullWidth
          value={postData.instructions}
          onChange={(e) =>
            setPostData({ ...postData, instructions: e.target.value })
          }
        />

        <TextField
          name="keywords"
          variant="outlined"
          label="Keywords"
          fullWidth
          value={postData.keywords}
          onChange={(e) =>
            setPostData({ ...postData, keywords: e.target.value })
          }
        />

        <TextField
          name="imageLocation"
          variant="outlined"
          label="Image Location"
          fullWidth
          value={postData.imageLocation}
          onChange={(e) =>
            setPostData({ ...postData, imageLocation: e.target.value })
          }
        />
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>

        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
