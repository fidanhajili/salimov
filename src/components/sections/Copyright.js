const Copyright = () => {
  return (
    <section className="copyright">
      <img
        alt=""
        className="z-1 hide-mobile"
        src="assets/separator.png"
      />
      <div>
        <span> © Baku Development Center  {new Date().getFullYear()} </span>
        <span>
      
         
        </span>
        <ul>
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
    </section>
  );
};
export default Copyright;
