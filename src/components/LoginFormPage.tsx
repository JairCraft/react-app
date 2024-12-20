import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import FormPage from "./FormPage"

interface IFormInput {
  username: string
  password: string
}

export default function LoginFormPage() {
  const { register, handleSubmit } = useForm<IFormInput>()
  const [logged, setLogged] = useState(false)

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    if (data.username === "jair@jair.com" && data.password === "jair") {
      setLogged(true)
    }
  }

  if (!logged) {
    return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-sm mx-auto p-6 border border-gray-300 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            {...register("username", { required: true })}
            type="email"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            {...register("password", { required: true })}
            type="password"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mt-6 text-center">
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </div>
      </form>
    )
  }

  return <FormPage />
}
