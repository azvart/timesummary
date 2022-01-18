import styles from './sidebar.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/router'


function Sidebar({ reports, tasks, download }) {
  const router = useRouter();

  return(
    <div className={styles.sidebarContainer}>
      <div className={styles.title}>TIMESUMMARY</div>
      {router.asPath.includes('reports') && 
        <>
          <div className={styles.wrap}>
            <Image 
              src="/last-reports.svg"
              alt="last"
              width={14}
              height={14}
            />
            <span className={styles.subtitle}>Последние</span>
          </div>
          <div className={styles.wrap}>
            <Image 
              src="/list.svg"
              alt="list"
              width={14}
              height={14}
            />
            <span className={styles.subtitle}>Список за месяц</span>
          </div>
          <div className={styles.wrap}>
            <Image 
              src="/weekly-reports.svg"
              alt="weekly"
              width={14}
              height={14}
            />
            <span className={styles.subtitle}>Мои ежеднедельные отчеты</span>
          </div>
        </>
      }
      {router.asPath.includes('tasks') && 
        <>
          <div className={styles.wrap}>
            <Image 
              src="/last-reports.svg"
              alt="last"
              width={14}
              height={14}
            />
            <span className={styles.subtitle}>Список задач для сотрудника</span>
          </div>
        </>
      }
      {router.asPath.includes('employees') && 
        <>
          <div className={styles.wrap}>
            <Image 
              src="/download.svg"
              alt="download"
              width={14}
              height={14}
            />
            <span className={styles.subtitle}>Скачать агентское ПО</span>
          </div>
        </>
      }
    </div>
  )
};

export default Sidebar;