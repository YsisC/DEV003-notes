import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Form.module.css"
import Image from "next/image";
import { HiMail, HiFingerPrint } from "react-icons/hi";

import Layout from "../layouts/layout";
import { Alert }  from '../components';

import { useAuth } from '../context/AuthUserContext';
import { useRouter } from "next/router";

export default function Login(props) {
  
    const [show, setShow] = useState(false);

    const [userInfo, setUserInfo] = useState({
        email: null,
        password: ""
    });
    const [error, setError] = useState(null);
    const router = useRouter();
    const { signIn, loading, authUser, signInWithGoogle } = useAuth();
    // const signInGooglee
    const handleToggle = () => {
        setShow(!show)
    }

 const user = authUser;

    useEffect(() => {
        if (authUser)
            router.push('/')
    }, [authUser, loading, router])

    useEffect(()=>{
        // window.addEventListener('DOMContentLoaded')
        // user.uid
    },[])

    const handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        setUserInfo(prevalue => {
            return {
                ...prevalue,
                [name]: value
            }
        })
    }
    //
    const signInEmail = (e) => {
        e.preventDefault()
        const { email, password}= userInfo;
        console.log(email, password)
        signIn(email, password)
    }
    // debugger;
    const signInGoogle = (event) => {
        event.preventDefault();
        const { email, password } = userInfo
        // e.preventDefault();
        signInWithGoogle()


    }
    return (
        <Layout>
            <Head>
                <title>Login</title>
            </Head>
            <section className="w-3/4 mx-auto flex flex-col gap-2">
                <div className="title ">
                    <h1 className=" text-pink-700 text-4xl font-bold py-4">Login</h1>
                    <p>Las notas son divertidas y necesarias</p>
                </div>
                <Alert isVisible={false} error={"No estas registrado"} />
                {/* form */}
                <form
              
                    onSubmit={signInEmail}
                    className="flex flex-col gap-4">
                    {/* { error} */}
                    <div className={styles.input_group}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className={styles.input_text}
                            id="loginEmail"
                            onChange={handleChange}
                        />
                        <span className="icon flex items-center px-4">
                            < HiMail size={25} />
                        </span>
                    </div>
                    <div className={styles.input_group}>
                        <input
                            type={`${show ? "text" : "password"}`}
                            name="password"
                            placeholder="Password"
                            className={styles.input_text}
                            id="loginPassword"
                            onChange={handleChange}
                        />
                        <span className="icon flex items-center px-4" onClick={handleToggle}>
                            <HiFingerPrint size={25} />
                        </span>
                    </div>
                    {/* login button */}
                    <div className="input-button">
                        <button
                        role="login"
                        id="signIn"
                            onClick={signInEmail}
                            className={styles.button}
                            type="submit"
                        >Login</button>

                    </div>


                </form>
                <div className="input-button ">
                    <button
                    id="Login"
                        onClick={signInGoogle}
                        className={styles.button_custom} type="button">
                        Ingresa con Google<Image src={'./assets/google.svg'} width="20" height="20" alt="google"></Image>
                    </button>
                </div>

                {/* bottom */}
                <p className="text-center text-gray-600">
                    Aun no tienes una cuenta? <Link legacyBehavior href={'/register'}><a className="text-pink-700">Registrate</a></Link>
                </p>
            </section>
        </Layout>

    )
}