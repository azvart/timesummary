
import { useAuth } from "hooks/useAuth";
import { Sidebar, Grid, Segment, Header } from "semantic-ui-react";
const Layout = ({children}) => {
  return (
    <>
    <Sidebar
      as={Segment}
      animation="push"
      direction="top"
      visible={true}
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
    {children}
    </>
  )
}


export default Layout;