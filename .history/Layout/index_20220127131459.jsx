
import { useAuth } from "hooks/useAuth";
import { Sidebar, Grid, Segment } from "semantic-ui-react";
const Layout = ({children}) => {
  return (
    <Sidebar
      as={Segment}
      animation="overlay"
      direction="top"
      visible={false}
    >

    </Sidebar>
  )
}


export default Layout;