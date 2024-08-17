import React, { useState } from 'react';
import { TbSocial } from 'react-icons/tb';
import { BsShare } from 'react-icons/bs';
import { useForm } from "react-hook-form";
import TextInput from '../components/TextInput';
import CustomButton from '../components/CustomButton';
import BgImg from '../assets/img.jpeg';
import Loading from '../components/Loading';
import { AiOutlineInteraction } from 'react-icons/ai';
import { ImConnection } from 'react-icons/im';
import { Link } from 'react-router-dom';

const Register = () => {
  
  const [errMsg, setErrMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  

  const { register, handleSubmit, getValues, formState: { errors } } = useForm({ mode: "onChange" });
  
  const onSubmit = async (data) => {
      
  };

  return (
    <div className='bg-bgColor w-full h-[100vh] flex items-center p-6'>
      <div className='w-full mf:w-2/3 h-fit lg:h-full 2xl:h-5/6 py-6 lg:py-0 flex flexp-row-reverse bg-primary rounded-xl overflow-hidden shadow-xl'>
        {/* Left  */}
        <div className='hidden lg:flex w-1/2 h-full flex-col items-center justify-center bg-blue'>
          <div className='relative w-full flex items-center justify-center'>
            <img src={BgImg} alt="BgImg" className='w-48 2xl:w-64 h-48 2xl:h-64 rounded-full object-cover' />
            <div className='absolute flex items-center gap-1 bg-white right-10 top-10 py-2 px-5 rounded-full'>
              <BsShare size={14} />
              <span className='text-xs font-medium'>Share</span>
            </div>
            <div className='absolute flex items-center gap-1 bg-white left-10 top-6 py-2 px-5 rounded-full'>
              <ImConnection />
              <span className='text-xs font-medium'>Connect</span>
            </div>
            <div className='absolute flex items-center gap-1 bg-white left-12 bottom-6 py-2 px-5 rounded-full'>
              <AiOutlineInteraction />
              <span className='text-xs font-medium'>Interact</span>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className='w-full lg:w-1/2 h-full p-6 2xl:px-20 flex flex-col justify-center'>
          <div className='w-full flex gap-2 items-center mb-6'>
            <div className='p-2 bg-[#065ad8] rounded text-white'>
              <TbSocial />
            </div>
            <span className='text-2xl text-[#065ad8] font-semibold'>
              SocialMedia
            </span>
          </div>
          <p className='text-ascent-1 text-base font-semibold'>Create your account</p>

          <form className='py-4 flex flex-col gap-5' >
            <div className='w-full flex flex-col lg:flex-row gap-1 md:gap-2'>
              <TextInput
                name="firstName"
                placeholder="First Name"
                label="First Name"
                type="text"
                register={register("firstName", { required: "First Name is required" })}
                styles="w-full rounded-full"
                labelStyles='ml-2'
                error={errors.firstName ? errors.firstName.message : ""}
              />
              <TextInput
                name="lastName"
                placeholder="Last Name"
                label="Last Name"
                type="text"
                register={register("lastName", { required: "Last Name is required" })}
                styles="w-full rounded-full"
                labelStyles='ml-2'
                error={errors.lastName ? errors.lastName.message : ""}
              />
            </div>
            <TextInput
              name="email"
              placeholder="Email Address"
              label="Email Address"
              type="email"
              register={register("email", { required: "Email Address is required" })}
              styles="w-full rounded-full"
              labelStyles='ml-2'
              error={errors.email ? errors.email.message : ""}
            />

            <div className='w-full flex flex-col lg:flex-row gap-1 md:gap-2'>
              <TextInput
                name="password"
                placeholder="Password"
                label="Password"
                type="password"
                register={register("password", { required: "Password is required" })}
                styles="w-full rounded-full"
                labelStyles='ml-2'
                error={errors.password ? errors.password.message : ""}
              />
              <TextInput
                name="cpassword"
                placeholder="Confirm Password"
                label="Confirm Password"
                type="password"
                register={register("cpassword", {
                  validate: (value) => value === getValues("password") || "Passwords do not match",
                  required: "Password is required"
                })}
                styles="w-full rounded-full"
                labelStyles='ml-2'
                error={errors.cpassword ? errors.cpassword.message : ""}
              />
            </div>

            {errMsg && (
              <span className={`text-sm ${errMsg.status === "failed" ? "text-[#f64949fe]" : "text-[#2ba150fe]"}`}>
                {errMsg?.message}
              </span>
            )}

            {isSubmitting ? <Loading /> :
              <CustomButton
                type="submit"
                containerStyles='inline-flex justify-center rounded-md bg-blue px-8 py-3 font-medium text-white outline-none'
                title='Register'
              />
            }
          </form>

          <p className='text-ascent-2 text-sm text-center'>
            Already have an account?
            <Link to='/login' className='text-[#065ad8] font-semibold ml-1 cursor-pointer'>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
