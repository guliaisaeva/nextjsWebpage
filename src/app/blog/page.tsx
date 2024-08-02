import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

function Blog() {
  return (
    <div className={styles.mainContainer}>
      <Link
        href={`/blog/testId`}
        className={styles.container}
        // key={item.id}
      >
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/1059823/pexels-photo-1059823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae,
            dolore doloribus cupiditate atque blanditiis molestiae nulla, nihil
            aspernatur error excepturi, maiores iste ipsum dolor amet eos ea
            alias rem recusandae!
          </p>
        </div>
      </Link>
      <Link
        href={`/blog/testId`}
        className={styles.container}
        // key={item.id}
      >
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/1059823/pexels-photo-1059823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae,
            dolore doloribus cupiditate atque blanditiis molestiae nulla, nihil
            aspernatur error excepturi, maiores iste ipsum dolor amet eos ea
            alias rem recusandae!
          </p>
        </div>
      </Link>
      <Link
        href={`/blog/TestId`}
        className={styles.container}
        // key={item.id}
      >
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/1059823/pexels-photo-1059823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae,
            dolore doloribus cupiditate atque blanditiis molestiae nulla, nihil
            aspernatur error excepturi, maiores iste ipsum dolor amet eos ea
            alias rem recusandae!
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Blog;
