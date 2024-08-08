"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import useSWR from "swr";

function Dashboard() {
  const session = useSession();
  const router = useRouter();
  type FetcherArgs = [RequestInfo, RequestInit?];

  const fetcher = (...args: FetcherArgs) =>
    fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user?.name}`,
    fetcher
  );
  console.log(data);

  if (session.status === "loading") {
    return; // Optionally display a loading spinner or message
  }
  if (session.status === "unauthenticated") {
    router.push("/dashboard/login"); // Redirect to login page if not authenticated
  }

  // const [data, setData] = useState();
  // const [err, setErr] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const getData = async () => {
  //     setIsLoading(true);
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //       cache: "force-cache",
  //     });

  //     if (!res.ok) {
  //       setErr(true);
  //     }
  //     const data = await res.json();
  //     setData(data);
  //     setIsLoading(false);
  //   };
  // }, []);

  if (status === "authenticated") {
    return <div>Dashboard</div>;
  }
}

export default Dashboard;
