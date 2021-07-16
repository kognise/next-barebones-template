import { FC } from 'react'

const IndexPage: FC = () => {
	return (
		<main>
			<div className='container'>
				<h1>Welcome to your Next.js Website!</h1>

				<p>This is the default index page. Delete this and replace it when you&apos;re ready.</p>
			</div>

			<style jsx>{`
				main {
					display: flex;
					flex-direction: column;
					align-items: center;
					padding: 80px 10px;
				}

				.container {
					background: #eeeeee;
					border-radius: 8px;
					padding: 40px;
				}

				h1 {
					margin: 0;
					margin-bottom: 20px;
					font-size: 1.8em;
				}

				p {
					margin: 0;
					font-size: 1.2em;
				}
			`}</style>
		</main>
	)
}

export default IndexPage
