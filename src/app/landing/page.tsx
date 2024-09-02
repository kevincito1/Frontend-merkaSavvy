import styles from "./page.module.css";
import Link from "next/link";


const Landing = () => {
  return (
    <div className={styles.background}>
      <Link href="/login">
      <button className={styles.button}>Ingresar</button>
      </Link>      
    </div>
  );
};
export default Landing;