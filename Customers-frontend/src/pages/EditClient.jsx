import {
  Form,
  useNavigate,
  useLoaderData,
  useActionData,
  redirect,
} from 'react-router-dom';

import { getClientById, updateClientById } from '../data/Clients';
import FormClient from '../components/FormClient';
import Error from '../components/Error';

export async function loader({ params }) {
  const client = await getClientById(params.userId);

  //if client doesnt exists
  if (Object.values(client).length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'Not results found',
    });
  }

  return client;
}

export async function action({ request, params }) {
  const formData = await request.formData();

  const data = Object.fromEntries(formData);

  //validación
  const errors = [];
  if (Object.values(data).includes('')) {
    errors.push('All fields are required');
  }

  //if there is errors
  if (Object.keys(errors).length) {
    return errors;
  }

  //update client
  await updateClientById(params.userId, data);

  return redirect('/');
}

const EditClient = () => {
  const client = useLoaderData();
  const navigate = useNavigate();
  const errors = useActionData(); //read errors

  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>Edit client</h1>
      <p className='mt-3'>Here you can modify your customer's data</p>

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
          errors.map((error, i) => <Error key={i}>{error}</Error>)}

        <Form method='POST' action=''>
          <FormClient client={client} />

          <input
            type='submit'
            className='mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg hover:cursor-pointer'
            value='Edit'
          />
        </Form>
      </div>
    </>
  );
};

export default EditClient;
