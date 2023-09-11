import '@styles/globals.css'
import Nav from '@components/Nav'
import {Rubik} from 'next/font/google'


const rubik = Rubik({subsets: ['latin']})

export const metadata = {
  title: '',
  description: ''
}

const layout = ({children}) => {
  return (
   <html lang='en'>
    <body className={rubik.className}>
        <Nav />
        {children}
    </body>
   </html>
  )
}

export default layout