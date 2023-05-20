import React from "react";

const Banner = () => {
  return (
    <div className='carousel min-h-[80vh] w-full'>
      <div id='slide1' className='carousel-item relative w-full z-40'>
        <div
          className='hero '
          style={{
            backgroundImage: `url("https://www.bruder.de/fileadmin/_processed_/c/d/csm_Harvester_Desktop_2_b3686a9037.jpg")`,
          }}
        >
          <div className='hero-overlay bg-opacity-60'></div>
          <div className='hero-content text-neutral-content'>
            <div className='h-full w-[900px] bg-[#08a5eb] absolute skew-x-[-48deg] origin-bottom-left -translate-x-full left-0'></div>
            <div  data-aos="fade-up" className='z-10 max-w-xl'>
              <h1 className='mb-5 text-5xl font-bold'>
                Discover the Joy of Learning Through Play
              </h1>
              <p className='mb-5'>
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn-regular">Learn More</button>
            </div>
          </div>
        </div>
        <div className='absolute flex justify-between transform md:-translate-y-1/2 md:left-5 right-5 md:top-1/2 bottom-5 md:bottom-auto gap-5'>
          <a href='#slide4' className='btn btn-circle'>
            ❮
          </a>
          <a href='#slide2' className='btn btn-circle'>
            ❯
          </a>
        </div>
      </div>
      <div id='slide2' className='carousel-item relative w-full z-30'>
        <div
          className='hero '
          style={{
            backgroundImage: `url("https://www.bruder.de/fileadmin/_processed_/b/a/csm_Service_2060x670_Desktop_6172bec8ed.jpg")`,
          }}
        >
          <div className='hero-overlay bg-opacity-60'></div>
          <div className='hero-content text-neutral-content'>
            <div className='h-full -z-4 w-[900px] bg-[#08a5eb] absolute skew-x-[-48deg] origin-bottom-left -translate-x-full left-0'></div>
            <div className='z-10 max-w-xl'>
              <h1 className='mb-5 text-5xl font-bold'>
                Elevate Education with Engaging Toys{" "}
              </h1>
              <p className='mb-5'>
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn-regular">Learn More</button>
            </div>
          </div>
        </div>
        <div className='absolute flex justify-between transform md:-translate-y-1/2 md:left-5 right-5 md:top-1/2 bottom-5 md:bottom-auto gap-5'>
          <a href='#slide1' className='btn btn-circle'>
            ❮
          </a>
          <a href='#slide3' className='btn btn-circle'>
            ❯
          </a>
        </div>
      </div>
      <div id='slide3' className='carousel-item relative w-full z-20'>
        <div
          className='hero '
          style={{
            backgroundImage: `url("https://www.bruder.de/fileadmin/_processed_/e/e/csm_Camper_neu_Desktop_a2326544c4.jpg")`,
          }}
        >
          <div className='hero-overlay bg-opacity-60'></div>
          <div className='hero-content text-neutral-content'>
            <div className='h-full w-[900px] bg-[#08a5eb] absolute skew-x-[-48deg] origin-bottom-left -translate-x-full left-0'></div>
            <div className='z-10 max-w-xl'>
              <h1 className='mb-5 text-5xl font-bold'>
                Building Bright Futures One Toy at a Time
              </h1>
              <p className='mb-5'>
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn-regular">Learn More</button>
            </div>
          </div>
        </div>
        <div className='absolute flex justify-between transform md:-translate-y-1/2 md:left-5 right-5 md:top-1/2 bottom-5 md:bottom-auto gap-5'>
          <a href='#slide2' className='btn btn-circle'>
            ❮
          </a>
          <a href='#slide4' className='btn btn-circle'>
            ❯
          </a>
        </div>
      </div>
      <div id='slide4' className='carousel-item relative w-full'>
        <div
          className='hero '
          style={{
            backgroundImage: `url("https://www.bruder.de/fileadmin/_processed_/c/8/csm_Beach_desktop_2060x670_412b586e0b.jpg")`,
          }}
        >
          <div className='hero-overlay bg-opacity-60'></div>
          <div className='hero-content text-neutral-content'>
            <div className='h-full w-[900px] bg-[#08a5eb] absolute skew-x-[-48deg] origin-bottom-left -translate-x-full left-0'></div>
            <div className='z-10 max-w-xl'>
              <h1 className='mb-5 text-5xl font-bold'>
                Play, Learn, and Grow Together
              </h1>
              <p className='mb-5'>
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn-regular">Learn More</button>
            </div>
          </div>
        </div>
        <div className='absolute flex justify-between transform md:-translate-y-1/2 md:left-5 right-5 md:top-1/2 bottom-5 md:bottom-auto gap-5'>
          <a href='#slide3' className='btn btn-circle'>
            ❮
          </a>
          <a href='#slide1' className='btn btn-circle'>
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
