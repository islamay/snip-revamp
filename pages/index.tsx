import type { NextPage } from 'next'
import { ChangeEvent, useState } from 'react'
import Head from 'next/head'
import styles from 'src/styles/Home.module.css'
import Navbar from 'src/components/Navbar'
import Categories from 'src/components/CategoriesSection'
import useViewport from 'src/hooks/useViewport'
import device from 'src/utils/device'
import Hero from 'src/components/Hero'

const news = [
  {
    title: 'Keindahan Gunung Simalanjuntak',
    imageLink: 'https://www.teahub.io/photos/full/145-1453979_mount-kinabalu.jpg'
  },
  {
    title: 'Keindahan Gunung Simalanjuntak',
    imageLink: 'https://www.teahub.io/photos/full/145-1453979_mount-kinabalu.jpg'
  }
]

const Home: NextPage = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const { vw } = useViewport()
  const { isDesktop, isLaptop, isMobile, isTablet } = device(vw)


  const handleSearchTerm = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  return (
    <>
      <Head>
        <title>Snip ● Beranda</title>
      </Head>

      <div className={styles.container}>
        <Navbar onSearchTermChange={handleSearchTerm} />
        <Categories />

        <Hero trendingNews={news} />

      </div>
    </>
  )
}

export default Home
