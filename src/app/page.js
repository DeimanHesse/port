import Image from "next/image";
import styles from "./page.module.css";
import MainSection from "./sections/MainSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <MainSection />
    </main>
  );
}
