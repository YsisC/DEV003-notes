import { motion } from 'framer-motion'
import { HiOutlineFolderOpen } from 'react-icons/hi'
import { GoLightBulb } from 'react-icons/go'
import { CiBookmarkRemove } from 'react-icons/ci'
import Link from 'next/link'



export default function Sidebar({ isOpen }) {

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
            className=' bg-emerald-500 text-gray  z-[999] max-w-[16rem]
    h-screen overflow-hidden relative top-1 '
        >
            {/* Menu */}
            <div className='py-3 flex justify-center'>
                <ul>
                    <li>
                        <Link  href={'/home'}>Notas</Link>
                    </li>
                    <li>
                        <Link  href={'/reminders'}>Recordatorios</Link>
                    </li>
                    <li>
                        <Link  href={'/archive'}>Archivar</Link>
                    </li>
                </ul>
            </div>
        </motion.div>
    )
}
