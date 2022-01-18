import { useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import styles from './employees.module.scss';

export function EmployeesPage({ children }) {

  const [active, setActive] = useState(false);
  const categories = ["Все", "Стажеры", "ONLINE", "OFFLINE"];
  const employees = [
    { 
      image: '/photo.svg',
      name: 'Имя Фамилия',
      role: 'работник',
      position: 'разработчик', 
      jobDate: '01-01-2020',
      email: 'Email',
      tel: '+375...',
      skype: 'Skype',
    },
    {
      image: '/avatar.svg',
      name: 'Имя Фамилия',
      role: 'работник2',
      position: 'разработчик', 
      jobDate: '01-01-2020',
      email: 'Email',
      tel: '+375...',
      skype: 'Skype',
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <div className={styles.wrapper}>
          <Image
            src="/user.svg"
            alt="user"
            width={70}
            height={70}
          />
          <div className={styles.headerWrap}>
            <h5>Контакты</h5>
            <h1>Список работников</h1>
          </div>
        </div>
        <div className={styles.search}>
          <input type="text" placeholder="Поиск" className={styles.searchbBar}/>
          <Image
              src="/search.svg"
              alt="search"
              width={16}
              height={16}
            />
        </div>
      </div>
      <div className={clsx(styles.wrapper, styles.sortList)}>
        {categories.map((category) => {
          return <button key={category}><span className={clsx(active && styles.activeBtn)}>{category}</span></button>
        })}
      </div>
      <div className={clsx(styles.cardsWrap)}>
        {
          employees.map((user) => {
            return (
              <div className={styles.profileCardWrap} key={user.tel}>
                <Image
                  src={user.image}
                  alt="photo"
                  width={200}
                  height={200}
                />
                <div className={styles.info}>
                  <h4>{user.name}</h4>
                  <div>{`Роль: ${user.role}`}</div>
                  <div>{`Должность: ${user.position}`}</div>
                  <div>{`Работает с: ${user.jobDate}`}</div>
                  <div>{`Email: ${user.email}`}</div>
                  <div>{`Телефон: ${user.tel}`}</div>
                  <div>{`Skype: ${user.skype}`}</div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
};