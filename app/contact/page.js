"use client";

import Navbar from "../components/Navbar";
const leads = [
  {
    name: "Aman Kumar",
    post: "Lead GDSC",
    image: "",
    link: "https://www.linkedin.com/in/aman-kumar-51089120b/",
  },
  {
    name: "Riya",
    post: "UI/UX Lead",
    image: "",
    link: "https://www.linkedin.com/in/riya-rr08/",
  },
  {
    name: "Ram Bhakt",
    post: "Web Lead",
    image: "",
  },
];
const design = [
  {
    name: "Akankshya Dash",
    post: "Associate Developer Design team",
    image: "",
    link: "https://www.linkedin.com/in/akankshya-dash-058b32236/",
  },
  {
    name: "Arshia Anand",
    post: "Junior Developer Design Team",
    image: "",
    link: "https://www.linkedin.com/in/arshia-anand-4bb672302/",
  },
  {
    name: "Pranav Verma",
    post: "Developer Design Team",
    image: "",
    link: "https://www.linkedin.com/in/pranav-verma-707456229/",
  },
];
const dev = [
  {
    name: "Anirudh Salaria",
    post: "Developer Web Team",
    image: "",
    link: "https://www.linkedin.com/in/anirudh-salaria-0953b1247/",
  },
  {
    name: "Kriti Gupta",
    post: "Junior Developer Web Team",
    image: "",
    link: "",
  },
  {
    name: "Samriddh Kapoor",
    post: "Developer Web Team",
    image: "",
    link: "https://www.linkedin.com/in/samriddh-kapoor-3329bb220/",
  },
  {
    name: "Utkersh Uppal",
    post: "Developer Web Team",
    image: "",
    link: "https://www.linkedin.com/in/utkersh-uppal-2840b0229/",
  },
  {
    name: "Vivek Kumar Ray",
    post: "Junior Developer Web Team",
    image: "",
    link: "https://www.linkedin.com/in/vk092/",
  },
  {
    name: "Vikas Sharma",
    post: "Developer Web Team",
    image: "Team/vikas.jpg",
    link: "https://www.linkedin.com/in/vikas-sharma-263b24232/",
  },
];
const Team = [
  {
    name: "Aman Kumar",
    post: "Lead GDSC",
    image: "Team/Aman.png",
    link: "https://www.linkedin.com/in/aman-kumar-51089120b/",
  },
  {
    name: "Vikas Sharma",
    post: "Developer Web Team",
    image: "Team/vikas.jpg",
    link: "https://www.linkedin.com/in/vikas-sharma-263b24232/",
  },
];

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="mt-4 p-4 flex flex-col items-center justify-center ">
        <h2 className="text-3xl mb-0 font-semibold text-[#5D5FEF]">Our Team</h2>
        <hr className=" w-36 border-b-2 border-solid border-[#5D5FEF] mt-0"></hr>
        <div className="flex mt-4 flex-row gap-12 items-stretch items-center justify-center flex-wrap sm:flex-nowrap">
          {Team &&
            Team.map((l, i) => {
              return (
                <div
                  key={i}
                  className="max-w-xs rounded-xl overflow-hidden shadow-xl"
                >
                  <img className="w-full" src={l.image} alt="" />
                  <div className="px-6 py-4 mb-4">
                    <div className=" font-semibold text-base mb-4">
                      {l.name}
                      <br />
                      {l.post}
                    </div>
                    <a
                      href={l.link}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 text-sm px-4 rounded mt-0 mb-6"
                    >
                      Linkedin
                    </a>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      {/* <div className="mt-4 p-4 flex flex-col items-center justify-center ">
        <h2 className="text-3xl mb-0 font-semibold text-[#5D5FEF]">
          Our Leads
        </h2>
        <hr className=" w-36 border-b-2 border-solid border-[#5D5FEF] mt-0"></hr>
        <div className="flex mt-4 flex-row gap-12 items-center justify-center flex-wrap sm:flex-nowrap">
          {leads &&
            leads.map((l, i) => {
              return (
                <div
                  key={i}
                  className="max-w-xs rounded-xl overflow-hidden shadow-xl"
                >
                  <img className="w-full" src="profile.jpeg" alt="" />
                  <div className="px-6 py-4 mb-4">
                    <div className=" font-semibold text-base mb-4">
                      {l.name + "," + l.post}
                    </div>
                    <a
                      href={l.link}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 text-sm px-4 rounded mt-0 mb-6"
                    >
                      Linkedin
                    </a>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="mt-4 p-4 flex flex-col items-center justify-center">
        <h2 className="text-3xl mb-0 font-semibold text-[#5D5FEF]">
          Design Team
        </h2>
        <hr className=" w-36 border-b-2 border-solid border-[#5D5FEF] mt-0"></hr>
        <div className="flex mt-4 flex-row gap-12 items-center justify-center flex-wrap sm:flex-nowrap">
          {design &&
            design.map((l, i) => {
              return (
                <div
                  key={i}
                  className="max-w-xs rounded-xl overflow-hidden shadow-xl"
                >
                  <img className="w-full" src="profile.jpeg" alt="" />
                  <div className="px-6 py-4 mb-4">
                    <div className=" font-semibold text-base mb-4">
                      {l.name + "," + l.post}
                    </div>
                    <a
                      href={l.link}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 text-sm px-4 rounded mt-0 mb-6"
                    >
                      Linkedin
                    </a>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="mt-4 p-4 flex flex-col items-center justify-center">
        <h2 className="text-3xl mb-0 font-semibold text-[#5D5FEF]">
          Development Team
        </h2>
        <hr className=" w-36 border-b-2 border-solid border-[#5D5FEF] mt-0"></hr>
        <div className="flex mt-4 flex-row gap-12 items-center justify-center flex-wrap sm:px-12 ">
          {dev &&
            dev.map((l, i) => {
              return (
                <div
                  key={i}
                  className="max-w-xs rounded-xl overflow-hidden shadow-xl basis-3/3 sm:basis-1/3"
                >
                  <img className="w-full" src="profile.jpeg" alt={l.name} />
                  <div className="px-6 py-4 mb-4">
                    <div className=" font-semibold text-base mb-4">
                      {l.name + "," + l.post}
                    </div>
                    <a
                      href={l.link}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 text-sm px-4 rounded mt-0 mb-6"
                    >
                      Linkedin
                    </a>
                  </div>
                </div>
              );
            })}
        </div>
      </div> */}
    </>
  );
};
export default Contact;
