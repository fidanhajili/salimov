import Link from "next/link";
import React from 'react';

const HeaderForPages = () => {
  return (
    <div className='header-page'>
    <div className="header-logo">
    <span id="home-link">
                 <p>B <span className="mx-1">D</span> C</p>
                </span>

                <div className="nav-links">
 <a>
                <span id="about-link">Tədris</span>
                </a>
                <a>
                <span id="portfolio-link">Haqqımızda</span>
                </a>
                <a>
                <span id="contact-link">İnstrukturlar</span>
                </a>
                <a>
                <span id="blog-link">Əlaqə</span>
                </a>
    </div>

    </div>


 

    <div className="mail mt-2">
          <p>
            <button className="apply-now-btn">Müraciət et</button>

            {/* Karyera Mərkəzi düyməsi Link ilə */}
            <Link href="/career">
              <button className="career-center-btn">
                <span className="circle"></span>Karyera Mərkəzi
              </button>
            </Link>
          </p>
        </div>
    </div>
  );
};


export default HeaderForPages;
