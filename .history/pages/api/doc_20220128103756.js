import { withSwagger } from 'next-swagger-doc';


const swaggerHanlder = withSwagger({
  openApiVersion:'3.0.0',
  title:"TimeSummary API Doc",
  version:'0.1.0'
});

export default swaggerHanlder();