import Link from 'next/link';
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
                
            </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={4}>
          <Grid.Column>
              <Link 
              href='/[id]/message'
              passHref={true}>
                <a>
              <Icon name='facebook messenger' circular size="large" />
              <Header as='h2' icon textAlign="center">Message</Header>
              </a>
              </Link>
          </Grid.Column>
          <Grid.Column>
              <Link href='/reports'>
              <a>
              <Icon name='calendar' circular size='large' />
              <Header as='h2' icon textAlign="center">Reports</Header>
              </a>
              </Link>
          </Grid.Column>
          <Grid.Column>
              <Link href='/tasks'>
              <a>
              <Icon name='tasks' circular size="large"/>
              <Header as='h2' icon textAlign="center">Tasks</Header>
              </a>
              </Link>
          </Grid.Column>
          <Grid.Column>
              <Link href='/employees'>
              <a>
              <Icon name='users' circular size='large' />
              <Header as='h2' icon textAlign="center">Employees</Header>
              </a>
              </Link>
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