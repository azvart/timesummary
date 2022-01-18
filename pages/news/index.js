// function NewsArticleList({ articles }) {
//   return (
//     <div>
//       <h1>List of News Articles</h1>
//       {
//         articles.map(article => {
//           return (
//             <div key={article.id}>
//               <h2>
//                 {article.id} {article.title} | {article.category}
//               </h2>
//             </div>
//           ) 
//         })
//       }
//     </div>
//   )
// };

// export default NewsArticleList;

// export async function getServerSideProps() {
  
//   const response = await fetch("http://localhost:4000/news");
//   const data = await response.json();

//   return {
//     props: {
//       articles: data,
//     },
//   }
// };




function News({ data }) {
  return (
    <h1>{data}</h1>
  )
};

export default News;

export async function getStaticProps(context) {

  return {
    props: {
      data: context.preview ? 'List of draft articles' : 'List of published articles',
    },
  }
};