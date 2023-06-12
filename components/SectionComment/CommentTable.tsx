import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import {Comment } from '@ant-design/compatible';
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import type { FilterValue, SorterResult } from 'antd/es/table/interface';

interface DataType {
  record_id: string,
  name: string,
  outgiving: string;
  confirmation: string;
  date: string;
}

interface TableParams {
  pagination?: TablePaginationConfig;
  sortField?: string;
  sortOrder?: string;
  filters?: Record<string, FilterValue>;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    width: '20%',
  },
  {
    title: 'Ucapan',
    dataIndex: 'outgiving',
    width: '20%',
  },
  {
    title: 'Konfirmasi kehadiran',
    dataIndex: 'confirmation',
  },
];

const App: React.FC = () => {
  const [data, setData] = useState<DataType[]>();
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  const fetchData = () => {
    setLoading(true);
    fetch(`https://script.google.com/macros/s/AKfycbwFvIfuxGYzsp6ETpNsq94Fay4q0B6vxL7PSc5T9FK7PyUOyQOK8eGsAEqWa5u4xnj8/exec?action=read`, {method: "GET", redirect: "follow"})
      .then((response)=> {
        fetch(response.url)
        .then((res) =>res.json())
        .then(({ data }) => {
          console.log('results', data)
          setData(data);
          setLoading(false);
          setTableParams({
            ...tableParams,
            pagination: {
              ...tableParams.pagination,
              total: 200,
              // 200 is mock data, you should read it from server
              // total: data.totalCount,
            },
          });
        });
      })
      
  };

  useEffect(() => {
    fetchData();
  }, [JSON.stringify(tableParams)]);

  const handleTableChange = (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue>,
    sorter: SorterResult<DataType>,
  ) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });

    // `dataSource` is useless since `pageSize` changed
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };

  return (
    <Table
      columns={columns}
      rowKey={(record) => record.record_id}
      dataSource={data}
      loading={loading}
    />
  );
};

export default App;