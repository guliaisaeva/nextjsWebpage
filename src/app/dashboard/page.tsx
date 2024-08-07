"use client";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

function Dashboard() {
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
  type FetcherArgs = [RequestInfo, RequestInit?];

  const fetcher = (...args: FetcherArgs) =>
    fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  return <div>Dashboard</div>;
}

export default Dashboard;
