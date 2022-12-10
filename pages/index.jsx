import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Card from "../components/Card";
import styles from "../styles/Home.module.css";

export default function Home() {
  const handleOnButtonClick = () => {
    console.log("hi banner button");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <meta
          name="description"
          content="Web App to find nearby coffee stores"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Banner
          buttonText="View stores nearby"
          handleOnClick={handleOnButtonClick}
        />
        <div className={styles.heroImage}>
          <Image src="/static/hero-image.png" width={700} height={400} alt="" />
        </div>
        <Card
          name="DarkHorse Coffee"
          imgUrl="/static/hero-image.png"
          href="/coffee-store/darkhorse-coffee"
        />
      </main>
    </div>
  );
}
