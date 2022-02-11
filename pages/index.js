// import Head from 'next/head';
// import Image from 'next/image';
// import styles from '../styles/Home.module.css';
import { getSortedPostsData } from '../lib/posts'
import * as C from '../src/components/'

export async function getStaticProps({ params }) {
  const allPostsData = await getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

const tags = [
  { tag: 'React', background: '#00FF0A' },
  { tag: 'HTML', background: '#BBAAFF' },
  { tag: 'VIM', background: '#FF5C00' },
  { tag: '10/02/2022', background: '#0500FF' },
]

export default function Home({ allPostsData }) {
  return (
    <div>
      <C.Header />
      <C.Contents>
        <C.H1>Cemal Okten</C.H1>
        <C.H2>Cemal Okten</C.H2>
        <C.Tag tags={tags} />
      </C.Contents>
    </div>
  )
}
