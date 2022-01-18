import { useState } from 'react';
import { TextInput } from '../../TextInput';
import clsx from 'clsx';
import axios from 'axios';
import styles from './profile.module.scss';
import Button from '@mui/material/Button';


function ProfilePage() {
  const [user, setUser] = useState({});

  const handleChange = () => {
    const {name,value} = e.target;
    setUser({...user, [name]:value});
  };
  const update = () => {
    axios.request({
      method: 'PATCH',
      url: '/api/auth/updateuser',
      data: user,
    })
  }
  return(
    <div className={styles.profileContainer}>
      <section>
        <header className='profile-header'>
          <h2>Моя учетная запись</h2>
        </header>
        <main className={styles.profileContent}>
          <TextInput type='text' label="Фамилия" name='surname' onChange={(e) => handleChange(e)}/>
          <TextInput type='text' label="Имя" name='name' onChange={(e) => handleChange(e)} />
          <TextInput type='text' label="Отчество" name='patronymic' onChange={(e) => handleChange(e)}/>
          <TextInput type="password" label="Старый пароль" name='oldpassword' onChange={(e) => handleChange(e)}/>
          <TextInput type="password" label="Пароль" name='password' onChange={(e) => handleChange(e)}/>
          <TextInput type="email" label="E-mail" name='email' onChange={(e) => handleChange(e)}/>
          <TextInput type='text' label="Телефон" name='phoneNumber' onChange={(e) => handleChange(e)}/>
          <TextInput type='text' label="Skype" name='skype' onChange={(e) => handleChange(e)}/>
          <TextInput type='text' label="День рождения" name='birthday' onChange={(e) => handleChange(e)}/>
          <TextInput type='text' label="Фотография" name='photo' onChange={(e) => handleChange(e)}/>
        </main>
        <footer className={styles.update}>
          <Button variant="outlined" onClick={() => update()}>Изменить данные</Button>
        </footer>
      </section>
    </div>
  )
};

export default ProfilePage;