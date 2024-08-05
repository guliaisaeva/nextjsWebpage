import React from "react";
import styles from "../page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "force-cache",
  });

  if (!res.ok) {
return notFound()
  }

  return res.json();
}
interface BlogPostParams {
  id: number;
}
const BlogPost = async ({ params }: { params: BlogPostParams }) => {
  const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
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
          consequuntur eius odio! Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Ducimus eveniet vel ipsa dolore culpa molestiae
          nihil provident esse, deserunt suscipit accusamus delectus adipisci id
          corporis soluta sit, optio voluptatibus at.Lorem30 Lorem ipsum, dolor
          sit amet consectetur adipisicing elit. Sed non beatae quae voluptatum
          minus, unde consequuntur ipsam temporibus molestiae iusto autem,
          doloremque, eos a alias tenetur vitae adipisci dicta itaque? lorem{" "}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus
          hic natus ipsam id adipisci eligendi eaque nobis. Ea fugiat, cumque
          dolores consectetur quam voluptatem, velit repellat, optio sapiente
          ullam debitis!{" "}
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
