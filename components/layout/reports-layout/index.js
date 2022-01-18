import styles from './reports.module.scss';
import BasicTable from 'components/Table';
import Image from 'next/image';
import { styled } from '@mui/system';

function ReportsPage() {

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
      border-radius: 2px;
    }
  
    th {
      background-color: #3b6c8e;
      color: #FFF;
    }
    `,
  );

  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.wrapper}>
          <Image
            src="/user.svg"
            alt="user"
            width={70}
            height={70}
          />
          <div className={styles.headerWrap}>
            <h5>Последние отчеты:</h5>
            <h1>ИМЯ ФАМИЛИЯ</h1>
          </div>
        </div>
      </div>
      <div className={styles.tableContainer}>
        <Root>
          <BasicTable />
        </Root>
      </div>
    </>
  )
};

export default ReportsPage;