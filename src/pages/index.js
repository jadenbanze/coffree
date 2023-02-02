import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="Home">
      <h1 class="text-lg font-bold underline">Howdy! Testing</h1>
    </div>
  )
}
