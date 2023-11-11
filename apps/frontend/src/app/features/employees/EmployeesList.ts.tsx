import { Header } from '@ems/common-ui';
import { useEffect, useState } from 'react';

type Employee = {
  id: number;
  name: {
    first: string;
    last: string;
  };
  email: string;
};

export const EmployeesList = () => {
  const [list, setList] = useState<Employee[]>([]);

  useEffect(() => {
    // fetch('https://randomuser.me/api/?results=10')
    fetch('http://localhost:4200/api')
      .then((response) => {
        console.log('response2: ', response);
        return response.json();
      })
      .then((data) => setList(data));
  }, []);

  return (
    <div>
      <Header>Employees List</Header>
      {list.length !== 0 ? (
        list.map((employee) => {
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
