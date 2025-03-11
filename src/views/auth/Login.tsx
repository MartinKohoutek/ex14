import { FaFacebook, FaGoogle, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-100'>
      <div className='w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-lg'>
        <h2 className='text-2xl font-bold text-center text-gray-900'>
          Přihlášení
        </h2>

        <form className='space-y-4'>
          <div>
            <label htmlFor='email' className='block text-gray-700'>
              Email
            </label>
            <input
              type='email'
              id='email'
              className='w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Zadejte email'
            />
          </div>
          <div>
            <label htmlFor='password' className='block text-gray-700'>
              Heslo
            </label>
            <input
              type='password'
              id='password'
              className='w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Zadejte heslo'
            />
          </div>
          <button
            type='submit'
            className='w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600'
          >
            Přihlásit se
          </button>
        </form>

        <div className='flex items-center justify-center space-x-4'>
          <button className='p-2 text-white bg-blue-700 rounded-full hover:bg-blue-800'>
            <FaFacebook size={24} />
          </button>
          <button className='p-2 text-white bg-red-500 rounded-full hover:bg-red-600'>
            <FaGoogle size={24} />
          </button>
          <button className='p-2 text-white bg-gray-900 rounded-full hover:bg-gray-800'>
            <FaGithub size={24} />
          </button>
        </div>

        <p className='text-sm text-center text-gray-600'>
          Nemáte účet?{' '}
          <Link to='/register' className='text-blue-500 hover:underline'>
            Registrujte se
          </Link>
        </p>
      </div>
    </div>
  );
}
