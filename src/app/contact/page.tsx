import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "../components/Button/Button";

function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep In Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.image}
            src="/contact.png"
            alt="hello"
            fill={true}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea className={styles.textArea} cols={30} rows={10}></textarea>
          <Button text="Send" url="#" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
