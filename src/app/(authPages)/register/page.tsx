'use client'; 
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";

const Register = () => {
    const [authState, setauthState] = useState<AuthStateType>({
        name: "",
        username:"",    
        email:"",
        password: "",
        password_confirmation:"",

    })

    const submit = (event:React.FormEvent) => {
        event.preventDefault();
        console.log('the auth state is', authState)
    }
    
  return (
    <div className="bg-background">
      <div className="h-screen w-screen flex justify-center items-center">

        <div className="w-full md:w-1/3 mx-2 bg-muted p-6 rounded-lg">
            <div className="flex justify-center">
                <Image src="/images/logo.svg" width={50} height={50} alt="Logo" />
            </div>
            <h1 className="text-2xl font-bold">Register</h1>
            <p>wellcome to the threads</p>
        <form onSubmit={submit}>
            <div  className="mt-5">
                <label htmlFor="name">Name</label>
                <Input type="text" placeholder="enter your name" id="name" onChange={(e) => setauthState({...authState, name:e.target.value})} />
            </div>

            <div  className="mt-5">
                <label htmlFor="username">Username</label>
                <Input type="text" placeholder="enter your unique username" id="username" onChange={(e) => setauthState({...authState, username:e.target.value})} />
            </div>

            <div  className="mt-5">
                <label htmlFor="email">Email</label>
                <Input type="email" placeholder="enter your email" id="email" onChange={(e) => setauthState({...authState, email:e.target.value})} />
            </div>

            <div  className="mt-5">
                <label htmlFor="password">Password</label>
                <Input type="password" placeholder="enter your password" id="password" onChange={(e) => setauthState({...authState, password:e.target.value})}/>
            </div>

            <div  className="mt-5">
                <label htmlFor="cpassword">Confirm Password</label>
                <Input type="password" placeholder="enter your confirm password" id="cpassword" onChange={(e) => setauthState({...authState, password_confirmation:e.target.value})}/>
            </div>

            <div className="mt-5">
                <Button className="w-full">Register</Button>
            </div>            
        </form>


            <div className="mt-5">
                <span>Already have a account ? <Link href='/login' className="text-teal-600 font-semibold">Login</Link></span>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Register;
