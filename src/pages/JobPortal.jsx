import React from "react";
import JobPortalHero from "../components/JobPortalHero";
import SlidingBrands from "../components/SlidingBrands";
import CommonCards from "../components/CommonCards";
import Showcase from "../components/Showcase";
import FeaturedOpp from "../components/FeaturedOpp";

const JobPortal = () => {
  const jobs = [
    {
      small: "Full-Time",
      subtitle: "",
      image:
        "	https://d8it4huxumps7.cloudfront.net/uploads/images/63c94d1bdc9e8_full_time.png?d=570x340",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeUc_vQFfkn_y2hFPEHf4u8JV61rIc_nZHka28V_g7lNyCtQQ/viewform",
      title: "",
    },
    {
      small: "In-Office",
      subtitle: "",
      image:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/63c94d2c31bba_in_office.png?d=570x340",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeUc_vQFfkn_y2hFPEHf4u8JV61rIc_nZHka28V_g7lNyCtQQ/viewform",
      title: "",
    },
    {
      small: "Virtual",
      subtitle: "",
      image:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/63c94d3a79c08_virtual.png?d=570x340",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeUc_vQFfkn_y2hFPEHf4u8JV61rIc_nZHka28V_g7lNyCtQQ/viewform",
      title: "",
    },
    {
      small: "Part-Time",
      subtitle: "",
      image:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/63c94d50d72f0_part_time.png?d=570x340",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeUc_vQFfkn_y2hFPEHf4u8JV61rIc_nZHka28V_g7lNyCtQQ/viewform",
      title: "",
    },
  ];

  const internships = [
    {
      small: "Paid",
      subtitle: "",
      image:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/63c94d60653c0_paid.png?d=570x340",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeUc_vQFfkn_y2hFPEHf4u8JV61rIc_nZHka28V_g7lNyCtQQ/viewform",
      title: "",
    },
    {
      small: "Virtual",
      subtitle: "",
      image:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/63c94d3a79c08_virtual.png?d=570x340",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeUc_vQFfkn_y2hFPEHf4u8JV61rIc_nZHka28V_g7lNyCtQQ/viewform",
      title: "",
    },
    {
      small: "Certificate",
      subtitle: "",
      image:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/63c94d7328166_certificate.png?d=570x340",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeUc_vQFfkn_y2hFPEHf4u8JV61rIc_nZHka28V_g7lNyCtQQ/viewform",
      title: "",
    },
    {
      small: "Part-Time",
      subtitle: "",
      image:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/63c94d50d72f0_part_time.png?d=570x340",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeUc_vQFfkn_y2hFPEHf4u8JV61rIc_nZHka28V_g7lNyCtQQ/viewform",
      title: "",
    },
  ];

  const hiringchallenges = [
    {
      small: "Art & Science",
      subtitle: "",
      image:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/63c94d81cd39a_science.png?d=628x340",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeUc_vQFfkn_y2hFPEHf4u8JV61rIc_nZHka28V_g7lNyCtQQ/viewform",
      title: "",
    },
    {
      small: "Business",
      subtitle: "",
      image:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/63c94d96499d2_business.png?d=628x340",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeUc_vQFfkn_y2hFPEHf4u8JV61rIc_nZHka28V_g7lNyCtQQ/viewform",
      title: "",
    },
    {
      small: "Engineering",
      subtitle: "",
      image:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/63c94da689434_engineering.png?d=628x340",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeUc_vQFfkn_y2hFPEHf4u8JV61rIc_nZHka28V_g7lNyCtQQ/viewform",
      title: "",
    },
  ];

  return (
    <>
      <JobPortalHero />
      <SlidingBrands
        title={"Get Hired in"}
        small={"Dream Companies:"}
      />
      <FeaturedOpp type={"feature"} />
      <CommonCards
        images={jobs}
        heading={"Jobs"}
        content={
          "Apply for full-time & part-time in-office, work-from-home & hybrid jobs!"
        }
        type="jobs"
      />
      <CommonCards
        images={internships}
        heading={"Internships"}
        content={
          "Apply for full-time & part-time internships offering certificates, PPOs & more!"
        }
        type="internships"
      />
      <Showcase type={"job"} />
      <CommonCards
        images={hiringchallenges}
        heading={"Hiring Challenges"}
        content={
          "Get pre-placement offers (PPOs) from your favorite companies via case study competitions, hackathons & more!"
        }
        type="hiringchallenges"
      />
    </>
  );
};

export default JobPortal;
