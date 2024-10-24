"use client"
import React, { useState, FormEvent, ChangeEvent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { UserAuth } from '../context/AuthContext'
import { useRouter } from 'next/navigation'
import { FirebaseError } from 'firebase/app'

const permittedEmails: string[] = ["user1@example.com", "user2@example.com", "user3@example.com"];

const LoginPage: React.FC = () => {
  const router = useRouter();
  const { emailSignIn } = UserAuth();

  const [email, setEmail] = useState<string>("");
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loginError, setLoginError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    if (permittedEmails.includes(value)) {
      setIsEmailValid(true);
      setShowError(false);
    } else {
      setIsEmailValid(false);
      setShowError(true);
    }
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const toggleShowPassword = () => setShowPassword(!showPassword);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoginError("");
    setIsLoading(true);

    if (!isEmailValid) {
      setIsLoading(false);
      return;
    }

    try {
      await emailSignIn(email, password);
      router.push('/'); // Adjust this route as needed
    } catch (error) {
      console.error(error);
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case 'auth/user-not-found':
            setLoginError('No account found with this email.');
            break;
          case 'auth/wrong-password':
            setLoginError('Incorrect password.');
            break;
          case 'auth/too-many-requests':
            setLoginError('Too many attempts. Please try again later.');
            break;
          default:
            setLoginError('Failed to login. Please check your credentials.');
        }
      } else {
        setLoginError('An unexpected error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen p-4">
      {/* Left side - Background and Quote */}
      <div className="lg:w-1/2 bg-purple-900 text-white flex flex-col justify-between relative overflow-hidden rounded-xl">
        <Image
          src="/assets/art2.jpg"
          width={5000}
          height={3000}
          alt=''
          className='relative h-[300px] lg:h-[calc(100vh-32px)]'
        />
        <div className="z-10 absolute flex ml-10 justify-center items-center h-full">
          <p className='text-[36px] lg:text-[100px] font-bold max-w-[300px] leading-tight'>Your Generosity Can Make Huge Impact</p>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
        <div className="max-w-md w-full mx-auto">
          <div className="flex justify-start mb-8">
            <h1 className='text-3xl font-semibold'>Crowdshaki.</h1>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-2">Welcome Back</h2>
          <p className="text-gray-600 mb-8">Sign in to access your NGO dashboard.</p>

          {loginError && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {loginError}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={handleEmailChange}
                className={`appearance-none block w-full px-3 py-2 border ${showError ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                placeholder="Enter your email"
              />
              {showError && (
                <p className="text-red-500 text-sm mt-2">Please enter email registered with Crowdshaki.</p>
              )}
            </div>

            {/* Password input */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={handlePasswordChange}
                  disabled={!isEmailValid}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={toggleShowPassword}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-500"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={showPassword ? "M5.121 17.121A9.953 9.953 0 0112 15c2.485 0 4.735.914 6.434 2.414m1.44-1.414A9.97 9.97 0 0021 12c0-2.485-.914-4.735-2.414-6.434M7.515 7.515A9.965 9.965 0 005 12c0 2.485.914 4.735 2.414 6.434M9.121 9.121L4.879 4.879M14.879 14.879l-4.242 4.242" : "M15 12a3 3 0 11-6 0 3 3 0 016 0z"}
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Forgot Password Link */}
            <div className="flex items-center justify-end">
              <Link href="/forgot-password" className="text-sm text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </Link>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={!isEmailValid || isLoading}
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white 
                  ${isEmailValid && !isLoading ? 'bg-black hover:bg-gray-800' : 'bg-gray-400 cursor-not-allowed'} 
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Signing in...
                  </span>
                ) : (
                  'Sign In'
                )}
              </button>
            </div>
          </form>

          <p className="mt-8 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link href="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;