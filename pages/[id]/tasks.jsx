import TaskPage from '../../components/layout/tasks-layout/index';
import Layout from '../../Layout/index';


const Tasks = () => {
  return (
    <TaskPage />
  )
}


Tasks.getLayout = (page) => (
  <Layout>
    {page}
  </Layout>
)


export default Tasks;