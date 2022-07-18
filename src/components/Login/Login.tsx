import React from 'react';
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
type Inputs = {
  login: string,
  password: string,
};
export const Login = () => {

  const { register, control, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        render={({ field }) => <TextField {...field} label="login" variant="outlined" /> }
        name="login"
        control={control}
        defaultValue=""
      />
      <Controller
        render={({ field }) => <TextField {...field} type='password' label="password" variant="outlined" />}
        name="password"
        control={control}
        defaultValue=""
      />
      {errors.password && <span>This field is required</span>}
      {errors.login && <span>This field is required</span>}
      <Button variant="contained" endIcon={<LoginIcon />}>
        Enter
      </Button>
    </form>
  );
};

