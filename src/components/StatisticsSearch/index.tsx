'use client';
import SelectShop from '@/components/SelectShop';
import SelectCategory from '@/components/SelectCategory';

export default function StatisticsSearch() {
  console.log('StatisticsSearch');
  return (
    <>
      <form>
        <SelectCategory/>
        <SelectShop/>
      </form>
    </>
  );
}