import { FaFacebook, FaGoogle, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-100'>
      <div className='w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-lg'>
        <h2 className='text-2xl font-bold text-center text-gray-900'>
          Registrace
        </h2>

        <form className='space-y-4'>
          <div>
            <label htmlFor='name' className='block text-gray-700'>
              Jméno
            </label>
            <input
              type='text'
              id='name'
              className='w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Zadejte jméno'
              required
            />
          </div>
          <div>
            <label htmlFor='email' className='block text-gray-700'>
              Email
            </label>
            <input
              type='email'
              id='email'
              className='w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Zadejte email'
              required
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
              required
            />
          </div>
          <div>
            <label htmlFor='confirmPassword' className='block text-gray-700'>
              Potvrzení hesla
            </label>
            <input
              type='password'
              id='confirmPassword'
              className='w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Potvrďte heslo'
              required
            />
          </div>
          <button
            type='submit'
            className='w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition'
          >
            Registrovat se
          </button>
        </form>

        <div className='flex items-center justify-center space-x-4'>
          <button
            aria-label='Přihlásit se přes Facebook'
            className='p-2 text-white bg-blue-700 rounded-full hover:bg-blue-800 transition'
          >
            <FaFacebook size={24} />
          </button>
          <button
            aria-label='Přihlásit se přes Google'
            className='p-2 text-white bg-red-500 rounded-full hover:bg-red-600 transition'
          >
            <FaGoogle size={24} />
          </button>
          <button
            aria-label='Přihlásit se přes GitHub'
            className='p-2 text-white bg-gray-900 rounded-full hover:bg-gray-800 transition'
          >
            <FaGithub size={24} />
          </button>
        </div>

        <p className='text-sm text-center text-gray-600'>
          Už máte účet?{' '}
          <Link to='/login' className='text-blue-500 hover:underline'>
            Přihlásit se
          </Link>
        </p>
      </div>
    </div>
  );
}
