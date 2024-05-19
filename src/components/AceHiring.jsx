import React from "react";
import CommonCards from "./CommonCards";

const AceHiring = () => {
  const images = [
    {
      title: "",
      subtitle: "",
      image:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/63b4012ca76f0_amazon.png",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeUc_vQFfkn_y2hFPEHf4u8JV61rIc_nZHka28V_g7lNyCtQQ/viewform",
      small: "",
    },
    {
      title: "",
      subtitle: "",
      image:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/63cf9671ebb4f_google.png",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeUc_vQFfkn_y2hFPEHf4u8JV61rIc_nZHka28V_g7lNyCtQQ/viewform",
      small: "",
    },
    {
      title: "",
      subtitle: "",
      image:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/63ce601fa5efc_microsoft.png",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeUc_vQFfkn_y2hFPEHf4u8JV61rIc_nZHka28V_g7lNyCtQQ/viewform",
      small: "",
    },
    {
      title: "",
      subtitle: "",
      image:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/63ce6042a7392_meta.png",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeUc_vQFfkn_y2hFPEHf4u8JV61rIc_nZHka28V_g7lNyCtQQ/viewform",
      small: "",
    },
    {
      title: "",
      subtitle: "",
      image:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/63ce6055342a4_apple.png",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeUc_vQFfkn_y2hFPEHf4u8JV61rIc_nZHka28V_g7lNyCtQQ/viewform",
      small: "",
    },
  ];

  return (
    <CommonCards
      images={images}
      heading={"Practice Coding & Ace Hiring Assessments"}
      content={
        "Level up your coding skills by practicing the hiring assessments of your dream companies & ace your placement game!"
      }
      type="acehiring"
      link={'"https://docs.google.com/forms/d/e/1FAIpQLSeUc_vQFfkn_y2hFPEHf4u8JV61rIc_nZHka28V_g7lNyCtQQ/viewform"'}
    />
  );
};

export default AceHiring;
