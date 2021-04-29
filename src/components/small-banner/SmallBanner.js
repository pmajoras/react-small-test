import "./SmallBanner.scss";

function SmallBanner(props) {
  const { leftBanner, rightBanner } = props.new;

  return (
    <div class="small-banner-container">
      <div class="row">
        <div class="col-6 small-banner banner-divider">
          <div class="banner-image">
            <img alt={leftBanner.image.alt} src={leftBanner.image.url}></img>
          </div>

          <div class="texts-container">
            <p class="title">{leftBanner.title}</p>
            <p class="subtitle">{leftBanner.subtitle}</p>
          </div>
        </div>
        <div class="banner-divider"></div>
        <div class="col-6 small-banner">
          <div class="banner-image">
            <img alt={rightBanner.image.alt} src={rightBanner.image.url}></img>
          </div>

          <div class="texts-container">
            <p class="title">{rightBanner.title}</p>
            <p class="subtitle">{rightBanner.subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmallBanner;
