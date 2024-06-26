import React from "react";
import CommonCards from "./CommonCards";

const Opportunities = () => {
  const images = [
    {
      title: "College",
      subtitle: "Students",
      image:
        "https://cdn.unstop.com/uploads/images/compete/student.png?d=560x340",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeUc_vQFfkn_y2hFPEHf4u8JV61rIc_nZHka28V_g7lNyCtQQ/viewform",
      small: "open to",
    },
    {
      title: "Working",
      subtitle: "Professionals",
      image:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/63d112f8a025d_professional.png?d=560x340",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeUc_vQFfkn_y2hFPEHf4u8JV61rIc_nZHka28V_g7lNyCtQQ/viewform",
      small: "open to",
    },
    {
      title: "Team",
      subtitle: "Participation",
      image:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/63da479e86649_teams_new.png?d=560x340",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeUc_vQFfkn_y2hFPEHf4u8JV61rIc_nZHka28V_g7lNyCtQQ/viewform",
      small: "with",
    },
    {
      title: "Individual",
      subtitle: "Participation",
      image:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/63da47fe2c821_solo_new.png?d=560x340",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeUc_vQFfkn_y2hFPEHf4u8JV61rIc_nZHka28V_g7lNyCtQQ/viewform",
      small: "with",
    },
  ];

  return (
    <CommonCards
      images={images}
      heading={"Explore Opportunities"}
      content={
        "Participate, Showcase Skills & Gain CV Points through online & offline opportunities of your interest & make your mark!"
      }
      type={"common"}
    />
  );
};

export default Opportunities;
