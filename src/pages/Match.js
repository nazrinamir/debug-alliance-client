import React from "react";
import CardHolder from "../component/molecules/CardHolder";
import { dataNews } from "../dataStorage/dataStorage";
import Carousel from "../component/molecules/Carousel";

function Match() {
  return (
    <div className="w-[90%] mx-auto squada-one-regular">


      {/* <img
        className="absolute top-0 bg-cover bg-repeat w-full h-[122vh] z-[-1]"
        src="debug-images/bg-main.png"
        alt="bgMain"
      /> */}
      <div className="h-full w-full">
        <h1 className=" text-white text-center  my-4">Berita Harian</h1>
        <div className=" w-full mb-10">
          <Carousel images={dataNews} />
        </div>

        <div className="mt-5 text-justify text-sm md:text-lg">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
          molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
          officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
          nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
          error repudiandae fuga?
        </p>

        <p>
          Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi
          expedita sint? Sed quibusdam recusandae alias error harum maxime
          adipisci amet laborum. Perspiciatis minima nesciunt dolorem! Officiis
          iure rerum voluptates a cumque velit quibusdam sed amet tempora. Sit
          laborum ab, eius fugit doloribus tenetur fugiat, temporibus enim
          commodi iusto libero magni deleniti quod quam consequuntur! Commodi
          minima excepturi repudiandae velit hic maxime doloremque.
        </p>

        <p>
          Quaerat provident commodi consectetur veniam similique ad earum omnis
          ipsum saepe, voluptas, hic voluptates pariatur est explicabo fugiat,
          dolorum eligendi quam cupiditate excepturi mollitia maiores labore
          suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab
          laudantium modi minima sunt esse temporibus sint culpa, recusandae
          aliquam numquam totam ratione voluptas quod exercitationem fuga.
        </p>

        <p>
          Possimus quis earum veniam quasi aliquam eligendi, placeat qui
          corporis!
        </p>
      </div>


      </div>
    </div>
  );
}

export default Match;
