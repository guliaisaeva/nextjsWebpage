import React from "react";
import styles from "./page.module.css";
import Button from "@/app/components/Button/Button";
import Image from "next/image";
import { notFound } from "next/navigation";
import { items } from "./data.js";
interface Item {
  id: number;
  title: string;
  desc: string;
  image: string;
}

interface ItemsInfo {
  applications: Item[];
  illustrations: Item[];
  websites: Item[];
}

const itemInfo: ItemsInfo = {
  applications: [],
  illustrations: [],
  websites: [],
};

const getData = (cat: keyof ItemsInfo) => {
  const data = items[cat];

  if (data) {
    return data;
  }

  return notFound();
};

function Category({ params }: { params: any }) {
  const data = getData(params.category);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button text="See More" url="#" />
          </div>
          <div className={styles.imgContainer}>
            <Image className={styles.img} fill={true} src={item.image} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Category;
