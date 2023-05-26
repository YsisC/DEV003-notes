import Head from "next/head";
import Layout from "../layouts/layout";
import styles from '../styles/Form.module.css'
import { HiMail, HiFingerPrint, HiUser } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAuth } from '../context/AuthUserContext';
import { useRouter } from "next/router";


export default function Register(){
    const [show, setShow] = useState(false);
  
    const {ignIn, loading, authUser, createUserWithEmail } = useAuth();
    const router = useRouter();

    const [userInfoRegister, setUserInfoRegister] = useState({
        user:"",
        email: "",
        password: ""
    });

    useEffect(() => {
        if (authUser)
            router.push('/')
    }, [authUser, loading, router])
  
    const handleChange=(e)=> {
        e.preventDefault()
        const { name, value } = e.target
        setUserInfoRegister(prevalue => {
            return {
                ...prevalue,
                [name]: value
            }
        })
    }  

const signUp =(i)=>{
    i.preventDefault()
    const {user, email, password}= userInfoRegister;
    console.log("user fuera",userInfoRegister);

    if(user.length===0 || email.length===0 && password.length===0)return;
    // console.log("user",userR);
    console.log("user", user,"email",email, "Password", password);
    createUserWithEmail(user,email, password)
}
// const signInGooglee
    const handleToggle = () => {
        setShow(!show)
    }
    return(
        <>
        <Layout>
        <Head>
            <title>Register</title>
        </Head>
        <section className="w-3/4 mx-auto flex flex-col gap-2">
            <div className="title ">
                <h1 className=" text-pink-700 text-4xl font-bold py-4">Register</h1>
                <p>Las notas son divertidas y necesarias</p>
            </div>
            {/* form */}
            <form 
             onSubmit={signUp}
            className="flex flex-col gap-4">
                <div className={styles.input_group}>
                    <input
                        type="text"
                        placeholder="User"
                        name="user"
                        className={styles.input_text}
                        onChange={handleChange}
                        // onChange={(event) => setUserR(event.target.value)}
                    />
                    <span className="icon flex items-center px-4">
                        < HiUser size={25} />
                    </span>
                </div>
                <div className={styles.input_group}>
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        className={styles.input_text}
                        onChange={handleChange}
                        // onChange={(event) => setEmail(event.target.value)}
                    />
                    <span className="icon flex items-center px-4">
                        < HiMail size={25} />
                    </span>
                </div>
                <div className={styles.input_group}>
                    <input
                        type={`${show ? "text" : "password"}`}
                        placeholder="Password"
                        name="password"
                        className={styles.input_text}
                        onChange={handleChange}
                        // onChange={(event) => setPassword(event.target.value)}
                    />
                    <span className="icon flex items-center px-4" onClick={handleToggle}>
                        <HiFingerPrint size={25} />
                    </span>
                </div>
                {/* login button */}
                <div className="input-button">
                    <button
                        className={styles.button}
                        onClick={ signUp}
                        type='submit'
                        >Sign Up</button>

                </div>
             


            </form>
            {/* bottom */}
            <p className="text-center text-gray-600">
               I have an account.  <Link legacyBehavior href={'/login'}><a className="text-pink-700">Login</a></Link>
            </p>
        </section>
    </Layout>
    </>
    )
}