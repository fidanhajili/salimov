import React from 'react'
import HeaderForPages from './headerforpages'
import Footer from './footerforpages'

const agile = () => {
  return (
   <>
   <HeaderForPages />

   <div className="java-container">
<h1 className='text-center'>Java</h1>
<img src="./assets/about-pages/agile-bg.svg" alt="" />

<h2 className='text-center'>Java proqramlaşdırma dili, geniş tətbiq sahəsi və güclü icra mühiti ilə</h2>


<div className="java-card java-card1">
<div className="row">

<div className="col-12 col-lg-3">
    <img src="./assets/about-pages/agile-card1.svg" alt="" />
</div>

<div className="col-12 col-lg-9">
    <h3><span>J</span>ava, obyekt yönümlü və platformadan asılı olmayan <br />bir dil olaraq geniş tətbiq sahələrinə sahibdir. Bu dilin əsas xüsusiyyəti onun "bir dəfə yaz, hər yerdə çalışdır"  </h3>
</div>

</div>
</div>

<div className="java-card java-card2">
<div className="row">

<div className="col-12 col-lg-9">
    <h3>
    Java istifadə edərək JSP (Java Server Pages), Servlets və ya Spring Framework kimi müasir texnologiyalarla dinamik veb saytları və veb tətbiqləri yaratmaq mümkündür.
    Mobil Tətbiqlər: Android əməliyyat sistemi Java üzərində qurulmuşdur. Android tətbiqləri yazmaq üçün Java və Kotlin dilləri geniş şəkildə istifadə olunur.
    </h3>
</div>

<div className="col-12 col-lg-3">
<img src="./assets/about-pages/agile-card2.svg" alt="" />
</div>

</div>
</div>


<div className="java-contact">
<button>Bizimlə əlaqə</button>
</div>
   </div>
   
   <Footer />
   </>
  )
}

export default agile