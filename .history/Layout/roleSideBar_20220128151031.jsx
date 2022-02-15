import useAuth from '../hooks/useAuth';
import { Sidebar, Segment } from 'semantic-ui-react';





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
      {children}
      </Sidebar>
    </Sidebar.Pushable>
  )
}




export default RoleSideBar;