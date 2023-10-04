import style from './Statistics.module.scss';
import StatisticsSearch from '@/components/StatisticsSearch';
import StatisticsTable from '@/components/StatisticsTable';

export default function Statistics() {
  console.log('statistics component');
  return (
    <section className={style.statistics}>
      <StatisticsSearch />
      <StatisticsTable />
      {/*

        <div>
          <StatisticsChart/>
        </div>
         */}
    </section>
  );
}