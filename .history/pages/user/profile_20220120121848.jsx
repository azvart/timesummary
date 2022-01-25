import Layout from '../../Layout/index';
import ProfilePage from '@/layout/profile-layout';


const Profile = () => {
  return (
    <ProfilePage />
  )
}



Profile.getLayout = (page) => (
  <Layout>
    {page}
  </Layout>
);


export default Profile;