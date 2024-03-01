const OurServices = () => {
  const services = [
    {
      imgurl: 'https://themewagon.github.io/logistica/img/service-1.jpg',
      title: 'Air Freight',
      content:
        'Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.',
    },
    {
      imgurl: 'https://themewagon.github.io/logistica/img/service-2.jpg',
      title: 'Ocean Freight',
      content:
        'Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.',
    },
    {
      imgurl: 'https://themewagon.github.io/logistica/img/service-3.jpg',
      title: 'Road Freight',
      content:
        'Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.',
    },
    {
      imgurl: 'https://themewagon.github.io/logistica/img/service-4.jpg',
      title: 'Train Freight',
      content:
        'Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.',
    },
    {
      imgurl: 'https://themewagon.github.io/logistica/img/service-5.jpg',
      title: 'Customs Clearance',
      content:
        'Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.',
    },
    {
      imgurl: 'https://themewagon.github.io/logistica/img/service-6.jpg',
      title: 'Warehouse Solutions',
      content:
        'Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.',
    },
  ];
  return (
    <div className='px-8'>
      <div className=' text-center uppercase text-base font-bold mb-3 text-[#51D6F3]'>
        Our Services
      </div>
      <div className='mb-12 text-4xl font-bold text-center'>
        Explore Our Services
      </div>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {services.map((el, i) => (
          <div className='bg-white p-6'>
            <img src={el.imgurl} className='mb-5' />
            <div className='text-2xl font-bold text-left mb-3'>{el.title}</div>
            <div className='font-sans text-left text-gray-600 mb-5'>
              {el.content}
            </div>
            <div className='p-3 bg-red-500 w-12 h-10 items-center border rounded-r-full mb-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                className='w-5 h-5 fill-white'
              >
                <path
                  fillRule='evenodd'
                  d='M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
