import styles from '../styles/Layout.module.css'
import Image from "next/image";
export default function Layout({ children }) {

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-300">
      <div className={styles.wraper}>
       {/* lef */}
        <div className={styles.imgStyle}>
        <div alt="bookNote" className={ styles.caartonImg }></div>
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