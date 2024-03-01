const PricingPlan = () => {
  const plans = [
    {
      title: 'Basic Plan',
      amount: '99.00',
      content: [
        'HTML5 & CSS3',
        'Bootstrap v5',
        'FontAwesome Icons',
        'Responsive Layout',
        'Cross-browser Support',
      ],
    },
    {
      title: 'Standard Plan',
      amount: '99.00',
      content: [
        'HTML5 & CSS3',
        'Bootstrap v5',
        'FontAwesome Icons',
        'Responsive Layout',
        'Cross-browser Support',
      ],
    },
    {
      title: 'Advanced Plan',
      amount: '99.00',
      content: [
        'HTML5 & CSS3',
        'Bootstrap v5',
        'FontAwesome Icons',
        'Responsive Layout',
        'Cross-browser Support',
      ],
    },
  ];
  return (
    <div className='px-8 mt-40'>
      <div className=' text-center uppercase text-base font-bold mb-3 text-[#51D6F3]'>
        PRICING PLAN
      </div>
      <div className='mb-12 text-4xl font-bold text-center'>
        Perfect Pricing Plan
      </div>
      <div className='grid md:grid-cols-3 gap-6'>
        {plans.map((el, i) => (
          <div className='bg-white'>
            <div className=' border-b p-6'>
              <div className='text-xl font-bold text-left mb-3 text-red-500'>
                {el.title}
              </div>
              <div className='text-left flex items-center font-bold '>
                <div className='text-lg'>$</div>
                <div className='text-4xl '>{el.amount}</div>
                <sub className='text-lg '> / Month</sub>
              </div>
            </div>
            <div className='p-6'>
              <div className='flex flex-col gap-3 font-sans text-left text-gray-600 mb-8'>
                {el.content.map((el) => (
                  <div className='flex items-center gap-3'>
                    <div className=''>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 16 16'
                        fill='currentColor'
                        className='w-4 h-4 fill-emerald-700'
                      >
                        <path
                          fillRule='evenodd'
                          d='M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </div>
                    <div>{el}</div>
                  </div>
                ))}
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlan;
