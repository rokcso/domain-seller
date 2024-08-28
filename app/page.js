import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>The following domain names are for sale:</h1>
        <h1>下列域名正在出售：</h1>
        <ul>
          <li><h2>oregex.com</h2></li>
          <p>O Regex!</p>
          <li><h2>z-lib.one</h2></li>
          <p>Z-Library all in one.</p>
          <li><h2>zlib.one</h2></li>
          <p>Zlib or Z-Library all in one.</p>
        </ul>
        <div>
        <h3><a href="mailto:rokcsox@gmail.com?body=%0D%0A%0D%0A%0D%0Aviadomainseller">Contact Me</a></h3>
        <h3><a href="mailto:rokcsox@gmail.com?body=%0D%0A%0D%0A%0D%0Aviadomainseller">联系我</a></h3>
        </div>
      </div>
    </main>
  );
}
