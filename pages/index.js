import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Social from '../components/Social'
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<div className={styles.wrapper}>
			<Head>
				<title>Architecture</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div className={styles.gridcontainer}>
				<Header />
				<Social className={styles.social}></Social>
				<div className={styles.frame}>
					<img
						src='/images/appleHQ.jpeg'
						alt='AppleHQ'
						className={styles.frame}
						// layout='responsive'
						// height={400}
						// width={500}
					/>
				</div>
				<div className={styles.main}>
					<div className={styles.title}>Architecture</div>
					<div className={styles.description}>An Appreciation</div>
				</div>
				<div className={styles.grid}>
					<a href='https://nextjs.org/docs' className={styles.card1}>
						<h3>Documentation &rarr;</h3>
						<p>Find in-depth information about Next.js features and API.</p>
					</a>

					<a href='https://nextjs.org/learn' className={styles.card2}>
						<h3>Learn &rarr;</h3>
						<p>Learn about Next.js in an interactive course with quizzes!</p>
					</a>

					<a
						href='https://github.com/vercel/next.js/tree/master/examples'
						className={styles.card3}
					>
						<h3>Examples &rarr;</h3>
						<p>Discover and deploy boilerplate example Next.js projects.</p>
					</a>

					<a
						href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
						className={styles.card4}
					>
						<h3>Deploy &rarr;</h3>
						<p>
							Instantly deploy your Next.js site to a public URL with Vercel.
						</p>
					</a>
				</div>
				<Footer />
			</div>
		</div>
	)
}
