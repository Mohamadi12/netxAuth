import LoginWithGoogle from "../components/buttons/LoginWithGoogle"


const page = () => {
  return (
    <div>
       <div className="p-4 max-w-xs mx-auto">
         <h1 className='text-4xl font-bold text-center mb-2'>
            Sign In
         </h1>
         <p className="text-center mb-6 tex-gray-500">
         Sign In to your account using one of the methode below
         </p>
         <LoginWithGoogle />
       </div>
    </div>
  )
}

export default page
