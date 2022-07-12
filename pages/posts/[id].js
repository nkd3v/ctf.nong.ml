import Layout from '../../components/layout'
// import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import Script from 'next/script'
import { flushSync } from 'react-dom'
// const fs = require('fs');

export default function Post({ postData}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const postData = {
    'title': context.req.cookies.v,
    'date': '2020-01-02',
    'conentHtml': '3'
  }

  console.log(context.req.cookies.v);
  // fs.writeFile('text.json', { a: 'a'}, err => {

  // });

  return {
    props: {
      postData,
    }
  }
}

// export async function getStaticPaths() {
//   const paths = getAllPostIds()
//   return {
//     paths,
//     fallback: false
//   }
// }

// export async function getStaticProps(params) {
//   fs.writeFile('text.json', JSON.stringify(params), err => {

//   });

//   const postData = await getPostData(params.params.id)
//   return {
//     props: {
//       postData
//     }
//   }
// }
