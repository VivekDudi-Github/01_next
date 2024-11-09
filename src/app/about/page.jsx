"use client"
import { useRouter } from 'next/navigation'


function Page() {
  const router = useRouter()
  return (
    <>
      <div>about us</div>
      <button onClick={() => router.push("/")} className='bg-blue-300 p-2 rounded-lg text-whites'>
        GO Home
      </button>
    </>
  )
}

export default Page