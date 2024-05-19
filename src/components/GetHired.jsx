import React from "react";
import CommonCards from "./CommonCards";

const GetHired = () => {
  const images = [
    {
      title: "Jobs",
      subtitle: "",
      image: "https://cdn.unstop.com/uploads/images/home/job.png?d=570x340",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeUc_vQFfkn_y2hFPEHf4u8JV61rIc_nZHka28V_g7lNyCtQQ/viewform",
      small: "Full-Time",
    },
    {
      title: "Internships",
      subtitle: "",
      image:
        "https://cdn.unstop.com/uploads/images/home/internship.png?d=570x340",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeUc_vQFfkn_y2hFPEHf4u8JV61rIc_nZHka28V_g7lNyCtQQ/viewform",
      small: "Part-Time",
    },
    {
      title: "Challenges",
      subtitle: "",
      image:
        "https://cdn.unstop.com/uploads/images/home/hiring-challenges.png?d=570x340",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeUc_vQFfkn_y2hFPEHf4u8JV61rIc_nZHka28V_g7lNyCtQQ/viewform",
      small: "Hiring",
    },
    {
      title: "Internships",
      subtitle: "",
      image:
        "https://cdn.unstop.com/uploads/images/home/paid-internship.png?d=570x340",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeUc_vQFfkn_y2hFPEHf4u8JV61rIc_nZHka28V_g7lNyCtQQ/viewform",
      small: "Paid",
    },
  ];

  return (
    <CommonCards
      images={images}
      heading={"Get Hired"}
      content={
        "Work with your dream companies by applying to hiring challenges and full-time & part-time jobs/internships."
      }
      type="hired"
    />
  );
};

export default GetHired;
