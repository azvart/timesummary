
import { useAuth } from "hooks/useAuth";
import { Sidebar, Grid, Segment, Header } from "semantic-ui-react";
const Layout = ({children}) => {
  const auth = useAuth();
  return (
    <>
    <Sidebar
      as={Segment}
      animation="slide along"
      direction="top"
      visible={auth.user.visible}
    >
      <Grid textAlign="center">
        <Grid.Row columns={1}>
            <Grid.Column>
                <Header as='h3'>SideBar</Header>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={4}>
          <Grid.Column>
              <Header>Message</Header>
          </Grid.Column>
          <Grid.Column>
              <Header>Reports</Header>
          </Grid.Column>
          <Grid.Column>
              <Header>Tasks</Header>
          </Grid.Column>
          <Grid.Column>
              <Header>Employees</Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Sidebar>
    <Sidebar.Pusher dimmed={auth.user.visible}>
      <Segment basic>
        {children}
      </Segment>
    </Sidebar.Pusher>
    </>
  )
}


export default Layout;