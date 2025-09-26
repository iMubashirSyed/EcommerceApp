import React from 'react';

const LoginSignup = () => {
  return (
    <div className="LoginSignUp flex items-center justify-center min-h-screen bg-gray-100">
      <div className="LoginSignUp-container w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">SIGN UP</h1>

        {/* Form */}
        <form action="" className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
          />
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
          />
          <button className="bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 cursor-pointer transition">
            Continue
          </button>
        </form>

        {/* Already have an account */}
        <p className="mt-4 text-sm text-gray-600 text-center">
          Already have an account?{' '}
          <a href="" className="text-blue-500 hover:underline">
            Login here
          </a>
        </p>

        {/* Terms and Conditions */}
        <div className="mt-4 flex items-start gap-2">
          <input type="checkbox" id="terms" className="mt-1" />
          <label htmlFor="terms" className="text-sm text-gray-600">
            By signing up, you agree to our{' '}
            <a href="#" className="text-blue-500 hover:underline">
              Terms & Conditions
            </a>{' '}
            and{' '}
            <a href="#" className="text-blue-500 hover:underline">
              Privacy Policy
            </a>.
          </label>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;