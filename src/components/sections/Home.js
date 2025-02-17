const Home = () => {
  return (
    <section className="home video-background" id="home">
      <video autoPlay loop muted playsInline className="background-video">
        <source src="assets/development-bg.mp4" type="video/mp4" />
        Tarayıcınız video etiketini desteklemiyor.
      </video>
      <div className="content">
        <div className="position-relative">
          <h1>
            <span>
              <span className="animated-layer center"></span>
            </span>
            <span className="position-relative">
              <span className="animated-layer development"></span>
            </span>
            <span>
              <span className="animated-layer baku"></span>
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Home;