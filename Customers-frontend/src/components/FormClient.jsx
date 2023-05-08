const FormClient = ({ client }) => {
  return (
    <>
      <div className='mb-4'>
        <label className='text-gray-800' htmlFor='firstName'>
          Name:
        </label>
        <input
          id='firstName'
          type='text'
          className='mt-2 block w-full p-3 bg-gray-50 shadow-xl'
          placeholder='John'
          name='firstName'
          defaultValue={client?.firstName}
        />
      </div>
      <div className='mb-4'>
        <label className='text-gray-800' htmlFor='lastName'>
          LastName:
        </label>
        <input
          id='lastName'
          type='text'
          className='mt-2 block w-full p-3 bg-gray-50 shadow-xl'
          placeholder='Doe'
          name='lastName'
          defaultValue={client?.lastName}
        />
      </div>
      <div className='mb-4'>
        <label className='text-gray-800' htmlFor='age'>
          Age:
        </label>
        <input
          id='age'
          type='number'
          className='mt-2 block w-full p-3 bg-gray-50 shadow-xl'
          placeholder='22'
          name='age'
          defaultValue={client?.age}
        />
      </div>
      <div className='mb-4'>
        <label className='text-gray-800' htmlFor='email'>
          Email:
        </label>
        <input
          id='email'
          type='email'
          className='mt-2 block w-full p-3 bg-gray-50 shadow-xl'
          placeholder='jhonDoe@gmail.com'
          name='email'
          defaultValue={client?.email}
        />
      </div>
      <div className='mb-4'>
        <label className='text-gray-800' htmlFor='salary'>
          Salary:
        </label>
        <input
          id='salary'
          type='number'
          className='mt-2 block w-full p-3 bg-gray-50 shadow-xl'
          placeholder='3400.5'
          name='salary'
          step="any"
          defaultValue={client?.salary}
        />
      </div>
    </>
  );
};

export default FormClient;
