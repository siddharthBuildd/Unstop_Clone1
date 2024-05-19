import React from "react";
import "../styles/dayinterview.css";

const DayInterview = () => {
  return (
    <section className="dayinterview">
      <div className="mockinterview-container container">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeUc_vQFfkn_y2hFPEHf4u8JV61rIc_nZHka28V_g7lNyCtQQ/viewform"
          target={"_blank"}
          rel={"noreferrer"}
        >
          <img
            src="https://d8it4huxumps7.cloudfront.net/uploads/images/63d89ada466f5_new_crack_interview.png?d=2360x912"
            alt="mock interview"
          />
        </a>
      </div>
    </section>
  );
};

export default DayInterview;
