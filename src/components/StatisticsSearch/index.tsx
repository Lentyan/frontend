'use client';

import {
  useGetAllShopsQuery,
  useGetCategoriesQuery,
  useGetGroupsQuery, useGetSalesQuery, useGetSkuQuery, useGetSubcategoriesQuery,
} from '@/redux/lenta/lenta.api';
import SelectWithData from '@/components/SelectWithData';
import styles from './StatisticsSearch.module.scss';
import { useEffect, useState } from 'react';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { OptionType } from '@/types/SelectOption';
import { useActions } from '@/hooks/useActions';

export default function StatisticsSearch() {
  const { setSelected, setValues } = useActions();
  const allShops = useTypedSelector(state => state.searchForm.fields.shops.values);

  const selectedShops = useTypedSelector(state => state.searchForm.fields.shops.selected);
  const selectedGroups = useTypedSelector(state => state.searchForm.fields.groups.selected);
  const selectedCategories = useTypedSelector(state => state.searchForm.fields.categories.selected);
  const selectedSubcategories = useTypedSelector(state => state.searchForm.fields.subcategories.selected);
  const selectedSku = useTypedSelector(state => state.searchForm.fields.sku.selected);

  const filteredGroups = useTypedSelector(state => state.searchForm.fields.groups.values);
  const filteredCategories = useTypedSelector(state => state.searchForm.fields.categories.values);
  const filteredSubcategories = useTypedSelector(state => state.searchForm.fields.subcategories.values);
  const filteredSku = useTypedSelector(state => state.searchForm.fields.sku.values);

  const [shopValues, setShopValues] = useState<string[]>([]);
  const [groupValues, setGroupValues] = useState<string[]>([]);
  const [categoryValues, setCategoryValues] = useState<string[]>([]);
  const [subcategoryValues, setSubcategoryValues] = useState<string[]>([]);
  const [skuValues, setSkuValues] = useState<string[]>([]);


  // Магазины
  const {
    data: allShopsData,
  } = useGetAllShopsQuery({ limit: 20, page: 1 });

  function handleShopSelect(shops: OptionType[]) {
    setShopValues(shops.map(s => s.value));
    setSelected({ selected: shops, field: 'shops' });
  }

  useEffect(() => {
    if (allShopsData?.results) {
      const shopsData = allShopsData.results.map(data => ({
        value: data.id.toString(),
        label: data.store,
      }));
      setValues({ field: 'shops', values: shopsData });
    }
  }, [allShopsData]);

  // Группы
  const { data: groupData } = useGetGroupsQuery({ stores: shopValues }, {
    skip: selectedShops.length === 0,
  });

  function handleGroupSelect(groups: OptionType[]) {
    setGroupValues(groups.map(s => s.value));
    setSelected({ selected: groups, field: 'groups' });
  }

  useEffect(() => {
    const groupsValues = groupData?.groups.map(data => ({
      value: data,
      label: data,
    })) || [];
    if (groupsValues) {
      setValues({ field: 'groups', values: groupsValues });
    }
  }, [groupData]);

  // Категории
  const { data: categoryData } = useGetCategoriesQuery({ groups: groupValues }, {
    skip: selectedGroups.length === 0,
  });

  function handleCategorySelect(categories: OptionType[]) {
    setCategoryValues(categories.map(s => s.value));
    setSelected({ selected: categories, field: 'categories' });
  }

  useEffect(() => {
    const categoriesValues = categoryData?.categories.map(data => ({
      value: data,
      label: data,
    })) || [];
    if (categoriesValues) {
      setValues({ field: 'categories', values: categoriesValues });
    }
  }, [categoryData]);

  // Подкатегории
  const { data: subcategoryData } = useGetSubcategoriesQuery({ categories: categoryValues }, {
    skip: selectedCategories.length === 0,
  });

  function handleSubcategorySelect(subcategories: OptionType[]) {
    setSubcategoryValues(subcategories.map(s => s.value));
    setSelected({ selected: subcategories, field: 'subcategories' });
  }

  useEffect(() => {
    const subcategoriesValues = subcategoryData?.subcategories.map(data => ({
      value: data,
      label: data,
    })) || [];
    if (subcategoriesValues) {
      setValues({ field: 'subcategories', values: subcategoriesValues });
    }
  }, [subcategoryData]);

  // SKU
  const { data: skuData } = useGetSkuQuery({ subcategories: subcategoryValues, page: 1, limit: 2500 }, {
    skip: selectedSubcategories.length === 0,
  });

  function handleSkuSelect(sku: OptionType[]) {
    setSkuValues(sku.map(s => s.value));
    setSelected({ selected: sku, field: 'sku' });
  }

  useEffect(() => {
    if (skuData?.results) {
      const skusData = skuData.results.map(data => ({
        value: data.id.toString(),
        label: data.sku,
      }));
      setValues({ field: 'sku', values: skusData });
    }
  }, [skuData]);

  // Sales
  const { data: salesData } = useGetSalesQuery({ stores: shopValues, sku: skuValues, page: 1 }, {
    skip: selectedShops.length === 0 || selectedSku.length === 0,
  });

  return (
    <section className={styles.statisticsSearch}>
      <form className={styles.statisticsSearch__form}>
        <SelectWithData
          placeholder="ТК"
          fieldName="shops"
          onSelect={handleShopSelect}
          data={allShops}
          valueSelector={(state) => state.searchForm.fields.shops.selected}
        />
        <SelectWithData
          placeholder="Группа"
          fieldName="groups"
          onSelect={handleGroupSelect}
          data={filteredGroups}
          valueSelector={(state) => state.searchForm.fields.groups.selected}
        />
        <SelectWithData
          placeholder="Категория"
          fieldName="categories"
          onSelect={handleCategorySelect}
          data={filteredCategories}
          valueSelector={(state) => state.searchForm.fields.categories.selected}
        />
        <SelectWithData
          placeholder="Подкатегория"
          fieldName="subcategories"
          onSelect={handleSubcategorySelect}
          data={filteredSubcategories}
          valueSelector={(state) => state.searchForm.fields.subcategories.selected}
        />
        <SelectWithData
          fieldName="sku"
          placeholder="Товар"
          onSelect={handleSkuSelect}
          data={filteredSku}
          valueSelector={(state) => state.searchForm.fields.sku.selected}
        />
      </form>
    </section>
  );
}
