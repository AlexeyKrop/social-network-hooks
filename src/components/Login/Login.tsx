import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {loginTC} from "../../bll/authorizationReducer";
import {useAppDispatch} from "../../bll/state/hooks";

type Inputs = {
  email: string,
  password: string,
};
export const Login = () => {
  const dispatch = useAppDispatch()
  const {register, control, handleSubmit, watch, formState: {errors}} = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => {
    let {email, password} = data
    dispatch(loginTC(email, password))
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email")} />
      <input type='password' {...register("password")} />
      <input type="submit"/>
    </form>
  );
};

