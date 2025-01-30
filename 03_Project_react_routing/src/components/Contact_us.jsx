

const Contact_us = () => {
  return (
    <div className='text-black '>
       <div className='pl-20'>
       <img  src="https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-online-registration_516790-1805.jpg" alt="Error" height='300px' width="300px"/>
       </div>

        <h2 className='font-bold text-5x'>Sign In for Contact</h2>
        <div className="flex flex-col text-left text-xl "><br />
        <label className='pl-2 text-black'>Email :- </label>
        <input type="email" placeholder='Enter Your Email' className='bg-gray-400 p-2 rounded-lg text-black'/>
        </div>
        <div className='flex flex-col text-left text-xl'><br />
        <label className='pl-2 text-black'>Password :-</label>
        <input type="password"  placeholder='Enter Your password' className='bg-gray-400 p-2 rounded-lg text-black'/>
        </div><br /><br />
        <button className='text-white bg-blue-600'>Submit</button>
    </div>
  )
}

export default Contact_us