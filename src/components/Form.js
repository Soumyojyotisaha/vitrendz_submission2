import React from 'react'
import bgImg from '../assets/img1.jpg';
import { useForm } from 'react-hook-form';

export default function Form() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);

    // console.log(watch('username'));
    
  return (
    <section>
        <div className="register">
            <div className="col-1">
                <h2>Sign In</h2>
                <span>Register yourself with the Best Org in VIT</span>

                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("Name")} placeholder='Name' />
                    <input type="text" {...register("Sex")} placeholder='Sex' />
                    <input type="text" {...register("Email-ID")} placeholder='Email-ID' />
                    <input type="text" {...register("Password")} placeholder='Password' />
                    <input type="text" {...register("Confirmpwd")} placeholder='Confirm Password' />
                    <input type="text" {...register("mobile", { required : true, maxLength: 10 })} placeholder='Mobile Number' />
                    {errors.mobile?.type === "required" && "Mobile Number is required"}
                    {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
                    
                    <button className='btn'>Sign In</button>
                </form>

            </div>
            <div className="col-2">
                <img src={bgImg} alt="" />
            </div>
        </div>
    </section>
  )
}
