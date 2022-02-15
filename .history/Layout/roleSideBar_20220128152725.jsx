import {useAuth} from '../hooks/useAuth';
import { Sidebar, Segment, Grid, Menu } from 'semantic-ui-react';





const RoleSideBar = () => {
  const auth = useAuth();


  return (
      <Sidebar
      as={Menu} 
      animation='overlay'
      direction='left'
      icon='labeled'
      inverted
      vertical
      width='thin'
      onHide={() => auth.roleSideBar()}
      visible={auth.user.roleVisible}
      >
      <Menu.Item as ='h2'>
          YEP
      </Menu.Item>
      </Sidebar>
  )
}




export default RoleSideBar;