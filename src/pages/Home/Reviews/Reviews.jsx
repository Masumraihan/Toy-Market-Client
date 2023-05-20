import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { ClipLoader } from "react-spinners";
import { Rating } from "@smastrom/react-rating";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://learlab-server-assignement.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <div className='container mx-auto my-10'>
      <div className='divider text-gray-400'>Our Costumer Reviews</div>
      <h1 className='text-4xl text-center font-bold mb-10'>Customer Reviews</h1>
      {reviews.length === 0 && (
        <div className='text-center my-52'>
          <ClipLoader color='#08a5eb' />
        </div>
      )}
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className='mySwiper'
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className='w-full max-w-sm h-96 bg-white border border-gray-200 rounded-lg p-4 shadow mb-8'>
                <>
                  <img
                    className='rounded-lg h-48 mb-5 w-full'
                    src={review?.image}
                    alt={review?.author}
                  />
                </>
                <div className='px-5 pb-5'>
                  <div className='flex items-center justify-between mb-4'>
                    <h5 className='text-xl font-semibold tracking-tight  text-gray-900'>
                      {review?.author}
                    </h5>
                    <Rating
                      readOnly
                      style={{ maxWidth: 100 }}
                      value={review?.rating}
                    />
                  </div>
                  <p>{review?.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
