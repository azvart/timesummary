function ArticleListByCategory({ articles, category}) {
    return (
        <div>
          <h1>News Articles for category <i>{category}</i></h1>
          {
            articles.map(article => {
              return (
                <div key={article.id}>
                  <h2>
                    {article.id} {article.title}
                  </h2>
                  <p>{article.description}</p>
                  <hr />
                </div>
              ) 
            })
          }
        </div>
    )
};

export default ArticleListByCategory;

export async function getServerSideProps(context) {

  const user = process.env.DB_USER;
  const password = process.env.PASSWORD;
  console.log(`Connecting to database with username${user} with password${password}`);

  const { params, req, res, query } = context;
  // console.log(query);
  // console.log(req.headers.cookie);
  res.setHeader('Set-Cookie', ['name=Vishwas']);
  const { category } = params;
  const response = await fetch(`http://localhost:4000/news?category=${category}`);
  const data = await response.json();
  console.log(`Pre-rendering News Acticles for category ${category}`);

  return {
      props: {
          articles: data,
          category,
      }
  } 
}