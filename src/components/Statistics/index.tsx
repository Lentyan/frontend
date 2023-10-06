import styles from './Statistics.module.scss';
import StatisticsSearch from '@/components/StatisticsSearch';
import StatisticsTable from '@/components/StatisticsTable';
// import Chart from '@/components/Chart';
// import { CHARTS_DATA } from '../../../test_data';
import StatisticsChart from '@/components/StatisticsChart';

export default function Statistics() {
  console.log('statistics component');

  return (
    <section className={styles.statistics}>
      <StatisticsSearch />
      <StatisticsTable />
      {/* <div style={{ height: '427px' }}>
        <Chart data={CHARTS_DATA} />
      </div>*/}

        <div style={{ marginTop: '50px', paddingTop: '20px', paddingBottom: '30px', borderRadius: '10px', background: '#f6f6f6' }}>
          <StatisticsChart />
        </div>


    </section>
  );
}