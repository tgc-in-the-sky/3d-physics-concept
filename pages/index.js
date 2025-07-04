import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useEffect, useState } from 'react'

// Dynamically import the App component to avoid SSR issues with Three.js
const App = dynamic(() => import('../src/App'), { 
  ssr: false,
  loading: () => <div style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading 3D Scene...</div>
})

export default function Home() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <>
      <Head>
        <title>3D Physics Concept - Object Clump</title>
        <meta name="description" content="3D physics simulation with objects moving towards center point" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ width: '100vw', height: '100vh', margin: 0, padding: 0 }}>
        {isClient && <App />}
      </main>
    </>
  )
} 