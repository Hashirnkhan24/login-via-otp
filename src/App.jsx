import { useState } from 'react'
import './App.css'
import OtpLogin from './components/OtpLogin'

function App() {
  const [showOtpInput, setShowOtpInput] = useState(false)

  const getOtpInput = () => {
    setShowOtpInput(!showOtpInput)
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-slate-600">
        <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-semibold mb-4">Login via OTP</h1>
          {showOtpInput ? (
            <OtpLogin />
          ) : (
            <>
              <input
                type="text"
                placeholder="Enter Phone Number"
                className="w-full h-12 px-4 border rounded focus:outline-none focus:border-blue-500 mb-4"
              />
            </>
          )}
          <button
            onClick={getOtpInput}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700 focus:outline-none"
          >
            {showOtpInput ? 'Login' : 'Get OTP'}
          </button>
        </div>
      </div>
    </>
  );
}

export default App
