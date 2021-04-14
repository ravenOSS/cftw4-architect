import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/Blog.module.css'
import { getSortedPostsData } from '../lib/getPosts'

export default function Blog({ allPostsData }) {
	console.log({ allPostsData })
	// console.log(`Single Post ${posts.data}`)
	return (
		<div className={styles.container}>
			<Header />
			<h1>Architecture Examples</h1>
			Lorem ipsum dolor sit amet.
			<h2>Blogs</h2>
			<ul className='postsList'>
				{allPostsData.map(({ id, publish, title }) => (
					<div key={id}>
						{/* <img>{post.data.Image}</img> */}
						<h3>{publish}</h3>
						{/* <h3>{props.data.Author}</h3> */}
						<p>{title}</p>
					</div>
				))}
			</ul>
			<Footer />
		</div>
	)
}

export async function getStaticProps() {
	const allPostsData = getSortedPostsData()
	return {
		props: {
			allPostsData,
		},
	}
}

// // get the post file contents
// export function getStaticProps() {
// 	const postsPath = path.join(process.cwd(), 'content') //__dirName
// 	const postsFilePaths = fs
// 		.readdirSync(postsPath)
// 		.filter((path) => /\.md?$/.test(path))

// 	const posts = postsFilePaths.map((filePath) => {
// 		const source = fs.readFileSync(path.join(postsPath, filePath))
// 		const parsedMatter = matter(source)
// 		console.log(`Content: ${parsedMatter.content}`)
// 		console.log(`Data: ${parsedMatter.data}`)

// 		// return {
// 		// 	props: {
// 		// 		content,
// 		// 		data,
// 		// 		filePath,
// 		// 	},
// 		// }
// 	})
// 	return { props: { parsedMatter } }
// }
