import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
				<link
					href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;1,100&display=swap"
        	rel="stylesheet"
				/>
        <link
					href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Montserrat:ital,wght@0,400;1,100&display=swap"
        	rel="stylesheet"
				/>
			</Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
