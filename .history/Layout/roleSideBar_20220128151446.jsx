import useAuth from '../hooks/useAuth';
import { Sidebar, Segment, Grid, Menu } from 'semantic-ui-react';





const RoleSideBar = ({ children }) => {
  const auth = useAuth();


  return (
    <Sidebar.Pushable as={Segment} style={{overflow: "hidden"}}>
      <Sidebar
      as={Menu} 
      animation='overlay'
      direction='left'
      icon='labeled'
      inverted
      vertical
      width='thin'
      visible={auth.user.roleVisible}
      >
      <Menu.Item as ='h2'>
          YEP
      </Menu.Item>
      </Sidebar>
      <Sidebar.Pusher dimmed={auth.user.roleVisible}>
        <Segment basic>
        {children}
        </Segment>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  )
}




export default RoleSideBar;