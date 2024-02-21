import Image from "next/image";
import styles from "./page.module.css";
import MainSection from "./sections/MainSection";
import { headers } from "next/headers";
import Course from "./sections/components/course/Course";

export default function Home() {
  const userAgent = headers().get("user-agent");
  return (
    <main className={styles.main}>
      <MainSection userAgent={userAgent} />
      {/* <Course /> */}
    </main>
  );
}
