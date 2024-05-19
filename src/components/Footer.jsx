import React from "react";
import logo from "../assets/BROCODES.png";
import "../styles/footer.css";
import { AiFillHeart, AiFillInstagram } from "react-icons/ai";
import { IoMailOutline } from "react-icons/io5";
import { IoMdSend } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaTelegramPlane,
  FaDiscord,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const solutions = [
    {
      name: "brand",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeUc_vQFfkn_y2hFPEHf4u8JV61rIc_nZHka28V_g7lNyCtQQ/viewform",
    },
    {
      name: "source",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeUc_vQFfkn_y2hFPEHf4u8JV61rIc_nZHka28V_g7lNyCtQQ/viewform",
    },
    {
      name: "engage",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeUc_vQFfkn_y2hFPEHf4u8JV61rIc_nZHka28V_g7lNyCtQQ/viewform",
    },
    {
      name: "assess",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeUc_vQFfkn_y2hFPEHf4u8JV61rIc_nZHka28V_g7lNyCtQQ/viewform",
    },
    {
      name: "hire",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeUc_vQFfkn_y2hFPEHf4u8JV61rIc_nZHka28V_g7lNyCtQQ/viewform",
    },
  ];

  const products = [
    {
      name: "technology platform",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeUc_vQFfkn_y2hFPEHf4u8JV61rIc_nZHka28V_g7lNyCtQQ/viewform",
    },
    {
      name: "online recruitment platform",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeUc_vQFfkn_y2hFPEHf4u8JV61rIc_nZHka28V_g7lNyCtQQ/viewform",
    },
    {
      name: "quizzing / assessments",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeUc_vQFfkn_y2hFPEHf4u8JV61rIc_nZHka28V_g7lNyCtQQ/viewform",
    },
    {
      name: "online hackathons / coding",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeUc_vQFfkn_y2hFPEHf4u8JV61rIc_nZHka28V_g7lNyCtQQ/viewform",
    },
    {
      name: "business simulation games",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeUc_vQFfkn_y2hFPEHf4u8JV61rIc_nZHka28V_g7lNyCtQQ/viewform",
    },
  ];

  const participate = [
    {
      name: "competitions & challenges",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeUc_vQFfkn_y2hFPEHf4u8JV61rIc_nZHka28V_g7lNyCtQQ/viewform",
    },
    {
      name: "quizzes",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeUc_vQFfkn_y2hFPEHf4u8JV61rIc_nZHka28V_g7lNyCtQQ/viewform",
    },
    {
      name: "hackathons",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeUc_vQFfkn_y2hFPEHf4u8JV61rIc_nZHka28V_g7lNyCtQQ/viewform",
    },
    {
      name: "workshops & webinars",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeUc_vQFfkn_y2hFPEHf4u8JV61rIc_nZHka28V_g7lNyCtQQ/viewform",
    },
    {
      name: "conferences",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeUc_vQFfkn_y2hFPEHf4u8JV61rIc_nZHka28V_g7lNyCtQQ/viewform",
    },
    {
      name: "cultural events",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeUc_vQFfkn_y2hFPEHf4u8JV61rIc_nZHka28V_g7lNyCtQQ/viewform",
    },
    {
      name: "college festivals",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeUc_vQFfkn_y2hFPEHf4u8JV61rIc_nZHka28V_g7lNyCtQQ/viewform",
    },
  ];

  const apply = [
    {
      name: "internships",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeUc_vQFfkn_y2hFPEHf4u8JV61rIc_nZHka28V_g7lNyCtQQ/viewform",
    },
    {
      name: "jobs",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeUc_vQFfkn_y2hFPEHf4u8JV61rIc_nZHka28V_g7lNyCtQQ/viewform",
    },
    {
      name: "scholarships",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeUc_vQFfkn_y2hFPEHf4u8JV61rIc_nZHka28V_g7lNyCtQQ/viewform",
    },
  ];

  const learn = [
    {
      name: "courses",
      link: "https://brocodes.com/blog-articles",
    },
    {
      name: "articles",
      link: "https://brocodes.com/blog-articles",
    },
    {
      name: "workshops",
      link: "https://brocodes.com/workshops",
    },
    {
      name: "technopedia",
      link: "https://brocodes.com/technopedia",
    },
  ];

  const practice = [
    {
      name: "MCQ mock tests",
      link: "https://brocodes.com/courses/mocks",
    },
    {
      name: "Code & Ace Hiring assessments",
      link: "https://brocodes.com/coding/practice",
    },
    {
      name: "100-Day of Coding sprint",
      link: "https://brocodes.com/coding/100-day-of-coding-sprint-339",
    },
  ];

  const properties = [
    {
      name: "brocodes Awards 2023",
      link: "https://brocodes.com/awards/2023",
    },
    {
      name: "brocodes Campus Employer Branding Report 2022",
      link: "https://brocodes.com/campus-employer-branding-report-2022",
    },
    {
      name: "Education Loan EMI Calculator",
      link: "https://brocodes.com/tools/education-loan-emi-calculator",
    },
    {
      name: "brocodes Igniters Club",
      link: "https://brocodes.com/brocodes-igniters-club",
    },
    {
      name: "Online Quizzing Festival",
      link: "https://brocodes.com/online-quizzing-festival",
    },
    {
      name: "Online Hackathon Festival",
      link: "https://brocodes.com/online-hackathon-festival",
    },
  ];

  return (
    <footer>
      <div className="footer">
        <div className="footer-top">
          <div className="footer-top-left">
            <div className="footer-logo">
              <img
                src={logo}
                alt="logo"
              />
            </div>
            <p className="dash">
              Built with{" "}
              <span className="heart-icon">
                <AiFillHeart />
              </span>{" "}
              in India for the world
            </p>
            <h3>Stay Connected</h3>
            <div className="footer-contact-links">
              <a
                href="mailto:hr@brocodes.club"
                className="mail"
                target="_blank"
                rel="noreferrer"
              >
                <IoMailOutline />
                hr@brocodes.club
              </a>
              
            </div>
            <div className="footer-social-links dash">
              <a
                href="http://instagram.com/brocodes.club"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/brocodes-club-26a63a30a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="http://instagram.com/brocodes.club"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF />
              </a>
              
             
              
              
            </div>
            <h3>Stay Updated</h3>
            <p className="updated">
              We'll send you updates on the latest opportunities to showcase
              your talent and get hired and rewarded regularly.
            </p>
            <div className="newsletter">
              <a
                href="https://brocodes.com/about/newsletter"
                target="_blank"
                rel="noreferrer"
              >
                Sign up for our newsletter
                <IoMdSend />
              </a>
            </div>
            <div className="footer-left-btns dash">
              <a
                href="https://brocodes.com/blog/share-your-story-and-get-featured"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Share Your Story Now
              </a>
              <a
                href="https://brocodes.com/manage/opportunity/all/create"
                className="btn"
              >
                <HiOutlineSpeakerphone />
                Publish Opportunity
              </a>
            </div>
            <h3>Download brocodes App</h3>
            <div className="footer-download dash">
              
              
            </div>
            <p className="dash best-viewed">
              Best Viewed in Latest Versions of Edge, Mozilla, Chrome, Opera &
              Safari. V: 2.20.2023.18.53
            </p>
            <p className="copyright">
              Copyright © 2023 FLIVE Consulting Pvt Ltd - All rights reserved.
            </p>
          </div>
          <div className="footer-top-right">
            <div className="footer-right-top">
              <div className="footer-solution-product">
                <div className="footer-solutions">
                  <h4>Our solutions</h4>
                  <div className="footer-solutions-links links-cont">
                    {solutions.map((ele) => {
                      return (
                        <a
                          href={ele.link}
                          target="_blank"
                          rel="noreferrer"
                          key={ele.name}
                        >
                          {ele.name}
                        </a>
                      );
                    })}
                  </div>
                </div>
                <div className="footer-products">
                  <h4>Our products</h4>
                  <div className="footer-products-links links-cont">
                    {products.map((ele) => {
                      return (
                        <a
                          href={ele.link}
                          target="_blank"
                          rel="noreferrer"
                          key={ele.name}
                        >
                          {ele.name}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="footer-participate-apply">
                <div className="footer-participate">
                  <h4>participate</h4>
                  <div className="footer-participate-links links-cont">
                    {participate.map((ele) => {
                      return (
                        <a
                          href={ele.link}
                          target="_blank"
                          rel="noreferrer"
                          key={ele.name}
                        >
                          {ele.name}
                        </a>
                      );
                    })}
                  </div>
                </div>
                <div className="footer-apply">
                  <h4>apply</h4>
                  <div className="footer-apply-links links-cont">
                    {apply.map((ele) => {
                      return (
                        <a
                          href={ele.link}
                          target="_blank"
                          rel="noreferrer"
                          key={ele.name}
                        >
                          {ele.name}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="footer-learn-practice">
                <div className="footer-learn">
                  <h4>learn</h4>
                  <div className="footer-learn-links links-cont">
                    {learn.map((ele) => {
                      return (
                        <a
                          href={ele.link}
                          target="_blank"
                          rel="noreferrer"
                          key={ele.name}
                        >
                          {ele.name}
                        </a>
                      );
                    })}
                  </div>
                </div>
                <div className="footer-practice">
                  <h4>practice</h4>
                  <div className="footer-practice-links links-cont">
                    {practice.map((ele) => {
                      return (
                        <a
                          href={ele.link}
                          target="_blank"
                          rel="noreferrer"
                          key={ele.name}
                        >
                          {ele.name}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-right-bottom">
              <div className="footer-properties">
                <div className="footer-products">
                  <h4>our properties</h4>
                  <div className="footer-products-links links-cont">
                    {properties.map((ele) => {
                      return (
                        <a
                          href={ele.link}
                          target="_blank"
                          rel="noreferrer"
                          key={ele.name}
                        >
                          {ele.name}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="footer-other-links">
                <div className="same-row-links">
                  <a
                    href="https://brocodes.com/about"
                    className="divider"
                  >
                    About Us
                  </a>
                  <a
                    href="https://brocodes.com/about/contact-us"
                    className="divider"
                  >
                    Contact Us
                  </a>
                  <a
                    href="https://brocodes.com/about/brocodes-careers"
                    className="footer-careers"
                  >
                    Careers
                    <span className="hiring">We're hiring</span>
                  </a>
                </div>
                <div className="same-row-links">
                  <a
                    href="https://brocodes.com/about/clients"
                    className="divider"
                  >
                    Clientele
                  </a>
                  <a href="https://brocodes.com/our-partners/become-a-partner">
                    Partner With Us
                  </a>
                </div>
                <div className="same-row-links">
                  <a
                    href="https://brocodes.com/our-partners"
                    className="divider"
                  >
                    Partners
                  </a>
                  <a
                    href="https://brocodes.com/faq"
                    className="divider"
                  >
                    FAQs
                  </a>
                  <a href="https://brocodes.com/our-partners/branding-guidelines">
                    Branding Guidelines
                  </a>
                </div>
                <div className="same-row-links">
                  <a
                    href="https://brocodes.com/about/testimonials"
                    className="divider"
                  >
                    Testimonials
                  </a>
                  <a href="https://brocodes.com/p/featured-partners-446568">
                    Featured Partners
                  </a>
                </div>
                <a href="https://brocodes.com/brocodes-rewards-program">
                  brocodes Rewards Program
                </a>
                <a href="https://brocodes.com/brocodespitchsharktank">
                  brocodes on Shark Tank
                </a>
                <div className="same-row-links">
                  <a
                    href="https://brocodes.com/legal/terms-of-use"
                    className="divider"
                  >
                    Terms & Conditions
                  </a>
                  <a href="https://brocodes.com/legal/privacy-policy">
                    Privacy Policy
                  </a>
                </div>
                <a href="https://brocodes.com/directory/competitions/a/1">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom container">
          <div className="footer-bottom-left">
            <img
              src="https://d8it4huxumps7.cloudfront.net/uploads/images/d2c-icons/d2c-payments-icon.svg"
              alt="payments assurance"
            />
            <img
              src="https://d8it4huxumps7.cloudfront.net/uploads/images/d2c-icons/payments-icon.svg"
              alt="payment methods"
            />
          </div>
          <div className="footer-bottom-right">
            <img
              src="https://d8it4huxumps7.cloudfront.net/uploads/images/brocodes/gdpr-logo.png?d=300x300"
              alt="data protection"
            />
            <img
              src="https://d8it4huxumps7.cloudfront.net/uploads/images/6231c2a5bdf94_iso_27001.svg"
              alt="information security"
            />
            <img
              src="https://d8it4huxumps7.cloudfront.net/uploads/images/6231c2c0b51ff_iso_9001.svg"
              alt="iso certified"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
