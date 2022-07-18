import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

type Inputs = {
  login: string,
  password: string,
};
export const Login = () => {

  const {register, control, handleSubmit, watch, formState: {errors}} = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("login")} />
      <input type='password' {...register("password")} />
      <input type="submit"/>
    </form>
  );
};

