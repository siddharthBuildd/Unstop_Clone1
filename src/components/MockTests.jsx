import React from "react";
import CommonCards from "./CommonCards";

const MockTests = () => {
  const images = [
    {
      title: "",
      subtitle: "",
      image:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/63d4bd1505780_online_coding_assessment_mock.png",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeUc_vQFfkn_y2hFPEHf4u8JV61rIc_nZHka28V_g7lNyCtQQ/viewform",
      small: "",
    },
    {
      title: "",
      subtitle: "",
      image:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/63d4bd1e29758_verbal_ability_mock_test.png",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeUc_vQFfkn_y2hFPEHf4u8JV61rIc_nZHka28V_g7lNyCtQQ/viewform",
      small: "",
    },
    {
      title: "",
      subtitle: "",
      image:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/63d4bd07d0a51_general_aptitude_mock.png",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeUc_vQFfkn_y2hFPEHf4u8JV61rIc_nZHka28V_g7lNyCtQQ/viewform",
      small: "",
    },
    {
      title: "",
      subtitle: "",
      image:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/63d4bcfb2826a_computer_fundamental_mock.png",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeUc_vQFfkn_y2hFPEHf4u8JV61rIc_nZHka28V_g7lNyCtQQ/viewform",
      small: "",
    },
  ];

  return (
    <CommonCards
      images={images}
      heading={"Mock Tests"}
      content={
        "Practice these questions & prepare yourself for the real-life interview problems!"
      }
      type="mocktest"
      link={'"https://docs.google.com/forms/d/e/1FAIpQLSeUc_vQFfkn_y2hFPEHf4u8JV61rIc_nZHka28V_g7lNyCtQQ/viewform"'}
    />
  );
};

export default MockTests;
