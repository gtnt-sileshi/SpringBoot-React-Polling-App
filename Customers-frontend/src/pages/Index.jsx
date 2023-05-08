import { useLoaderData } from 'react-router-dom';
import Client from '../components/Client';

import { getClients } from '../data/Clients';

import { dollarUS } from '../helpers';

//ejecuta cuando el componente cargue
export function loader() {
  const clientes = getClients();

  return clientes;
}

const Index = () => {
  const clientes = useLoaderData();

  const sumSalary = clientes.reduce((currentSum, nextObject) => {
    return currentSum + nextObject.salary;
  }, 0);

  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>Clients</h1>
      <p className='mt-3'>Manage your Customers</p>

      {clientes.length ? (
        <>
          <table className='w-full bg-white shadow mt-5 table-auto'>
            <thead className='bg-blue-800 text-white'>
              <tr>
                <th className='p-2'>First Name</th>
                <th className='p-2'>Last Name</th>
                <th className='p-2'>Age</th>
                <th className='p-2'>Email</th>
                <th className='p-2'>Salary</th>
                <th className='p-2'>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {clientes.map((cliente) => (
                <Client key={cliente.id} client={cliente} />
              ))}
            </tbody>
          </table>
          <p className='text-lg mt-2 text-end font-bold text-blue-900'>
            Total: 
            <span className='text-black ml-2'>
               {dollarUS.format(sumSalary)}
            </span>{' '}
          </p>
        </>
      ) : (
        <p className='text-center mt-10 '>No hay clientes aún</p>
      )}
    </>
  );
};

export default Index;
