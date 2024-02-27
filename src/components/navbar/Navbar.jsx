import styles from "./navbar.module.css"
import Link from "next/link";
import Links from "./links/Links";

export default function Navbar(){
  return(
    <div className={styles.container}>
      <div>
        {/* <Link href="/">Logo</Link> */}
        Blog-it
      </div>
      <Links/>
    </div>
  )
}