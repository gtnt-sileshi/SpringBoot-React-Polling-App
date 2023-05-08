import { Form, redirect, useNavigate } from 'react-router-dom';
import { deleteClientById } from '../data/Clients';

export async function action({ params }) {
  await deleteClientById(params.userId);
  return redirect('/');
}

const Client = ({ client }) => {

  
  const { firstName, lastName, age, email, salary, id } = client;

  const navigate = useNavigate();


  return (
    <>
      <tr className='border-b text-center'>
        <td className='p-6 font-semibold'>{firstName}</td>
        <td className='p-6 font-semibold'>{lastName}</td>
        <td className='p-6 font-semibold'>{age}</td>
        <td className='p-6 font-semibold'>{email}</td>
        <td className='p-6 font-semibold'>{salary}</td>

        <td className='p-6 flex gap-3 justify-center'>
          <button
            type='button'
            className='text-blue-600 hover:text-blue-700 uppercase font-bold'
            onClick={() => navigate(`/users/${id}/edit`)}
          >
            Edit
          </button>

          <Form
            method='POST'
            action={`/users/${id}/destroy`}
            onSubmit={(e) => {
              //previene el action
              if (!confirm('¿Are you sure you want to delete this user?')) {
                e.preventDefault();
              }
            }}
          >
            <button
              type='submit'
              className='text-red-600 hover:text-red-700 uppercase font-bold'
            >
              Delete
            </button>
          </Form>
        </td>
      </tr>
    </>
  );
};

export default Client;
