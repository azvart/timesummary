import { useRouter } from 'next/router';

function Doc() {
  const router = useRouter();
  const { params = [] } = router.query;

  console.log(params);

  if (params.length === 2) {
    return <h2>Viewing docs for feature {params[0]} and concept{params[1]}</h2>
  } else if (params.length === 1) {
    return <h2>Viewing docs for feature {params[0]}</h2>
  }
  return <h1>Docs Home Page</h1>
}

export default Doc;

// localhost:3000/docs/feature1  localhost:3000/docs/feature1/concept1
