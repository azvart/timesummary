import useAuth from '../hooks/useAuth';
import { Sidebar, Segment, Grid, Menu } from 'semantic-ui-react';





const RoleSideBar = ({ children }) => {
  const auth = useAuth();


  return (
    <Sidebar.Pushable as={Segment} style={{overflow: "hidden"}}>
      <Sidebar
      as={Segment} 
      animation='overlay'
      direction='left'
      visible={auth.user.roleVisible}
      >

      <Grid textAlign='center'>
          <Grid.Row columns={1}>

          </Grid.Row>
      </Grid>
      </Sidebar>
      <Sidebar.Pusher>
        {children}
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  )
}




export default RoleSideBar;