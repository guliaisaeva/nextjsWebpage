import React from "react";
import styles from "../page.module.css";
import Image from "next/image";

function BlogPost() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Animals</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, illo.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
            maiores ipsam quidem tempora repudiandae a saepe? Possimus voluptas
            hic fugit dolor. Dolore doloremque eligendi assumenda ipsa illo
            quasi id totam!
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/1938123/pexels-photo-1938123.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Gulia Isaeva</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/1617294/pexels-photo-1617294.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi enim
          debitis voluptas molestias. Natus accusantium delectus dolores atque
          earum cumque praesentium pariatur repellendus iusto eligendi porro ex,
          consequuntur eius odio!
        </p>
      </div>
    </div>
  );
}

export default BlogPost;
