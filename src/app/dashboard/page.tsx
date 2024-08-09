"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useSession } from "next-auth/react";
import styles from "./page.module.css";
import Image from "next/image";
import useSWR from "swr";

function Dashboard() {
  const session = useSession();
  const router = useRouter();
  type FetcherArgs = [RequestInfo, RequestInit?];

  const fetcher = (...args: FetcherArgs) =>
    fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user?.name}`,
    fetcher
  );

  if (session.status === "loading") {
    return;
  }
  if (session.status === "unauthenticated") {
    router.push("/dashboard/login");
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session?.data?.user?.name,
        }),
      });
      mutate();
      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id: any) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (err) {
      console.log(err);
    }
  };

  if (session.status === "authenticated") {
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          {data?.map((item: any) => (
            <div className={styles.post} key={item._id}>
              <div className={styles.imgContainer}>
                <Image src={item.img} alt="" width={200} height={100} />
              </div>
              <h2 className={styles.postTitle}>{item.title}</h2>
              <span
                className={styles.delete}
                onClick={() => handleDelete(item._id)}
              >
                X
              </span>
            </div>
          ))}
        </div>
        <form className={styles.new} onSubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input type="text" placeholder="Title" className={styles.input} />
          <input type="text" placeholder="Desc" className={styles.input} />
          <input type="text" placeholder="Image" className={styles.input} />
          <textarea
            placeholder="Content"
            className={styles.textArea}
            cols={30}
            rows={10}
          ></textarea>
          <button className={styles.button}>Send</button>
        </form>
      </div>
    );
  }
}

export default Dashboard;
