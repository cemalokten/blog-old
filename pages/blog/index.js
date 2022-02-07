// import Head from 'next/head';
// import Image from 'next/image';
// import styles from '../styles/Home.module.css';
import {getSortedPostsData} from '../../lib/posts';
import {Tag, Date, Header} from '../../src/components/';
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
      {allPostsData.map(({id, date, title, tags}) => {
        return (
          <>
            <li>
              <Link href={`/blog/${id}`}>{title}</Link>
            </li>
            <Date date={date} />
            {tags ? <Tag tags={tags} /> : ''}
          </>
        );
      })}
    </div>
  );
}
