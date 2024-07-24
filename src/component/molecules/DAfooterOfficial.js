import React from "react";
import { Link } from "react-router-dom";
import { MailIcon } from "../../styles/icon";
import FooItem from "../atom/FooItem";
import DAfooter from "./DAfooter";

/**
 *  @var footer_item
 * Able to store the route and the images. But it can be changed if the developer wants to change the attributes if needed.
 */
const footer_item = [
  { name: "Tiktok", to: "", srcImage: "/debug-images/tiktokIcon.png" },
  {
    name: "Whatsapp",
    to: "https://wa.me/01693950365?text=Hello%20Im%20Interested%20to%20buy%20Your%20Merchandise",
    srcImage: "/debug-images/wsIcon.png",
  },
  {
    name: "Instagram",
    to: "https://www.instagram.com/debug_alliance?igsh=MWszM2FraHQyYWpwZg==",
    srcImage: "/debug-images/instaIcon.png",
  },
];

const DAfooterOfficial = ({ align = "left" }) => {
  // Determine the class based on alignment prop
  const footerClass = align === "center" ? "w-fit mx-auto" : "w-fit";

  return (
    <div className="w-full">
      <div className={footerClass}>
        <DAfooter />
      </div>
      <div className="w-full text-white text-xl font-thin">
        © 2022 KMY Codesync Production
      </div>
    </div>
  );
};

export default DAfooterOfficial;
