import styles from './tasks.module.scss';
import BasicTable from './table';
import { styled } from '@mui/system';

function TasksPage() {
  const Root = styled('div')(
    ({ theme }) => `
    table {
      font-family: IBM Plex Sans, sans-serif;
      font-size: 0.875rem;
      border-collapse: collapse;
      width: 100%;
    }
  
    td,
    th {
      border: 1px solid #999;
      text-align: left;
      padding: 6px;
    }
  
    th {
      background-color: #3b6c8e;
      color: #FFF;
    }
    `,
  );

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span>Введите интервал дат в формате dd-mm-yyyy</span>
        <div className={styles.date}>
          <input type="date"/>
          <input type="date"/>
          <button>Установить</button>
        </div>
      </div>
      <div className={styles.counters}>
        <span>Всего в простое: 0 ч</span>
        <span>Всего на внутренних проектах: 0 ч</span>
        <span>Всего на коммерческих проектах: 0 ч</span>
        <span>Всего на других задачах: 0 ч</span>
        <span>Всего на частных задачах: 0 ч</span>
        <span>Всего на стажировке: 0 ч</span>
      </div>
      <Root>
        <BasicTable />
      </Root>
    </div>
  )
};

export default TasksPage;