import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Social from '../components/Social'
import styles from '../styles/Home.module.css'
import { getSortedPostsData } from '../lib/getPosts'

export default function Home() {
	return (
		<div className={styles.wrapper}>
			<Head>
				<title>Architecture</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<div className={styles.centercontent}>
				{/* <div className={styles.frame}> */}
				<img
					src='/images/round_bldg.jpeg'
					alt='McIntosh'
					className={styles.frame}
				/>
				{/* </div> */}
				<div className={styles.socialmain}>
					{/* <Social></Social> */}
					<div className={styles.main}>
						<h1 className={styles.title}>Architecture</h1>
						<h2 className={styles.description}>An Appreciation</h2>
					</div>
				</div>
				{/* </div> */}
				<div className={styles.card}>
					<a href='https://nextjs.org/docs'>
						<h3>Documentation &rarr;</h3>
						<p>Find in-depth information about Next.js features and API.</p>
					</a>
				</div>
				<div className={styles.card}>
					<a href='https://nextjs.org/learn'>
						<h3>Learn &rarr;</h3>
						<p>Learn about Next.js in an interactive course with quizzes!</p>
					</a>
				</div>
				<div className={styles.card}>
					<a href='https://github.com/vercel/next.js/tree/master/examples'>
						<h3>Examples &rarr;</h3>
						<p>Discover and deploy boilerplate example Next.js projects.</p>
					</a>
				</div>
				<div className={styles.card}>
					<a href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'>
						<h3>Deploy &rarr;</h3>
						<p>
							Instantly deploy your Next.js site to a public URL with Vercel.
						</p>
					</a>
				</div>
			</div>
			<Footer />
		</div>
	)
}
