import styles from '../styles/Layout.module.css'
import Image from "next/image";
export default function Layout({ children }) {

  return (
    <div className="flex h-screen bg-gray-300">
      <div className="m-auto bg-slate-50 rounded-md w-3/5 h-3/4 grid lg:grid-cols-2">
       {/* lef */}
        <div className={styles.imgStyle}>
        <figure alt="bookNote" className={styles.caartonImg}></figure>
        </div>
        {/* rigth */}
        <div className="right flex flex-col justify-evenly bg-slate-50">
          <div className="text-center py-10">
            {children}
          </div>
        </div>
      </div>
   
    </div>
  )
}