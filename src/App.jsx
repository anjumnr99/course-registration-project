

import './App.css'
import Cards from './Components/Cards'


function App() {


  return (
    <>
      <h1 className='text-4xl font-semibold'>Course Registration</h1>

      <div className=' w-full flex gap-6 mt-8'>
        <div className='w-3/4 '>
          <Cards ></Cards>
        </div>

        <div className='w-1/4  h-fit card px-4 bg-base-100 shadow-xl text-start'>
          <h3 className='text-lg font-bold text-[#2F80ED] mt-6'>Credit Hour Remaining 20 hr</h3>
          <hr className='my-4 ' />
          <h3 className='text-xl font-bold mb-5'>Course Name</h3>
          <ol className='text-[#1c1b1b99] list-decimal px-4 '>
            
          </ol>

          <hr className='my-4 ' />

          <p className='text-base font-medium text-[#1c1b1bcc]'>Total credit hour: </p>

          <hr className='my-4 ' />

          <p className='text-lg font-semibold mb-6 text-[#1c1b1bcc]'>Total price : </p>
        </div>
        
      </div>

    </>
  )
}

export default App
