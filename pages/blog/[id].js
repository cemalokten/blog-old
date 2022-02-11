import {getAllPostIds, getPostData} from '../../lib/posts';
import {Button, Content, Header} from '../../src/components/index';
export async function getStaticProps({params}) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({postData}) {
  // Use dangerouslySetInnerHTML because only updated by me
  // <Content html={postData.contentHtml} />
  return (
    <>
      <Header />

      <Button
        bgColor={'rgb(6, 158, 30)'}
        brColor={'rgb(178, 251, 255)'}
        link={'/blog/'}
        width={'100%'}
        style={{marginTop: '1vw'}}
      >
        What I dont know 2022
      </Button>
    </>
  );
}
