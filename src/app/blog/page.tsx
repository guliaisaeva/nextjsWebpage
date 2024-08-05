import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.mainContainer}>
      {data.map((item: any) => (
        <Link href={`/blog/testId`} className={styles.container} key={item.id}>
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
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae,
              dolore doloribus cupiditate atque blanditiis molestiae nulla,
              nihil aspernatur error excepturi, maiores iste ipsum dolor amet
              eos ea alias rem recusandae!
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
