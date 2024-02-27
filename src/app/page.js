import Image from "next/image";
import styles from "./page.module.css";
import MainSection from "./sections/MainSection";
import { headers } from "next/headers";

export default function Home() {
  const userAgent = headers().get("user-agent");
  return (
    <main className={styles.main}>
      <MainSection userAgent={userAgent} />
    </main>
  );
}
