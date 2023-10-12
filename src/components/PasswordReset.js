// PasswordReset.js
import React, { useState } from 'react'
import { UserAuth } from '../context/AuthContext'

const PasswordReset = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const { resetPassword } = UserAuth()

  const handleResetPassword = async (e) => {
    e.preventDefault()
    try {
      await resetPassword(email)
      setMessage('Password reset email sent. Please check your inbox.')
    } catch (e) {
      setMessage(e.message)
    }
  }

  return (
    <div className='max-w-[700px] mx-auto my-16 p-4'>
      <h1 className='text-2xl font-bold py-2'>Forgot Password</h1>
      <form onSubmit={handleResetPassword}>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium'>Email Address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className='border p-3'
            type='email'
          />
        </div>
        {message && <p className='py-2'>{message}</p>}
        <button className='border border-blue-500 bg-blue-600 hover-bg-blue-500 w-full p-4 my-2 text-white'>
          Reset Password
        </button>
      </form>
    </div>
  )
}

export default PasswordReset
