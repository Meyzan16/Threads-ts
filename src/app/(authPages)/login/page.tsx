'use client'; 
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";

const Login = () => {
    const [authState, setauthState] = useState<AuthStateType>({
        email:"",
        password: "",
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
            <h1 className="text-2xl font-bold">login</h1>
            <p>wellcome back</p>
        <form onSubmit={submit}>
            <div  className="mt-5">
                <label htmlFor="email">email</label>
                <Input type="email" placeholder="enter your email" id="email" onChange={(e) => setauthState({...authState, email:e.target.value})} />
            </div>
            <div  className="mt-5">
                <label htmlFor="password">password</label>
                <Input type="password" placeholder="enter your password" id="password" onChange={(e) => setauthState({...authState, password:e.target.value})}/>
            </div>

            <div className="mt-5">
                <Button className="w-full">Login</Button>
            </div>            
        </form>


            <div className="mt-5">
                <span>Don't have a account ? <Link href='/register' className="text-teal-600 font-semibold">Register</Link></span>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Login;
