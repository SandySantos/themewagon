const Quote = () => {
  return (
    <div className='mt-40 w-full h-full px-5 sm:px-10'>
      <div className='grid md:grid-cols-12 gap-10'>
        <div className='md:col-span-5 px-5'>
          <div className='uppercase text-base font-bold mb-3 text-left text-[#51D6F3]'>
            GET A QUOTE
          </div>
          <div className='mb-8 text-4xl font-bold text-left'>
            Request A Free Qoute!
          </div>
          <div className=' text-left mb-8 font-sans text-gray-600'>
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </div>
          <div className='flex gap-6 w-full h-full'>
            <div className='bg-red-500 p-3 w-20 h-16'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-10 h-10 fill-white '
                viewBox='0 0 256 256'
              >
                <path d='M232,136v56a24,24,0,0,1-24,24H192a24,24,0,0,1-24-24V152a24,24,0,0,1,24-24h23.65a87.71,87.71,0,0,0-87-80H128a88,88,0,0,0-87.64,80H64a24,24,0,0,1,24,24v40a24,24,0,0,1-24,24H48a24,24,0,0,1-24-24V136A104.11,104.11,0,0,1,201.89,62.66,103.41,103.41,0,0,1,232,136Z'></path>
              </svg>
            </div>
            <div>
              <div className='text-left font-bold text-base'>
                Call for any query!
              </div>
              <div className='text-red-500 text-left font-bold text-2xl'>
                +012 345 6789
              </div>
            </div>
          </div>
        </div>

        <div className=' md:col-span-7'>
          <div className='bg-red-100 flex flex-col gap-3 p-5 sm:p-10'>
            <div className='grid sm:grid-cols-2 gap-3'>
              <input className='bg-white p-4' placeholder='Your Name' />
              <input className='bg-white p-4' placeholder='Your Name' />
            </div>
            <div className='grid sm:grid-cols-2 gap-3 w-full'>
              <input className='bg-white p-4 ' placeholder='Your Name' />
              <input className='bg-white p-4' placeholder='Your Name' />
            </div>
            <textarea
              className='bg-white p-4 w-full'
              placeholder='Special Note'
            />

            <button className='bg-red-500 p-4 w-full'>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
