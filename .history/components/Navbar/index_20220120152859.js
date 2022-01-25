import Link from 'next/link';
import Image from 'next/image';
import styles from './nav.module.scss';
import { useRouter } from 'next/router'

function Navbar() {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault()
    router.push('/profile')
  };
  const logout = () => {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('id');
  }
  return (
    <nav className={styles.header}>
      <div className={styles.logo}>
        <Image 
          src='/vironit_ws.png'
          alt='logo'
          width={250}
          height={100}
        />
      </div>
      
      <ul className={styles.headerMenu}>
        <li>
          <Link href={`${router.query.id}/messages`} passHref>
            <div className={styles.navBlock}>
              <Image 
                src="/message.svg"
                alt="message"
                width={50}
                height={50}
              />
              <span>Сообщения</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href={`${router.query.id}/reports`} passHref>
            <div className={styles.navBlock}>
              <Image 
                src="/calendar.svg"
                alt="calendar"
                width={50}
                height={50}
              />
              <span>Отчеты</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href={`${router.query.id}/tasks`} passHref>
            <div className={styles.navBlock}>
              <Image 
                src="/tasks.svg"
                alt="tasks"
                width={50}
                height={50}
              />
              <span>Задачи</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/employees" passHref>
            <div className={styles.navBlock}>
              <Image 
                src="/employees.svg"
                alt="employees"
                width={50}
                height={50}
              />
              <span>Сотрудники</span>
            </div>
          </Link>
        </li> 
      </ul>
      <div className={styles.wrapProfile}>
          <Image 
            src="/avatar.svg"
            alt="avatar"
            width={50}
            height={50}
          />
          <div>
            <div className={styles.wrapProfile}>
              {/* <h5>{data?.name} {data?.surname}</h5> */}
              <h5>Name</h5>
              {/* <small>{data?.email}</small> */}
              <small>Email</small>
            </div>
            <div className={styles.wrapButtons}>
              <button onClick={handleClick}>Мой профиль</button>
              <button onClick={logout}>Выйти</button>
            </div>
          </div> 
        </div>
    </nav>
  )
}

export default Navbar;