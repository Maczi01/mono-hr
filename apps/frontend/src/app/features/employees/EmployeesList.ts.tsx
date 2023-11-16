import { Header } from '@ems/common-ui';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { QUERY_KEYS } from '../../../utulities/queryKeys';
import { getAllEmployees } from '../../apis/employees';

type Employee = {
  id: number;
  name: {
    first: string;
    last: string;
  };
  email: string;
};

export const EmployeesList = () => {
  const { data } = useQuery<Employee[]>({
    queryKey: [QUERY_KEYS.EMPLOYEES],
    queryFn: getAllEmployees,
  });

  return (
    <div>
      <Header>Employees List</Header>
      {data?.length !== 0 ? (
        data?.map((employee) => {
          return (
            <div key={employee.id}>
              <p>{employee.name.first}</p>
              <p>{employee.name.last}</p>
            </div>
          );
        })
      ) : (
        <p>List is empty</p>
      )}
    </div>
  );
};
