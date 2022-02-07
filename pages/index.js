// import Head from 'next/head';
// import Image from 'next/image';
// import styles from '../styles/Home.module.css';
import {getSortedPostsData} from '../lib/posts';
import {Header} from '../src/components/';
import Link from 'next/link';

export async function getStaticProps({params}) {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({allPostsData}) {
  return (
    <div>
  <Header/>
    </div>
  );
}
