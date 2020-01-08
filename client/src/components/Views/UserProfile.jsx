import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, FormLabel, Button, Paper, Input, InputLabel, Container, TextField } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  button: {
    background: 'linear-gradient(45deg, #00796b 30%, #43a047 90%)',
    borderRadius: 4,
    color: 'white',
    padding: theme.spacing(1),
    margin: '10px',
  },
  paper: {
    margin: theme.spacing(3),
    minWidth: 120,
    padding: theme.spacing(1),
    maxWidth: 700,
  }
}));


const UserProfile = () => {
  const classes = useStyles();
  return (
    <div>
      <Paper aria-labelledby="form-title" className={classes.paper}>
        <FormLabel className="formLabel" id="form-dialog-title"> Edit your bio </FormLabel>
          <TextField id="bio" label="Bio" type="bio" fullWidth />
          <Button className={classes.button} color="primary">Save</Button>
      </Paper>
    </div>
  )
}

export default UserProfile;