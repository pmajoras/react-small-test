const loadMoreNews = () => {
  const firstRandomId = Math.floor(Math.random() * 10000);
  const secondRandomId = Math.floor(Math.random() * 10000);

  return {
    type: "home/loadMoreNews",
    payload: [
      {
        id: firstRandomId.toString(),
        leftBanner: {
          image: {
            url: "https://www.northwestern.edu/images/jewett190.jpg",
            alt:
              "See how Northwestern researchers and others are making a difference",
          },
          title: `On the Front Lines of COVID-19 - ${firstRandomId}`,
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
      {
        id: secondRandomId.toString(),
        leftBanner: {
          image: {
            url: "https://www.northwestern.edu/images/jewett190.jpg",
            alt:
              "See how Northwestern researchers and others are making a difference",
          },
          title: `On the Front Lines of COVID-19 - ${secondRandomId}`,
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
  };
};

export default {
  loadMoreNews,
};
