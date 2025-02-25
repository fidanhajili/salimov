import Slider from "./client-slider";
import Footer from "./footerforpages";
import HeaderForPages from "./headerforpages";


const Career = () => {
    return (
    <>
    <HeaderForPages />
    <div className="career-center">
<div className="career">
<h1>Karyera Mərkəzi</h1>
  
  <img src="assets/career/career-center1.svg" alt="" />
  <img src="assets/career/career-center.svg" alt="" />
  <img src="assets/career/career-center2.svg" alt="" className="img-3"/>

</div>
<div className="row d-flex career-cards1 pb-4">
    <div className="career-left1 col-12 col-lg-5 ms-4 mt-5">
<div className="career-card card1">
    <h4>Beynəlxalq Diplom</h4>
    <h6>Məzunlar beynəlxalq səviyyədə tanınan diplom əldə edərək qlobal əmək bazarında üstünlük qazanır</h6>
</div>
    </div>
    <div className="career-right1 col-12 col-lg-6">
<div className="career-img1">
<img src="assets/career/career-icon.svg" alt="" />
</div>
    </div>
</div>

<div className="career-cards2 py-4">
<div className="career-card2 career-card">
<h4>Peşəkar Portfolio qurulması</h4>
    <h6>Tələbələrə güclü portfolionun hazırlanması üçün dəstək verilir, bacarıqlarının effektiv təqdimatı təmin edilir.</h6>

</div>
</div>

<div className="career-cards3 py-4">
<div className="row d-flex">

    <div className="career-left2 col-12 col-lg-6">
<div className="career-img2">
<img src="assets/career/career-img2.svg" alt="" />
</div>
    </div>

    <div className="career-right2 col-12 col-lg-5 ms-4 mt-5">
<div className="career-card">
    <h4>Təcrübə Qazanma İmkanı</h4>
    <h6>Yerli və beynəlxalq şirkətlərlə əməkdaşlıq edərək tələbələrə real iş təcrübəsi imkanı yaradılır.</h6>
</div>
    </div>


</div>
</div>


<div className="career-cards4 py-4">
<div className="career-card4 career-card">
<h4>Cv Hazırlanması</h4>
    <h6>Mərkəzimiz, CV və motivasiya məktublarının hazırlanmasında fərdlərə dəstək verir, onları peşəkar və cəlbedici etmək üçün tövsiyələr təqdim edir.</h6>

</div>
</div>


<div className="career-cards5 py-5">
<div className="row d-flex">

    <div className="career-left5 col-12 col-lg-6">
    <div className="career-card">
    <h4>Vakansiyalar Haqqında Daimi Məlumat</h4>
    <h6>İştirakçılar yeni vakansiyalar haqqında mütəmadi olaraq məlumatlandırılır, bu da onların iş imkanlarını artırır.</h6>
</div>
    </div>

    <div className="career-right5 col-12 col-lg-5">
<button>Bizimlə Əlaqə</button>
    </div>


</div>
</div>



{/* partners */}
<h2 className="text-center py-5 mt-5">Partnyorlarımız</h2>
<Slider />


{/* partners */}

{/* footer */}
<Footer />
{/* footer */}
    </div>
    </>
    );
  };
  
  export default Career;
  