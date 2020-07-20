import Head from 'next/head'

export default function Home() {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Pinescripting</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="prose">
        <h1>
          Pinescripting
        </h1>
        <h3>
          Tutorials, articles, and code snippets for Tradingview's Pinescript language
        </h3>
      </main>

      <footer>
      </footer>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
