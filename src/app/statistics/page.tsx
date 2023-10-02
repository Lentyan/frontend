import StatisticsChart from '@/components/StatisticsChart';
import StatisticsTable from '@/components/StatisticsTable';

export default function statistics() {
  return (
    <>
      <h1>statistics component</h1>
      <StatisticsTable />
      <div>
        <StatisticsChart />
      </div>
    </>
  );
}