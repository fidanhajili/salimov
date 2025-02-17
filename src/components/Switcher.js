import Head from "next/head";
import { Fragment } from "react";

// Sabit bir renk belirliyoruz, bu durumda "yellow" renk sabit kalacak.
const color = "purple"; 

const Switcher = () => {
  return (
    <Fragment>
      <Head>
        {/* Sabit renk için sadece bir link ekliyoruz */}
        <link rel="stylesheet" href={`css/skins/${color}.css`} />
      </Head>
      <div
        id="switcher"
        className="close" // Bu kısımdaki toggle'ı kaldırdık çünkü renk değişimi yapılmayacak.
        style={{ display: "none" }} // switcher'ı gizli tutuyoruz.
      >
        <div className="content-switcher">
          <h4>COLOR SWITCHER</h4>
          <ul>
            <li>
              <a href="#" title={color} className="color">
                {/* Sadece sabit renk için görseli ekliyoruz */}
                <img
                  src={`assets/styleswitcher/${color}.png`}
                  alt={color}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        id="showSwitcher"
        className="styleSecondColor close" // Bu da açıkken gizli olacak
        style={{ display: "none" }} // switcher butonunu da gizli yapıyoruz.
      >
        <i className="fa fa-cog" />
      </div>
    </Fragment>
  );
};

export default Switcher;
