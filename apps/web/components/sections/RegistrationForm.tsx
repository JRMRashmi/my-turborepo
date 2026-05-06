'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState, type ReactElement } from 'react'

/* 🔹 Validation Schema */
const schema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email'),
  company: z.string().optional(),
  address: z.string().min(1, 'Address is required'),
  month: z.string().min(1, 'Select month'),
  day: z.string().min(1, 'Select day'),
  year: z.string().min(1, 'Select year'),
})

type FormData = z.infer<typeof schema>

export default function RegistrationForm(): ReactElement {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onTouched', 
  })
const [loading, setLoading] = useState(false)
 const onSubmit = async (data: FormData) => {
  try {
    const { month, day, year, ...rest } = data

    const monthIndex = months.indexOf(month) + 1

    const formattedDate = `${year}-${String(monthIndex).padStart(2, '0')}-${String(day).padStart(2, '0')}`

    const payload = {
      ...rest,
      dateOfBirth: formattedDate,
    }

    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    const result = await res.json()

    if (result.success) {
      alert('✅ Registration successful!')
    }
  } catch (error) {
    console.error(error)
  }
}

  return (
    <section className="flex justify-center">
      <div className="w-full max-w-2xl bg-white p-10 rounded-lg shadow">

        {/* Title */}
        <div className="bg-green-100 text-center py-3 mb-8 rounded">
          <h2 className="text-lg font-semibold">Online Registration</h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">

          {/* Row */}
          <div className="grid md:grid-cols-2 gap-8">
            <Input
              label="First Name"
              error={errors.firstName?.message}
              {...register('firstName')}
            />
            <Input
              label="Last Name"
              error={errors.lastName?.message}
              {...register('lastName')}
            />
          </div>

          <Input
            label="Email Address"
            error={errors.email?.message}
            {...register('email')}
          />

          <Input
            label="Company (if applicable)"
            error={errors.company?.message}
            {...register('company')}
          />

          <Input
            label="Physical Address"
            error={errors.address?.message}
            {...register('address')}
          />

          {/* DOB */}
          <div>
            <label className="block mb-2 text-sm font-medium">
              Date of Birth
            </label>

            <div className="grid grid-cols-3 gap-4 max-w-md">
              <select {...register('month')} className="input">
                <option value="">Month</option>
                {months.map((m) => <option key={m}>{m}</option>)}
              </select>

              <select {...register('day')} className="input">
                <option value="">Day</option>
                {[...Array(31)].map((_, i) => (
                  <option key={i + 1}>{i + 1}</option>
                ))}
              </select>

              <select {...register('year')} className="input">
                <option value="">Year</option>
                {[...Array(50)].map((_, i) => (
                  <option key={i}>{2025 - i}</option>
                ))}
              </select>
            </div>

            {/* DOB Errors */}
            <div className="text-red-500 text-sm mt-2">
              {errors.month?.message ||
               errors.day?.message ||
               errors.year?.message}
            </div>
          </div>

          {/* Submit */}
          <button
  type="submit"
  disabled={loading}
  className="mx-auto block bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-800 transition disabled:opacity-50"
>
  {loading ? 'Submitting...' : 'Submit Registration'}
</button>

        </form>
      </div>
    </section>
  )
}

/* 🔹 Reusable Input */
function Input({ label, error, ...props }: any) {
  return (
    <div className="max-w-md">
      <label className="block mb-2 text-sm font-medium">{label}</label>

      <input
        {...props}
        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder={label}
      />

      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  )
}

/* 🔹 Months */
const months = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December'
]