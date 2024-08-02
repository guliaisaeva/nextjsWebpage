import React from "react";
import styles from "./page.module.css";
import Button from "@/app/components/Button/Button";
import Image from "next/image";

function Category({ params }: { params: any }) {
  console.log(params);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h2 className={styles.title}>Test</h2>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
            officiis ducimus aut alias voluptates adipisci fugiat, error labore
            laboriosam libero veritatis est possimus exercitationem? Officia
            tempora vitae impedit assumenda maxime!
          </p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            fill={true}
            alt=""
            className={styles.img}
          />
        </div>
      </div>
    </div>
  );
}

export default Category;
