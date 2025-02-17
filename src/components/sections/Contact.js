const Contact = () => {
  return (
    <section className="contact main-section flex-column-mobile" id="new-blog">
      {/* TITLE STARTS */}
      <div className="custom-title">
        {/* MAIN TITLE STARTS */}
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
            Əlaqə quraq
            </span>
          </span>
        </h3>
        {/* MAIN TITLE ENDS */}
      </div>
      {/* TITLE ENDS */}
      {/* CONTACTS STARTS */}
      <div className="boxes">
        <div>
          {/* CONTACT ITEM STARTS */}
          <div className="animated-layer fade-in-down-animation fadeInUp wow">
            <i className="fa fa-phone" />
            <p>
              <span className="small-text">Telefon</span>
              +994 55 253 00 30 <br />
              +994 12 510 37 74
            </p>
          </div>
          {/* CONTACT ITEM ENDS */}
          {/* CONTACT ITEM STARTS */}
          <div className="animated-layer fade-in-up-animation fadeInUp wow">
            <i className="fa fa-location-dot" />
            <p>
              <span className="small-text">Ünvan</span>
              Bakı, Behbud Şaxtaxtinski 66/3
            </p>
          </div>
          {/* CONTACT ITEM ENDS */}
        </div>
        <div>
          {/* CONTACT ITEM STARTS */}
          <div className="animated-layer fade-in-down-animation fadeInUp wow">
            <i className="fa fa-envelope" />
            <p>
              <span className="small-text">Email</span>
              Bakudevelopmentcenter@gmail.com
            </p>
          </div>
          {/* CONTACT ITEM ENDS */}
          {/* CONTACT ITEM STARTS */}
          <div className="animated-layer fade-in-up-animation fadeInUp wow">
            <i className="fa fa-share-nodes" />
            <span className="small-text">Bizi İzlə</span>
            <ul className="social">
            <li>
            <a href="#">
            <i class="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#">
            <i class="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="#">
            <i class="fa-brands fa-x-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
            <i class="fa-brands fa-facebook"></i>
            </a>
          </li>
            </ul>
          </div>
          {/* CONTACT ITEM ENDS */}
        </div>
      </div>
      {/* CONTACTS ENDS */}
     
    </section>
  );
};
export default Contact;
