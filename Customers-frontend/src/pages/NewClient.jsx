import { useNavigate, Form, useActionData, redirect } from 'react-router-dom';
import Error from '../components/Error';
import FormClient from '../components/FormClient';
import { addClient } from '../data/Clients';


export async function action({ request }) {
  const formData = await request.formData();

  const data = Object.fromEntries(formData);

  //validación
  const errors = [];
  if (Object.values(data).includes('')) {
    errors.push('All fields are required');
  }

  //return data if there is errors

  if (Object.keys(errors).length) {
    return errors;
  }

  await addClient(data);

  return redirect('/')
}

const NewClient = () => {
  const errors = useActionData();
  const navigate = useNavigate();

  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>New client</h1>
      <p className='mt-3'>Fill in all fields to register a new customer</p>

      <div className='flex justify-end'>
        <button
          className='bg-blue-800 text-white px-3 py-1 font-bold uppercase'
          onClick={() => navigate('/')}
        >
          Volver
        </button>
      </div>

      <div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20'>
        {errors?.length &&
          errors.map((error, i) => <Error key={i}>{error}</Error>)
        }

        <Form method='POST' action=''>
          <FormClient />

          <input
            type='submit'
            className='mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg hover:cursor-pointer'
            value='Register'
          />
        </Form>
      </div>
    </>
  );
};

export default NewClient;
