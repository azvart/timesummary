
import { useAuth } from "hooks/useAuth";
import { Sidebar, Grid, Segment, Header } from "semantic-ui-react";
const Layout = ({children}) => {
  return (
    <>
    <Sidebar
      as={Segment}
      animation="overlay"
      direction="top"
      visible={true}
    >
      <Grid textAlign="center">
        <Grid.Row columns={1}>
            <Grid.Column>
                <Header as='h3'>SideBar</Header>
            </Grid.Column>
        </Grid.Row>
      </Grid>
    </Sidebar>
    {children}
    </>
  )
}


export default Layout;