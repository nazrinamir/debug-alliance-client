import React from "react";
import { Link } from "react-router-dom";
import { MailIcon } from "../../styles/icon";
import FooItem from "../atom/FooItem";


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

const DAfooter = () => {
  return (
    <div className="w-full text-center">
      <div className="text-white p-4">
        <div className="text-sm font-thin">
          Any Questions regarding <br /> merchandise or registration
        </div>
        <div className="flex squada-one-regular items-center justify-center">
          <div className="p-2">
            <MailIcon />
          </div>
          <p className="text-2xl my-auto">CONTACT US</p>
        </div>

        <div className="border border-white" />

        <div className="flex md:w-full items-center justify-center gap-4 p-4">
          {footer_item.map((item, index) => (
            <FooItem key={index} to={item.to} srcImages={item.srcImage} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default DAfooter;
