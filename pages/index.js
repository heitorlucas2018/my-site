import Head from 'next/head'

import Home from '../src/screen/home'
import Skills from '../src/screen/skills'
import ButtonsContact from '../src/components/buttonsContact'

import Data from './api/data';

export default function App() {

  const skills = Data.skills

  return (
    <>
      <Head>
        <title>heitorSantos.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ButtonsContact />
        <Home />
        {skills && skills.map(({ title, data}) => {
            return <Skills title={title} data={data} />
        })
        }
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
          font-family: 'Dancing Script', cursive;
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
        @import url('https://fonts.googleapis.com/css2?family=Inconsolata&display=swap');

        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Inconsolata', monospace;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  )
}
