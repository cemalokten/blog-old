import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import {getSortedPostsData} from '../lib/posts';
import {Tag, Date} from '../src/components/'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({allPostsData}) {
  return (
    <div>
     {allPostsData.map(({id, date, title, tags}) => {
        return hey (
          <>
            <li>{title}</li>
            <Date date={date}/>
            {tags ? <Tag tags={tags}/> : ''} 
          </>
        );
      })}
    </div>
  );
}
