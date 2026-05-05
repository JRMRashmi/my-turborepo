'use client'

import { useState } from 'react'
import type { ReactElement } from 'react'

export default function RegistrationForm() : ReactElement {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    address: '',
    month: '',
    day: '',
    year: '',
  })

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log('FORM DATA:', form)

    // 👉 Later: send to API / Sanity
    alert('Form submitted!')
  }

  return (
    <section className="flex justify-center">
      <div className="w-full max-w-2xl mx-auto bg-white p-10 rounded-lg shadow">
        {/* Title */}
        <div className="bg-green-100 text-center py-3 mb-8 rounded">
          <h2 className="text-lg font-semibold">Online Registration</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">

          {/* Row 1 */}
          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <Input label="First Name" name="firstName" onChange={handleChange} />
            <Input label="Last Name" name="lastName" onChange={handleChange} />
          </div>

          {/* Email */}
          <Input label="Email Address" name="email" onChange={handleChange} />

          {/* Company */}
          <Input label="Company (if applicable)" name="company" onChange={handleChange} />

          {/* Address */}
          <Input label="Physical Address" name="address" onChange={handleChange} />

          {/* DOB */}
          <div className="grid grid-cols-3 gap-4 max-w-md">
            <label className="block mb-2 text-sm font-medium">Date of Birth</label>

            <div className="grid grid-cols-3 gap-4">
              <select name="month" onChange={handleChange} className="input">
                <option>Month</option>
                {months.map((m) => <option key={m}>{m}</option>)}
              </select>

              <select name="day" onChange={handleChange} className="input">
                <option>Day</option>
                {[...Array(31)].map((_, i) => (
                  <option key={i + 1}>{i + 1}</option>
                ))}
              </select>

              <select name="year" onChange={handleChange} className="input">
                <option>Year</option>
                {[...Array(50)].map((_, i) => (
                  <option key={i}>{2025 - i}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mx-auto block bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-800 transition"
          >
            Submit Registration
          </button>

        </form>
      </div>
    </section>
  )
}

/* 🔹 Reusable Input */
function Input({ label, name, onChange }: any) {
  return (
    <div className="max-w-md">   {/* 👈 LIMIT WIDTH */}
      <label className="block mb-2 text-sm font-medium">{label}</label>

      <input
        name={name}
        onChange={onChange}
        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder={label}
      />
    </div>
  )
}

/* 🔹 Months */
const months = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December'
]