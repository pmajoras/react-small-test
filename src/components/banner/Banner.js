import "./Banner.scss";

function Banner(props) {
  return (
    <div class="banner-container">
      <img alt={props.image.alt} src={props.image.url}></img>
      <div class="banner-overlay">
        <div class="banner-texts-container">
          <h1 class="banner-title">{props.title}</h1>

          <p class="banner-sub-title">{props.subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
