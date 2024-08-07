import React from "react";

const Map = () => {
  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.948752896228!2d77.1329978752027!3d28.631297984137348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d032416e45fc9%3A0xa6fd62e8fe944043!2sKoncept%20India!5e0!3m2!1sen!2sin!4v1713527241411!5m2!1sen!2sin";
  return (
    <div className="w-full pt-20  pb-2" data-aos="zoom-in-down">
      <h3 className="text-center no-underline mt-5 mb-10">Map</h3>
      <div className=" md:w-11/12 mx-auto  ">
        <iframe
          src={mapUrl}
          className="w-full h-[50vw] md:h-[30vw]  rounded-lg"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
