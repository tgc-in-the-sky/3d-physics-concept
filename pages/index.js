import dynamic from 'next/dynamic'
import Head from 'next/head'

// Dynamically import the App component to avoid SSR issues with Three.js
const App = dynamic(() => import('../src/App'), { ssr: false })

export default function Home() {
  return (
    <>
      <Head>
        <title>3D Physics Concept - Object Clump</title>
        <meta name="description" content="3D physics simulation with objects moving towards center point" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ width: '100vw', height: '100vh', margin: 0, padding: 0 }}>
        <App />
      </main>
    </>
  )
} 