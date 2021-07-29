// pages/_app.js
import '../styles/globals.css'
import { AppProps } from 'next/app'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { ReactElement } from 'react'

library.add(fab, fas)

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return <Component {...pageProps} />
}

export default MyApp