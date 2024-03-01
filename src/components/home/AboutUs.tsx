const AboutUs = () => {
  const aboutus = [
    {
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='w-12 h-12'
        >
          <path d='M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z' />
        </svg>
      ),
      title: 'Global Coverage',
      content:
        'Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.',
    },
    {
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='w-12 h-12'
        >
          <path d='M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z' />
          <path d='M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z' />
          <path d='M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z' />
        </svg>
      ),
      title: 'On Time Delivery',
      content:
        'Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.',
    },
  ];
  return (
    <>
      <div className='grid md:grid-cols-2 gap-10 md:p-4 px-5  w-full h-full'>
        <div className=' w-full h-full '>
          <img
            src='https://themewagon.github.io/logistica/img/about.jpg'
            alt='About-us'
            className='w-full h-full '
          ></img>
        </div>

        <div className='flex flex-col items-start  w-full  h-full'>
          <div className='uppercase text-base font-bold mb-3 text-[#51D6F3]'>
            About us
          </div>
          <div className='mb-8 text-4xl font-bold text-left'>
            Quick Transport and Logistics Solutions
          </div>
          <div className=' text-left mb-8 font-sans text-gray-600'>
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </div>

          <div className='flex flex-col  sm:flex-row gap-5 mb-5'>
            {aboutus.map((el, i) => (
              <div key={i.toString()} className='flex flex-col gap-3'>
                <div className='text-red-500'>{el.icon}</div>
                <div className='text-2xl font-bold text-left'>{el.title}</div>
                <div className='text-left mb-8 font-sans text-gray-600'>
                  {el.content}
                </div>
              </div>
            ))}
          </div>
          <div className='bg-red-500 text-base font-semibold text-white px-5 py-4 sm:w-48'>
            Explore More
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
