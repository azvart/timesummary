// import Link from 'next/link';

function ProductList({ products }) {
  return (
    <>
      <h1>List of products</h1>
      {products.map(product => {
        return (
          <div key={product.id}>
            <h2>
              {product.id} {product.title} {product.price}
            </h2>
            <hr />
          </div>
        )
      })}
    </>
  )
};
    
export default ProductList;

export async function getStaticProps() {
  console.log('Generating / Regenerating ProductList');
  const response = await fetch('http://localhost:4000/products');
  const data = await response.json();

  return {
    props: {
      products: data,
    },
    revalidate: 10,
  }
};

// function ProductList({ productId }) {
//   return (
//     <>
//       <Link href="/">
//         <a>Home</a>
//       </Link>
//       <div>
//         <Link href="/product/1">
//           <a>Product 1</a>
//         </Link>
//       </div>
//       <div>
//         <Link href="/product/2">
//           <a>Product 2</a>
//         </Link>
//       </div>
//       <div>
//         <Link href="/product/3" replace>
//           <a>Product 3</a>
//         </Link>
//       </div>
//       <div>
//         <Link href={`/product/${productId}`}>
//           <a>Product {productId}</a>
//         </Link>
//       </div>
//     </>
//   )
// }
    
// export default ProductList;