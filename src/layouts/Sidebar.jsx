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
            className=' bg-white text-gray  z-[4] w-[16rem] max-w-[16rem]
    h-screen overflow-hidden md:relative fixed shadow-xl md:top-1'
        >
            {/* Menus */}
            <div className='flex flex-col h-full'>
                {/* Cerrar */}

                {/* first */}
                <ul className='whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1 font-medium overflow-x-hidden'>
                    <li>
                        <Link href='/home' className={router.pathname == "/home" ? "link active" : "link"}>
                            < GoLightBulb size={23} className='min-w-max' /> Notas
                        </Link>
                    </li>
                    <li>
                        <Link href={'/reminders'} className={router.pathname == "/reminders" ? "link active" : "link"} >
                            <AiOutlineBell size={23}  className='min-w-max' /> Recordatorios
                        </Link>
                    </li>
                    <li>
                        <Link href={'/reminders'} className={router.pathname == "/reminders" ? "link active" : "link"} >
                            <CiBookmarkRemove size={23} className='min-w-max' /> Home
                        </Link>
                    </li>
                    <li>
                        <Link href={'/reminders'} className={router.pathname == "/reminders" ? "link active" : "link"}>
                            < BsPencilFill size={23} className='min-w-max'/> Editar Etiquetas
                        </Link>
                    </li>
                    <li>
                        <Link href={'/archive'} className={router.pathname == "/archive" ? "link active" : "link"}>
                            <HiOutlineFolderOpen size={23} className='min-w-max' /> Archivar
                        </Link>
                    </li>
                </ul>
            </div>
        </motion.div>
    )
}
