import { motion } from 'framer-motion'
import { HiOutlineFolderOpen } from 'react-icons/hi'
import { GoLightBulb } from 'react-icons/go'
import { CiBookmarkRemove } from 'react-icons/ci'
import { BsPencilFill } from 'react-icons/bs'
import { AiOutlineBell } from 'react-icons/ai'
import Link from 'next/link'

import styles from '../styles/RootLayout.module.css'
import { useRouter } from 'next/router'



export default function Sidebar({ isOpen }) {
    const router = useRouter();
    console.log("sidebar", isOpen)

    const SideBar_animation = {
        //System view
        open: {
            width: "16rem",
            transition: {
                damping: 40,
            }
        },
        closed: {
            width: "4rem",
            transition: {
                damping: 40,
            }
        }
    }



    return (
        <motion.div
            variants={SideBar_animation}
            animate={isOpen ? 'open' : 'closed'}
            className=' bg-white text-gray  z-[90] max-w-[16rem]
    h-screen overflow-hidden relative shadow-xl top-0.5 '
        >
            {/* Menus */}
            <div className='flex flex-col h-full'>
                {/* first */}
                <ul className='whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1 font-medium overflow-x-hidden'>
                    <li>
                        <Link href='/home' className={router.pathname == "/home" ? "link active" : "link"}>
                            < GoLightBulb /> Notas
                        </Link>
                    </li>
                    <li>
                        <Link href={'/reminders'} className={router.pathname == "/reminders" ? "link active" : "link"} >
                            <AiOutlineBell /> Recordatorios
                        </Link>
                    </li>
                    <li>
                        <Link href={'/reminders'} className={router.pathname == "/reminders" ? "link active" : "link"} >
                            <CiBookmarkRemove /> Home
                        </Link>
                    </li>
                    <li>
                        <Link href={'/reminders'} className={router.pathname == "/reminders" ? "link active" : "link"}>
                            < BsPencilFill /> Editar Etiquetas
                        </Link>
                    </li>
                    <li>
                        <Link href={'/archive'} className={router.pathname == "/archive" ? "link active" : "link"}>
                            <HiOutlineFolderOpen /> Archivar
                        </Link>
                    </li>
                </ul>
            </div>
        </motion.div>
    )
}
