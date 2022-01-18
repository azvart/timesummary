import styles from '../styles/About.module.css';
import Footer from 'components/Footer';
import Head from 'next/head';

function About() {
  return <h1 className={styles.highlight}>About page</h1>
}
  
export default About;

About.getLayout = function PageLayout(page) {
  return (
    <>
      <Head>
        <title>About something</title>
        <meta name="description" content="next js"/>
      </Head>
      {page}
      <Footer />
    </>
  )
}