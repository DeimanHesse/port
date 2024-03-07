import Image from "next/image";
import styles from "./page.module.css";
import MainSection from "./sections/MainSection";
import { headers } from "next/headers";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import Preloader from "./components/Preloader/Preloader";

// const MainSection = dynamic(() => import("./sections/MainSection"));

export default function Home() {
  const userAgent = headers().get("user-agent");
  return (
    <main className={styles.main}>
      {/* <Suspense fallback={<Preloader />}> */}
      <MainSection userAgent={userAgent} />
      {/* </Suspense> */}
    </main>
  );
}
