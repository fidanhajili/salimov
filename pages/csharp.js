import React from 'react'
import HeaderForPages from './headerforpages'
import Footer from './footerforpages'

const csharp = () => {
  return (
   <>
   <HeaderForPages />

   <div className="java-container">
<h1 className='text-center'>C#</h1>
<img src="./assets/about-pages/csharp-bg.svg" alt="" />

<h2 className='text-center'>C# Dərsi: Proqramlaşdırmaya Giriş</h2>


<div className="java-card java-card1">
<div className="row">

<div className="col-12 col-lg-3 mt-5">
    <img src="./assets/about-pages/csharp-card1.svg" alt="" />
</div>

<div className="col-12 col-lg-9">
    <h3><span>C</span># <br />Microsoft tərəfindən inkişaf etdirilən, obyekt-yönümlü proqramlaşdırma dilidir. Bu dil, .NET platformasında istifadə edilir və geniş tətbiq sahələrinə malikdir, məsələn, veb tətbiqləri, masaüstü proqramları və oyunlar.</h3>
</div>

</div>
</div>

<div className="java-card java-card2">
<div className="row">

<div className="col-12 col-lg-9">
    <h3>
    Niyə C#?
    <ul>
        <li>Yüksək Tələb: C# proqramçılarına olan tələbat sürətlə artır.</li>
        <li>Çoxsaylı Tətbiq Sahələri: Veb, mobil və oyun inkişafı üçün istifadə olunur.</li>
        <li>Güclü Alətlər: Visual Studio kimi mükəmməl inkişaf mühitləri ilə təchiz olunub.</li>
    </ul>

</h3>
</div>

<div className="col-12 col-lg-3">
<img src="./assets/about-pages/csharp-card2.svg" alt="" />
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

export default csharp