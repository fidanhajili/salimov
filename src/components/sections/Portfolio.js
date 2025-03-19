import { salimovSlider } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const Portfolio = () => {
  return (
    <section
      className="portfolio main-section flex-column-mobile"
      id="new-contact"
    >
      {/* TITLE STARTS */}
      <div className="custom-title">
        {/* MAIN TITLE STARTS */}
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
            İnstruktorlar
            </span>
          </span>
        </h3>
        {/* MAIN TITLE ENDS */}
      </div>
      {/* TITLE ENDS */}
      <Swiper
        {...salimovSlider.portfolio}
        className="swiper swiper-portfolio animated-layer fade-in-right-animation fadeInUp wow"
        data-wow-offset={200}
      >
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <img
              className="img-fluid"
              src="assets/trainers/trainer-sadiq.svg"
              alt="Image Project"
            />
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>Fərəməz Bağırov</h4>
            <div>
              <ul>
                <li>
                  <span>
<img src="assets/portfolio/icon1.svg" alt="" />             
     </span>
                  <span>Frontend Developer</span>
                </li>
                <li>
                  <span>
                  <img src="assets/portfolio/icon2.svg" alt="" />   
                  </span>
                  <span>8 il təcrübə</span>
                </li>

              </ul>
            </div>
            <a href="#" target="_blank" className="custom-btn">
              <span>
              Ətraflı <img src="assets/portfolio/icon3.svg" alt="" className="ms-4"/>
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
      
   {/* PORTFOLIO ITEM STARTS */}
   <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <img
              className="img-fluid"
              src="assets/trainers/trainer-erestun.svg.jpg"
              alt="Image Project"
            />
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>Ərəstun Axundzadə</h4>
            <div>
              <ul>
                <li>
                  <span>
<img src="assets/portfolio/icon1.svg" alt="" />             
     </span>
                  <span>Data Analyst</span>
                </li>
                <li>
                  <span>
                  <img src="assets/portfolio/icon2.svg" alt="" />   
                  </span>
                  <span>9 il təcrübə</span>
                </li>

              </ul>
            </div>
            <a href="#" target="_blank" className="custom-btn">
              <span>
              Ətraflı <img src="assets/portfolio/icon3.svg" alt="" className="ms-4"/>
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}

           {/* PORTFOLIO ITEM STARTS */}
           <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <img
              className="img-fluid"
              src="assets/trainers/trainer-dosteli.svg"
              alt="Image Project"
            />
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>Dostəli Musazadə</h4>
            <div>
              <ul>
                <li>
                  <span>
<img src="assets/portfolio/icon1.svg" alt="" />             
     </span>
                  <span>Java Developer</span>
                </li>
                <li>
                  <span>
                  <img src="assets/portfolio/icon2.svg" alt="" />   
                  </span>
                  <span>7 il təcrübə</span>
                </li>

              </ul>
            </div>
            <a href="#" target="_blank" className="custom-btn">
              <span>
              Ətraflı <img src="assets/portfolio/icon3.svg" alt="" className="ms-4"/>
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}

           {/* PORTFOLIO ITEM STARTS */}
           <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <img
              className="img-fluid"
              src="assets/trainers/trainer-neman.svg"
              alt="Image Project"
            />
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>Neman Musayev</h4>
            <div>
              <ul>
                <li>
                  <span>
<img src="assets/portfolio/icon1.svg" alt="" />             
     </span>
                  <span>Frontend Developer</span>
                </li>
                <li>
                  <span>
                  <img src="assets/portfolio/icon2.svg" alt="" />   
                  </span>
                  <span>4 il təcrübə</span>
                </li>

              </ul>
            </div>
            <a href="#" target="_blank" className="custom-btn">
              <span>
              Ətraflı <img src="assets/portfolio/icon3.svg" alt="" className="ms-4"/>
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}

     {/* PORTFOLIO ITEM STARTS */}
     <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <img
              className="img-fluid"
              src="assets/portfolio/project-1.jpg"
              alt="Image Project"
            />
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>Sadiq Əliyev</h4>
            <div>
              <ul>
                <li>
                  <span>
<img src="assets/portfolio/icon1.svg" alt="" />             
     </span>
                  <span>Back-End Developer</span>
                </li>
                <li>
                  <span>
                  <img src="assets/portfolio/icon2.svg" alt="" />   
                  </span>
                  <span>7 il təcrübə</span>
                </li>

              </ul>
            </div>
            <a href="#" target="_blank" className="custom-btn">
              <span>
              Ətraflı <img src="assets/portfolio/icon3.svg" alt="" className="ms-4"/>
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}

        <div className="nav-item next-item animated-btn">
          <span />
        </div>
        <div className="nav-item prev-item animated-btn">
          <span />
        </div>
      </Swiper>
     
    </section>
  );
};
export default Portfolio;
