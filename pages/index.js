import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>User List | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>This is my first next js project for practice. I learned server side rendering and fundamental concepts of next js and apply in this project. I learned form this project is how to work pages in next js, Data fething, how to use css, layouts, routing etc.</p>
        <p className={styles.text}>This project is all about some users. all users page shows avaliable all user name and individual user page shows specefic user informaion. I used placeholder users api in this project for fetching user information.</p>
        <Link href="/users/">
          <a className={styles.btn}>See All Users</a>
        </Link>
      </div>
    </>
  )
}
