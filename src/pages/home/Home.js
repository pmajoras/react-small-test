import "./Home.scss";
import Space from "../../components/space/Space";
import MainSection from "./main-section/MainSection";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import homeActions from "./state/homeActions";

const homeStateSelector = createSelector(
  (state) => state.home,
  (homeState) => homeState
);

function HomePage() {
  const homeState = useSelector(homeStateSelector);
  const dispatch = useDispatch();
  const onLoadMore = () => dispatch(homeActions.loadMoreNews());

  return (
    <div class="container-fluid">
      <Space />
      <MainSection
        mainSection={homeState.mainSection}
        onLoadMore={onLoadMore}
      />
    </div>
  );
}

export default HomePage;
