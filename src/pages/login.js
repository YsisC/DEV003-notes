import Head from "next/head";
import Layout from "../layout/layout";
import Link from "next/link";
import styles from "../styles/Form.module.css"
import Image from "next/image";
import { HiMail, HiFingerPrint } from "react-icons/hi";
import { useState } from "react";
import { useAuth } from '../context/AuthUserContext';
import { useRouter } from "next/router";

export default function Login(props) {

    const [show, setShow] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const router = useRouter();
    const { signInWithEmailAndPassword, signInWithGoogle } = useAuth();
    // const signInGooglee
    const handleToggle = () => {
        setShow(!show)
    }

    // const onSubmit = event => {
    //     event.preventDefault();
    //     setError(null)
    //     signInWithEmailAndPassword(email, password)
    //     .then(authUser => {
    //       router.push('/');
    //     })
    //     .catch(error => {
    //       setError(error.message)
    //     });

    //   };

    const signInGoogle = (e) => {
    
        signInWithGoogle()
            .then(authUser => {
                console.log(authUser);
                // /login?email=&pasword=
                router.push('/register');
            })
            .catch(error => {
                setError(error.message)
            });
            
            e.preventDefault();

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
                {/* form */}
                <form
                    // onSubmit={onSubmit}
                    className="flex flex-col gap-4">
                    {/* { error} */}
                    <div className={styles.input_group}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className={styles.input_text}
                            id="loginEmail"
                            onChange={(event) => setEmail(event.target.value)}
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
                            id="loginPassword"
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        <span className="icon flex items-center px-4" onClick={handleToggle}>
                            <HiFingerPrint size={25} />
                        </span>
                    </div>
                    {/* login button */}
                    <div className="input-button">
                        <button
                            className={styles.button}
                            type="submit">Login</button>

                    </div>


                </form>
                <div className="input-button ">
                    <button
                        onClick={signInGoogle}
                        className={styles.button_custom} type="button">
                        Sign in with Google<Image src={'./assets/google.svg'} width="20" height="20" alt="google"></Image>
                    </button>
                </div>
                {/* <div className="input-button ">
                        <button className={styles.button_custom} type="button">
                            Sign in with Github<Image src={'./assets/github.svg'} width="25" height="25" alt="github" ></Image>
                        </button>
                    </div> */}

                {/* bottom */}
                <p className="text-center text-gray-600">
                    Don't have an account yet? <Link legacyBehavior href={'/register'}><a className="text-pink-700">Sign Up</a></Link>
                </p>
            </section>
        </Layout>

    )
}
