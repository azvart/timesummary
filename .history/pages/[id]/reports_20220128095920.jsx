import Layout from '../../Layout/index';
import { Tab, Table } from 'semantic-ui-react';




const Reports = () => {
  return (
    <Table celled inverted selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell> Дата </Table.HeaderCell>
            <Table.HeaderCell> День Недели</Table.HeaderCell>
            <Table.HeaderCell> Затрекал </Table.HeaderCell>
            <Table.HeaderCell> Перерыв </Table.HeaderCell>
            <Table.HeaderCell> Опоздание </Table.HeaderCell>
            <Table.HeaderCell> Количество Изменений </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>

        </Table.Body>
    </Table>
    
  )
}




Reports.getLayout = (page) => (
  <Layout>
    {page}
  </Layout>
)


export async function getServerSideProps(ctx){
  
  return {
    props:{
      
    }
  }
}

export default Reports;


