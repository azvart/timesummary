
import { useAuth } from "hooks/useAuth";
import { Sidebar, Grid, Segment, Header, Icon } from "semantic-ui-react";
const Layout = ({children}) => {
  const auth = useAuth();
  return (
    <Sidebar.Pushable as={Segment} style={{overflow: 'hidden', height:'100vh'}}>
    <Sidebar
      as={Segment}
      animation="scale down"
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
              <Icon name='facebook messenger' circular size="large" />
              <Header as='h2' icon textAlign="center">Message</Header>
          </Grid.Column>
          <Grid.Column>
              <Icon name='calendar' circular size='large' />
              <Header as='h2' icon textAlign="center">Reports</Header>
          </Grid.Column>
          <Grid.Column>
              <Header>Tasks</Header>
          </Grid.Column>
          <Grid.Column>
              <Icon name='users' circular size='large' />
              <Header as='h2' icon textAlign="center">Employees</Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Sidebar>
    <Sidebar.Pusher>
      <Segment basic>
        {children}
      </Segment>
    </Sidebar.Pusher>
    </Sidebar.Pushable>
  )
}


export default Layout;