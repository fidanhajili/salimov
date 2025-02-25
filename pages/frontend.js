import React from 'react'
import HeaderForPages from './headerforpages'
import Footer from './footerforpages'

const frontend = () => {
  return (
<>

<HeaderForPages />

<div className="java-container">
<h1 className='text-center'>Frontend</h1>
<img src="./assets/about-pages/frontend-bg.svg" alt="" />

<h2 className='text-center'>Veb İnkişafına İlk Addımlar - Frontend Dizayn və Proqramlaşdırma</h2>


<div className="java-card java-card1">
<div className="row">

<div className="col-12 col-lg-3 mt-4">
 <img src="./assets/about-pages/frontend-card1.svg" alt="" />
</div>

<div className="col-12 col-lg-9">
 <h3><span>F</span>rontend inkişafı vebsaytların istifadəçilərə <br />görünən hissəsini yaratmağa yönələn bir sahədir və əsasən HTML, CSS və JavaScript kimi texnologiyalardan istifadə edilir. </h3>
</div>

</div>
</div>

<div className="java-card java-card2">
<div className="row">

<div className="col-12 col-lg-9">
 <h3>

 JavaScript: Veb səhifələrə interaktivlik qatır. Əsas proqramlaşdırma anlayışları ilə səhifədə elementləri dəyişdirməyi və hadisələrə cavab verməyi öyrədir (məsələn, düyməyə basmaqla interaktiv fəaliyyət).
Frontend Alətləri: Bootstrap kimi hazır komponentlər və React.js kimi JavaScript kitabxanaları ilə daha mürəkkəb və dinamik veb tətbiqlər yaratma imkanı verir.</h3>
</div>

<div className="col-12 col-lg-3 mt-5">
<img src="./assets/about-pages/frontend-card2.svg" alt="" />
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

export default frontend