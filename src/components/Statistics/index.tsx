import StatisticsSearch from '@/components/StatisticsSearch';

export default function Statistics() {
  console.log('statistics component');
  return (
    <section className="statistics">
      <StatisticsSearch />
      {/*
         <StatisticsTable/>
        <div>
          <StatisticsChart/>
        </div>
         */}
    </section>
  );
}