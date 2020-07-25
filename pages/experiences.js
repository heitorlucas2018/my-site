import Head from 'next/head'

import Home from '../src/screen/home'
import Experiences from '../src/screen/experiences'

/**
      <Head>
        <title>mySelf</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
 */

export default function App() {
  return (
    <>
      <main>
        <Experiences />
      </main>

      <footer>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          heitorSantos.com
        </a>
      </footer>

      <style jsx>{`
        footer {
          width: 100%;
          height: 90px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #333;
          color: #fff;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 2em
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .logo {
          height: 1em;
        }
      `}</style>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap');

        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Dancing Script', cursive;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  )
}
