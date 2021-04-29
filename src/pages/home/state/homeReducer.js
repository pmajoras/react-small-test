const initialState = {
  mainSection: {
    banner: {
      image: {
        url: "https://www.northwestern.edu/images/hero/illinois1440.jpg",
        alt: "grass-image",
      },
      title: "Local Crisis",
      subtitle:
        "Northwestern scientists contribute to assessment of how climate change is transforming Illinois.",
    },
    news: [
      {
        id: "1",
        leftBanner: {
          image: {
            url: "https://www.northwestern.edu/images/jewett190.jpg",
            alt:
              "See how Northwestern researchers and others are making a difference",
          },
          title: "On the Front Lines of COVID-19",
          subtitle:
            "See how Northwestern researchers and others are making a difference",
        },
        rightBanner: {
          image: {
            url: "https://www.northwestern.edu/images/video-meeting1.jpg",
            alt:
              "A person using a laptop to have a video conferencing call with four people",
          },
          title: "Staying Connected While Apart",
          subtitle:
            "Participate in virtual activities, locate resources and connect",
        },
      },
    ],
  },
};

export default function homeReducer(state = initialState, action) {
  switch (action.type) {
    case "home/loadMoreNews":
      const news = (state.mainSection.news || []).concat(action.payload);

      return {
        ...state,
        mainSection: {
          ...state.mainSection,
          ...{ news },
        },
      };

    default:
      return state;
  }
}
