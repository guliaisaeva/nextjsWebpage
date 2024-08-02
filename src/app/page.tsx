import Image from "next/image";
import styles from "./page.module.css";
import Hero from "../../public/hero.png";

export default function Home() {
  return (
    <div>
      <div className={styles.texts}>
        <h1>Better Design for your digital products.</h1>
      </div>
      <div className={styles.imgContainer}></div>
      <Image src={Hero} alt="hero" className="styles.img" />
    </div>
  );
}
