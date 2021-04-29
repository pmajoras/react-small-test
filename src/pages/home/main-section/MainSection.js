import "./MainSection.scss";
import Banner from "../../../components/banner/Banner";
import SmallBanner from "../../../components/small-banner/SmallBanner";
import Space from "../../../components/space/Space";

const MainSection = (props) => {
  const { banner, news } = props.mainSection;
  const newBanners = news.map((smallNew) => (
    <div key={smallNew.id}>
      <SmallBanner new={smallNew} />
      <Space />
    </div>
  ));

  return (
    <section id="main-section" class="row main-section-container">
      <div class="col-12">
        <Banner
          image={banner.image}
          title={banner.title}
          subtitle={banner.subtitle}
        />
      </div>
      <div class="col-12">{newBanners}</div>
      <div class="col-12">
        <button onClick={props.onLoadMore} class="load-more-button">
          LOAD MORE
        </button>
      </div>
    </section>
  );
};

export default MainSection;
