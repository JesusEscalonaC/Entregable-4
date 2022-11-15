import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useForm} from 'react-hook-form';

   const initialValues = {
      first_name: "",
      last_name:"",
      email:"",
      birthday:"",
      password:""
   }
   const UsersForm = ({getUsers, userSelected, deselectUser}) => {

    const {handleSubmit, register, reset} = useForm();
    
    useEffect(() => {
      if (userSelected) {
        reset(userSelected);
      } else {
        reset(initialValues);
      }
    }, [userSelected])

    const submit = (data) => {
      if (userSelected) {
         axios
           .put(
             `http://users-crud1.herokuapp.com/users/${userSelected.id}/`,
             data
           )
           .then(() => {
             getUsers();
             deselectUser();
             reset(initialValues);
           })
           
       } else {
        axios
             .post('http://users-crud1.herokuapp.com/users/', data)
             .then(() => getUsers())
             .catch((error) => console.log(error.response?.data));
             reset(initialValues);
    }
    } 
    return (
      <div className='form'>
        <form className='form-container' onSubmit={handleSubmit(submit)}>
      
        <div className='input-container'>
          <input  placeholder='First name' {...register("first_name")} type="text" id='firstName' />
        </div>

        <div className='input-container'>
          <input placeholder='Last name' {...register("last_name")} type="text" id='lastName' />
        </div>
        
        <div className='input-container'>
          <input placeholder='Email' {...register("email")} type="email" id='email' />
        </div>

        <div className='input-container'>
          <input placeholder='Password' {...register("password")} type="password" id='password' />
        </div>

        <div className='input-container'>
          <input placeholder='Birthday' {...register("birthday")} type="date" id='birthday' />
        </div>
        <button className='submit'>submit</button>
        </form>
        </div>
    );
};

export default UsersForm;