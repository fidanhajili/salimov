import { useRouter } from "next/router";


const About = () => {
  const router = useRouter();
  return (
    <section className="about main-section flex-column-mobile" id="about">

      {/* SKILLS STARTS */}
      <div className="skills flex-column-mobile m-4">
        {/* TITLE STARTS */}
        <div className="custom-title">
          {/* MAIN TITLE STARTS */}
          <h3>
            <span>
              <span className="animated-layer fade-in-left-animation fadeInUp wow">
                Gələcəyini
              </span>
            </span>
          </h3>
          {/* MAIN TITLE ENDS */}
        </div>
        {/* TITLE ENDS */}
        <div className="skills-content">
          <div>
            {/* SKILL ITEM STARTS */}
            
            <div className="animated-layer fade-in-down-animation fadeInLeft wow"  onClick={() => router.push("/java")} style={{ cursor: "pointer" }}>
              <span>
                <div className="about-img">
                  <img src="assets/about/java.svg" alt="" />
                </div>
              </span>
              <h4>
      Java
    </h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-up-animation fadeInRight wow"  onClick={() => router.push("/frontend")} style={{ cursor: "pointer" }}>
              <span>
                <div className="about-img">
                  <img src="assets/about/frontend.svg" alt="" className="frontend-img" />
                </div>
              </span>
              <h4>Frontend</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
          <div>
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-down-animation fadeInLeft wow" onClick={() => router.push("/csharp")} style={{ cursor: "pointer" }}>
              <span>
                <div className="about-img">
                  <img src="assets/about/csharp.svg" alt="" />
                </div>
              </span>
              <h4>C#</h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-up-animation fadeInRight wow" onClick={() => router.push("/react")} style={{ cursor: "pointer" }}>
              <span>
                <div className="about-img">
                  <img src="assets/about/react.svg" alt="" />
                </div>              </span>
              <h4>React | Next</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
          <div>
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-down-animation fadeInLeft wow" onClick={() => router.push("/agile")} style={{ cursor: "pointer" }}>
              <span>
                <div className="about-img">
                  <img src="assets/about/agile.svg" alt="" />
                </div>              </span>
              <h4>Agile</h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-up-animation fadeInRight wow" onClick={() => router.push("/data")} style={{ cursor: "pointer" }}>
              <span>
                <div className="about-img">
                  <img src="assets/about/data.svg" alt="" />
                </div>              </span>
              <h4>Data Analitika</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
          <div>


          </div>

        </div>
        <div className="custom-title custom-title2">
          {/* MAIN TITLE STARTS */}
          <h3>
            <span>
              <span className="animated-layer fade-in-left-animation fadeInUp wow about-code">
                Kodla
              </span>
            </span>
          </h3>
          {/* MAIN TITLE ENDS */}
        </div>
      </div>

      {/* SKILLS ENDS */}
      {/* RESUME STARTS */}
      <div className="resume flex-column-mobile">
        {/* TITLE STARTS */}
        <div className="custom-title fadeInUp wow" id="new-portfolio">
          {/* MAIN TITLE STARTS */}
          <h3>
            <span>
              <span className="animated-layer fade-in-left-animation">
                Haqqımızda
              </span>
            </span>
          </h3>
          {/* MAIN TITLE ENDS */}
        </div>
        {/* TITLE ENDS */}
        {/* TIMELINE STARTS */}
        <div className="timeline">
          <ol className="animated-layer fade-in-animation">
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-down-animation fadeInUp wow">
                <div className="experience">
                  <h4>Missiyamız</h4>
                  <p>
                    Bizim məqsədimiz, insanların bilik və bacarıqlarını inkişaf etdirmək üçün müasir və effektiv tədris mühitini yaratmaqdır.
                  </p>

                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-up-animation fadeInUp wow">
                <div className="experience">
                  <h4>Fəaliyyət</h4>
                  <p>
                  "4 ildir ki, mərkəzimiz peşəkar təlimlər və praktiki layihələrlə tələbələrə güclü bilik və təcrübə qazandırır. Hədəfimiz, onları gələcəyin uğurlu mütəxəssisləri kimi yetişdirməkdir."            </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-down-animation fadeInUp wow">
                <div className="experience">
                  <h4>Dəyərlərimiz</h4>
                  <p>
                    Bizim məqsədimiz, insanların bilik və bacarıqlarını inkişaf etdirmək üçün müasir və effektiv tədris mühitini yaratmaqdır.
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-up-animation fadeInUp wow">
                <div className="education">
                  <h4>Fərqimiz</h4>
                  <p className="difference">
                  <span class="list-item">Müasir Avadanlıq</span>
  <span class="list-item">Peşəkar Komanda</span>
  <span class="list-item">Real Layihələr </span>
  <span class="list-item">Şirkətlərlə Əlaqələr </span>
  <span class="list-item">Fərdi Yanaşma</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-down-animation fadeInUp wow">
                <div className="education">
                  <h4>Komandamız</h4>
                  <p>
                    Bizim məqsədimiz, insanların bilik və bacarıqlarını inkişaf etdirmək üçün müasir və effektiv tədris mühitini yaratmaqdır.
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            <li />
          </ol>
        </div>
        {/* TIMELINE ENDS */}
      </div>
      {/* RESUME ENDS */}
   
    </section>
  );
};
export default About;
