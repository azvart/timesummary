import Link from 'next/link';
import { useAuth } from "hooks/useAuth";
import { Sidebar, Grid, Segment, Header, Icon, Menu } from "semantic-ui-react";
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import RoleSideBar from './roleSideBar';

const Layout = ({children}) => {
  const auth = useAuth();
  const router = useRouter();
  useEffect(() => {
    if(!auth.user.id){
      router.push('/');
    }
  },[auth.user])
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
              href={`/${auth.user.id}/`}
              >
                <a>
              <Icon name='facebook messenger' circular size="large" />
              <Header as='h2' icon textAlign="center">Message</Header>
              </a>
              </Link>
          </Grid.Column>
          <Grid.Column>
              <Link href={`/${auth.user.id}/reports`}>
              <a>
              <Icon name='calendar' circular size='large' />
              <Header as='h2' icon textAlign="center">Reports</Header>
              </a>
              </Link>
          </Grid.Column>
          <Grid.Column>
              <Link href={`/${auth.user.id}/tasks`}>
              <a>
              <Icon name='tasks' circular size="large"/>
              <Header as='h2' icon textAlign="center">Tasks</Header>
              </a>
              </Link>
          </Grid.Column>
          <Grid.Column>
              <Link href={`/${auth.user.id}/employees`}>
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
      <Segment basic size='massive'>
        <div>
        <Menu pointing secondary size='massive'>
          <Menu.Menu position='left'>
              <Menu.Item name='sidebar' onClick={auth.roleSideBar} />
          </Menu.Menu>
          <Menu.Menu position='right'>
            <Menu.Item name='navigate' onClick={auth.visibleSideBar} />
            <Menu.Item name='logout' onClick={auth.logout} />
          </Menu.Menu>
        </Menu>
        
        <Segment size='massive'>
        {children}
        </Segment>
        
        </div>
      </Segment>
    </Sidebar.Pusher>
    </Sidebar.Pushable>
  )
}


export default Layout;