import Head from "next/head";
import Layout from "../layouts/layout";
import styles from '../styles/Form.module.css'
import { HiMail, HiFingerPrint, HiUser } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export default function Register(){
    const [show, setShow] = useState(false);
    // console.log(props.user.photoURL)
    // console.log(props.user.displayName)
    // const provider = new GoogleAuthProvider();
    // const handleLoginGoogle=()=>{

// const signInGooglee
    const handleToggle = () => {
        setShow(!show)
    }
    return(
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
            <form className="flex flex-col gap-4">
                <div className={styles.input_group}>
                    <input
                        type="text"
                        name="user"
                        placeholder="User"
                        className={styles.input_text}
                    />
                    <span className="icon flex items-center px-4">
                        < HiUser size={25} />
                    </span>
                </div>
                <div className={styles.input_group}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className={styles.input_text}
                    />
                    <span className="icon flex items-center px-4">
                        < HiMail size={25} />
                    </span>
                </div>
                <div className={styles.input_group}>
                    <input
                        type={`${show ? "text" : "password"}`}
                        name="pasword"
                        placeholder="Pasword"
                        className={styles.input_text}
                    />
                    <span className="icon flex items-center px-4" onClick={handleToggle}>
                        <HiFingerPrint size={25} />
                    </span>
                </div>
                {/* login button */}
                <div className="input-button">
                    <button
                        className={styles.button}
                        type="submit">Sign Up</button>

                </div>
             


            </form>
            {/* bottom */}
            <p className="text-center text-gray-600">
               I have an account.  <Link legacyBehavior href={'/login'}><a className="text-pink-700">Login</a></Link>
            </p>
        </section>
    </Layout>
    )
}