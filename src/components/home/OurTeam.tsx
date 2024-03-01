const OurTeam = () => {
  const team = [
    {
      imgurl: 'https://themewagon.github.io/logistica/img/team-1.jpg',
      name: 'Full Name',
    },
    {
      imgurl: 'https://themewagon.github.io/logistica/img/team-2.jpg',
      name: 'Full Name',
    },
    {
      imgurl: 'https://themewagon.github.io/logistica/img/team-3.jpg',
      name: 'Full Name',
    },
    {
      imgurl: 'https://themewagon.github.io/logistica/img/team-4.jpg',
      name: 'Full Name',
    },
  ];
  return (
    <div className='px-8 mt-40 w-full h-full'>
      <div className=' text-center uppercase text-base font-bold mb-3 text-[#51D6F3]'>
        OUR TEAM
      </div>
      <div className='mb-12 text-4xl font-bold text-center'>
        Expert Team Members
      </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-6 '>
        {team.map((el, i) => (
          <div className='bg-white p-6 '>
            <img src={el.imgurl} alt='Team Member' className='' />
            <div className='text-left font-bold text-xl mt-5'>{el.name}</div>
            <div className='text-left text-gray-600 '>Designation</div>

            <div className='p-3 bg-red-500 w-12 h-10 items-center border rounded-r-full mt-6 mb-2'>
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

export default OurTeam;
