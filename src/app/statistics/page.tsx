'use client';

// import StatisticsChart from '@/components/StatisticsChart';
// import StatisticsTable from '@/components/StatisticsTable';
import StatisticsSearch from '@/components/StatisticsSearch';
import { store } from '@/store';
import { Provider } from 'react-redux';

export default function statistics() {
  return (
    <>
      <h1>statistics component</h1>
      <Provider store={store}>
        <StatisticsSearch/>
      </Provider>

      {/*
         <StatisticsTable/>
        <div>
          <StatisticsChart/>
        </div>
         */}
    </>
  );
}