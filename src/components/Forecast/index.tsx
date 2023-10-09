import styles from './forecast.module.scss';
import StatisticsSearch from '@/components/StatisticsSearch';
import ForecastTable from '@/components/ForecastTable';

export default function Forecast() {

  return (
    <section className={styles.forecast}>
      <StatisticsSearch />
      <ForecastTable />
    </section>
  );
}