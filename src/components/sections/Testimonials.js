


import { salimovSlider } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials = () => {
  return (
    <section className="testimonials clients">
              <div className="custom-title">
   {/* MAIN TITLE STARTS */}
   <h3>
    <span>
      <span className="animated-layer fade-in-left-animation fadeInUp wow">
       Tələbə Rəyləri
       </span>
     </span>
   </h3>
   {/* MAIN TITLE ENDS */}
 </div>
      <div className="testimonials-container animated-layer fade-in-right-animation fadeInUp wow">

        <Swiper
          {...salimovSlider.testimonials}
          className="swiper swiper-clients fadeInUp wow"
        >
          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
             {/* TESTIMONIAL ITEM STARTS */}
   <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
     <div>
       <p>
        <span className="quote">
        "Kurs çox faydalı və maraqlı idi! Öyrəndiyim biliklər sayəsində artıq öz layihələrimi yaratmağa başladım. Tövsiyə edirəm!"
        </span>
        <span className="person">Əli Səfərov</span>
        <span className="job">Backend Developer</span>
       </p>
      <img src="assets/testimonials/image1.svg" alt="" />
     </div>
   </div>
   {/* TESTIMONIAL ITEM ENDS */}
          </SwiperSlide>
          {/* SWIPER ITEM ENDS */}
          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
                  {/* TESTIMONIAL ITEM STARTS */}
   <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
     <div>
       <p>
        <span className="quote">
        "Müəllimlər peşəkar və dəstəkləyicidir. Bu kurs sayəsində biliklərimi artırdım və yeni dostlar qazandım."
        </span>
        <span className="person">Nərgiz Əliyeva</span>
        <span className="job">Frontend Developer</span>
       </p>
      <img src="assets/testimonials/image2.svg" alt="" />
     </div>
   </div>
   {/* TESTIMONIAL ITEM ENDS */}
          </SwiperSlide>
          {/* SWIPER ITEM ENDS */}
          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
               {/* TESTIMONIAL ITEM STARTS */}
   <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
     <div>
       <p>
        <span className="quote">
        "Kursdan çox məmnun qaldım! Real layihələr üzərində işləmək, öyrəndiklərimi tətbiq etmək üçün əla fürsət verdi."
        </span>
        <span className="person">Asya Alizadə</span>
        <span className="job">Java</span>
       </p>
      <img src="assets/testimonials/image3.svg" alt="" />
     </div>
   </div>
   {/* TESTIMONIAL ITEM ENDS */}
          </SwiperSlide>
          {/* SWIPER ITEM ENDS */}
          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
                    {/* TESTIMONIAL ITEM STARTS */}
   <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
     <div>
       <p>
        <span className="quote">
        "Çox şey öyrəndim! Təlim prosesi dinamik idi və hər zaman suallarımıza cavab verildi."
        </span>
        <span className="person">Günel Kərimova</span>
        <span className="job">Backend Developer</span>
       </p>
      <img src="assets/testimonials/image4.svg" alt="" />
     </div>
   </div>
   {/* TESTIMONIAL ITEM ENDS */}
          </SwiperSlide>
          {/* SWIPER ITEM ENDS */}
          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
               {/* TESTIMONIAL ITEM STARTS */}
   <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
     <div>
       <p>
        <span className="quote">
        "Müəllimlər peşəkar və dəstəkləyicidir. Bu kurs sayəsində biliklərimi artırdım və yeni dostlar qazandım."
        </span>
        <span className="person">Nərgiz Əliyeva</span>
        <span className="job">Frontend Developer</span>
       </p>
      <img src="assets/testimonials/image2.svg" alt="" />
     </div>
   </div>
   {/* TESTIMONIAL ITEM ENDS */}
          </SwiperSlide>
          {/* SWIPER ITEM ENDS */}
          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
                  {/* TESTIMONIAL ITEM STARTS */}
   <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
     <div>
       <p>
        <span className="quote">
        "Müəllimlər peşəkar və dəstəkləyicidir. Bu kurs sayəsində biliklərimi artırdım və yeni dostlar qazandım."
        </span>
        <span className="person">Nərgiz Əliyeva</span>
        <span className="job">Frontend Developer</span>
       </p>
      <img src="assets/testimonials/image2.svg" alt="" />
     </div>
   </div>
   {/* TESTIMONIAL ITEM ENDS */}
          </SwiperSlide>
          {/* SWIPER ITEM ENDS */}
    
        </Swiper>
      </div>
     
    </section>
  );
};
export default Testimonials;