import 'styles/global.css'

import { AppProps } from 'next/app'
import Head from 'next/head'
import React, { FC } from 'react'

const App: FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<title>Website</title>
				<link rel='icon' href='/logo.png' />
			</Head>

			<Component {...pageProps} />
		</>
	)
}

export default App
