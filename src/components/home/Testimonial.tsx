import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import '../../App.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { useState } from 'react';
import clsx from 'clsx';
// import 'swiper/css/bundle';

const Testimonial = () => {
  const testimonial = [
    {
      imgurl: 'https://themewagon.github.io/logistica/img/testimonial-1.jpg',
      name: 'Client Name',
      content:
        'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit',
    },
    {
      imgurl: 'https://themewagon.github.io/logistica/img/testimonial-2.jpg',
      name: 'Client Name',
      content:
        'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit',
    },
    {
      imgurl: 'https://themewagon.github.io/logistica/img/testimonial-3.jpg',
      name: 'Client Name',
      content:
        'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit',
    },
    {
      imgurl: 'https://themewagon.github.io/logistica/img/testimonial-4.jpg',
      name: 'Client Name',
      content:
        'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit',
    },
  ];

  const [activeIdx, setActiveIdx] = useState<number>(0);
  return (
    <>
      <div className='px-8 mt-40 w-full h-full'>
        <div className=' text-center uppercase text-base font-bold mb-3 text-[#51D6F3]'>
          TESTIMONIAL
        </div>
        <div className='mb-12 text-4xl font-bold text-center'>
          Our Clients Say!
        </div>
        <div className=''>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className='mySwiper'
            grabCursor={true}
            onSlideChange={(swiper: any) => {
              console.log('slide change', swiper.realIndex);
              setActiveIdx(swiper.realIndex === 3 ? 0 : swiper.realIndex + 1);
            }}
            onSwiper={(swiper: any) => {
              console.log('hiiiiii', swiper);
            }}
            loop
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              // When window width is <= 480px
              480: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              300: {
                slidesPerView: 1,
              },
              200: {
                slidesPerView: 1,
              },
            }}
          >
            {testimonial.map((el, i) => (
              <SwiperSlide className={clsx(' mb-10 p-4', 'bg-white')}>
                {/* {JSON.stringify(i)} */}
                <div className='flex gap-3 items-end mb-5'>
                  <div>
                    <img
                      src={el.imgurl}
                      alt='Testimonial Image'
                      className='w-full h-full'
                    />
                  </div>
                  <div className=''>
                    <div className='text-xl font-bold text-left'>{el.name}</div>
                    <div className='font-sans text-left text-gray-600 text-lg'>
                      {'Profession'}
                    </div>
                  </div>
                </div>
                <div className='font-sans text-left text-gray-600 text-lg'>
                  {el.content}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>{' '}
    </>
  );
};

export default Testimonial;
