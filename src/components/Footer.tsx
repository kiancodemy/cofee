
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="bg-primary text-white ">
      <div className="container border-b border-white py-8">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="flex flex-col gap-y-4 px-2">
            <h1 className="font-bold capitalize text-4xl">Coders Cafe</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ea
              ratione quidem libero, praesentium ab atque? Quidem maxime,
              numquam dolores
            </p>
            <div className="flex gap-x-2">
              <FaPhone></FaPhone>
              <h1>+1 (123) 456-7890</h1>
            </div>
          </div>
          <div className="flex flex-col gap-y-4 px-2">
            <h1 className="font-bold capitalize text-4xl">Quick Links</h1>
            <div className="flex flex-col gap-y-3">
              <p>Home</p>
              <p>About</p>
              <p>Contact us</p>
              <p>Privacy Policy</p>
            </div>
          </div>
          <div className="flex flex-col gap-y-4 px-2">
            <h1 className="font-bold capitalize text-4xl">Follow Us</h1>
            <div className="flex *:text-4xl gap-x-2">
              <FaFacebook></FaFacebook>
              <FaTelegram></FaTelegram>
              <FaWhatsapp></FaWhatsapp>
              <FaGoogle></FaGoogle>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-center py-6 capitalize">
        Copyright © 2024 Company Name. All rights reserved.
      </h1>
    </div>
  );
}
