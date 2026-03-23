"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { motion } from 'framer-motion';
import Image from "next/image";


const Core2025_26 = () => {
  const faculty = [
    { name: "Dr. Aruna Gawade", role: "Faculty Coordinator", img: "/team/2025-26/aruna-mam.png",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com", },
    { name: "Prof. Ragini Mishra", role: "Faculty Coordinator", img: "/team/2025-26/ragini-mam.png",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com", },
  ];


  const core = [
    { name: "Amey Kulkarni", role: "Chairperson", img: "/team/2025-26/amey.png",
    instagram: "https://www.instagram.com/ameykulkarni_/",
    linkedin: "https://www.linkedin.com/in/ameyyk/", },
    { name: "Keerti Nayak", role: "Co-Chairperson", img: "/team/2025-26/keerti.png",
    instagram: "https://www.instagram.com/keertinayak30/",
    linkedin: "https://www.linkedin.com/in/keerti-nayak-a014852b5/ ",},
    { name: "Siddhanth Chapade", role: "Secretary", img: "/team/2025-26/siddhanth.png",
    instagram: "https://www.instagram.com/htnahddis?igsh=azI4OWZwaWVnMnNl",
    linkedin: "https://www.linkedin.com/in/siddhanthchapade/",},
    { name: "Rishi Yadav", role: "Admin", img: "/team/2025-26/rishi.png",
    instagram: "https://www.instagram.com/rishiyadav2701?igsh=MWdzc2x5dzRtdjhleQ== ",
    linkedin: "https://www.linkedin.com/in/rishi-yadav-7ba7b8234/",},
    { name: "Parth Pujare", role: "VCP Finance", img: "/team/2025-26/parth.png",
    instagram: "https://www.instagram.com/parthpujare16?igsh=MWNydnBiZXFqcm1yMA%3D%3D&utm_source=qr",
    linkedin: "https://www.linkedin.com/in/parth-pujare-67a14a2bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app ",},
    { name: "Sneha Bangera", role: "VCP Technical", img: "/team/2025-26/sneha.png",
    instagram: "https://www.instagram.com/_snehaaaaaa.b_/",
    linkedin: "https://www.linkedin.com/in/sneha-bangera-6ba99b2b5/",},
    { name: "Kirtan Chitalia", role: "VCP Technical", img: "/team/2025-26/kirtan.png",
    instagram: "https://www.instagram.com/_kirtan_0707?igsh=cDBxZmp5ZnhjbXpv",
    linkedin: "https://www.linkedin.com/in/kirtan-chitalia-01737028a/",},
    { name: "Diti Solanki", role: "VCP Technical", img: "/team/2025-26/diti.png",
    instagram: "https://instagram.com/diti_4357/",
    linkedin: "https://www.linkedin.com/in/diti-solanki-62550a28a/",},
    { name: "Rishabh Mody", role: "VCP Events", img: "/team/2025-26/rishabh.png",
    instagram: "https://www.instagram.com/rishabh_mody?igsh=ZzdsMG96dGRxaHR4&utm_source=qr",
    linkedin: "https://in.linkedin.com/in/rishabh-mody-0b3a06283",},
    { name: "Harsh Karakasia", role: "VCP Events", img: "/team/2025-26/harsh.png",
    instagram: "https://www.instagram.com/harsh.karakasia?igsh=Mjk0eW9ycjF6Z2ll",
    linkedin: "https://www.linkedin.com/in/harsh-karakasia-662561354?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",},
    { name: "Veer Gandhi", role: "VCP Publicity", img: "/team/2025-26/veer.png",
    instagram: "https://www.Instagram.com/veer_gandhii?igsh=cmEwYWVicTkyY29w&utm_source=qr",
    linkedin: "https://www.Instagram.com/veer_gandhii?igsh=cmEwYWVicTkyY29w&utm_source=qr",},
    { name: "Aashi Palrecha", role: "VCP Creatives", img: "/team/2025-26/aashi.png",
    instagram: "https://www.instagram.com/ashu_jain28?utm_source=qr&igsh=azc4MWxibjh0aHFw",
    linkedin: "https://www.linkedin.com/in/aashi-palrecha-409a8231a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",},
    { name: "Drashti Jaiswal", role: "VCP Creatives", img: "/team/2025-26/drashti.png",
    instagram: "https://www.instagram.com/drashtijaiswal_?igsh=ZGo2ZGlnMjVhMG14",
    linkedin: "https://www.linkedin.com/in/drashti-jaiswal?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",},
    { name: "Midhat Ansari", role: "VCP Creatives", img: "/team/2025-26/midhat.png",
    instagram: "https://instagram.com",
    linkedin: "https://www.linkedin.com/in/midhat-ansari-97863022b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",},
    { name: "Saumya Shah", role: "VCP Marketing", img: "/team/2025-26/saumya.png",
    instagram: " https://www.instagram.com/saumya.shah.28?igsh=MTh6aWxvNWszOHozMQ==",
    linkedin: " https://www.linkedin.com/in/saumya-shah-736002318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",},
    { name: "Vatsal Sindhavad", role: "VCP Marketing", img: "/team/2025-26/vatsal.png",
    instagram: "https://www.instagram.com/vatsal_sindhavad?igsh=a3oycmhwaXU5bjU4",
    linkedin: "https://www.linkedin.com/in/vatsalsindhavad ",},
    { name: "Alan Saldhana", role: "VCP Editorial", img: "/team/2025-26/alan.png",
    instagram: "https://instagram.com",
    linkedin: "https://www.linkedin.com/in/alan-s-41672128a/",},
    { name: "Nashrah Ansari", role: "VCP Editorial", img: "/team/2025-26/nashrah.png",
    instagram: "https://www.instagram.com/itssnashrah?igsh=MXZwMGg5MHFqOXFndQ==",
    linkedin: "https://www.linkedin.com/in/nashrah-ansari-172933246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",},
    { name: "Atharva Arekar", role: "VCP Logistics", img: "/team/2025-26/atharva.png",
    instagram: "https://www.instagram.com/atharv_dilip_arekar_/",
    linkedin: "https://www.linkedin.com/in/atharv-arekar-150505287 ",},
    { name: "Jagdish Choudhary", role: "VCP Logistics", img: "/team/2025-26/jagdish.png",
    instagram: "https://www.instagram.com/jagdish_20_05?igsh=MTl2MnI3eTZhd2wx ",
    linkedin: "https://www.linkedin.com/in/jagdish-choudhary-p2004?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",},
    
  ];

  const AIBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Neural network nodes */}
    {[
      { cx: "5%", cy: "10%", r: 4 }, { cx: "15%", cy: "35%", r: 3 },
      { cx: "8%", cy: "60%", r: 5 }, { cx: "20%", cy: "85%", r: 3 },
      { cx: "90%", cy: "15%", r: 4 }, { cx: "95%", cy: "50%", r: 3 },
      { cx: "82%", cy: "72%", r: 5 }, { cx: "88%", cy: "92%", r: 3 },
    ].map((node, i) => (
      <svg key={i} className="absolute inset-0 w-full h-full">
        <circle cx={node.cx} cy={node.cy} r={node.r} fill="none"
          stroke="#64c3fa" strokeWidth="1" opacity="0.7" />
        <circle cx={node.cx} cy={node.cy} r={node.r - 1} fill="#64c3fa" opacity="0.3" />
      </svg>
    ))}

    {/* Connecting lines */}
    <svg className="absolute inset-0 w-full h-full">
      <line x1="5%" y1="10%" x2="15%" y2="35%" stroke="#3a8fff" strokeWidth="0.5" opacity="0.25" />
      <line x1="15%" y1="35%" x2="8%" y2="60%" stroke="#3a8fff" strokeWidth="0.5" opacity="0.25" />
      <line x1="8%" y1="60%" x2="20%" y2="85%" stroke="#3a8fff" strokeWidth="0.5" opacity="0.25" />
      <line x1="90%" y1="15%" x2="95%" y2="50%" stroke="#3a8fff" strokeWidth="0.5" opacity="0.25" />
      <line x1="95%" y1="50%" x2="82%" y2="72%" stroke="#3a8fff" strokeWidth="0.5" opacity="0.25" />
      <line x1="82%" y1="72%" x2="88%" y2="92%" stroke="#3a8fff" strokeWidth="0.5" opacity="0.25" />
      <line x1="5%" y1="10%" x2="90%" y2="15%" stroke="#64c3fa" strokeWidth="0.3" opacity="0.12" />
      <line x1="8%" y1="60%" x2="82%" y2="72%" stroke="#64c3fa" strokeWidth="0.3" opacity="0.12" />
    </svg>

    {/* Floating AI keywords */}
    {[
      { text: "NEURAL NET", x: "2%", y: "8%" },
      { text: "DEEP LEARNING", x: "76%", y: "6%" },
      { text: "∑ W·X + b", x: "2%", y: "45%" },
      { text: "BACKPROP", x: "80%", y: "42%" },
      { text: "TRANSFORMER", x: "3%", y: "88%" },
      { text: "∂L/∂W", x: "83%", y: "86%" },
    ].map((item, i) => (
      <span key={i} className="absolute font-mono text-[10px] text-[#3a8fff] opacity-40 tracking-widest uppercase"
        style={{ left: item.x, top: item.y }}>
        {item.text}
      </span>
    ))}

    {/* Binary strips */}
    <div className="absolute left-[1%] top-[20%] flex flex-col gap-1 opacity-25">
      {["01101", "10010", "11001", "00110", "10101"].map((b, i) => (
        <span key={i} className="font-mono text-[9px] text-[#64c3fa] tracking-widest">{b}</span>
      ))}
    </div>
    <div className="absolute right-[1%] top-[55%] flex flex-col gap-1 opacity-25">
      {["11010", "00101", "10011", "01100", "11100"].map((b, i) => (
        <span key={i} className="font-mono text-[9px] text-[#64c3fa] tracking-widest">{b}</span>
      ))}
    </div>

    {/* Corner brackets */}
    <svg className="absolute top-4 left-4 w-10 h-10 opacity-40">
      <path d="M10 0 L0 0 L0 10" fill="none" stroke="#64c3fa" strokeWidth="1.5" />
    </svg>
    <svg className="absolute top-4 right-4 w-10 h-10 opacity-40">
      <path d="M0 0 L10 0 L10 10" fill="none" stroke="#64c3fa" strokeWidth="1.5" />
    </svg>
    <svg className="absolute bottom-4 left-4 w-10 h-10 opacity-40">
      <path d="M0 0 L0 10 L10 10" fill="none" stroke="#64c3fa" strokeWidth="1.5" />
    </svg>
    <svg className="absolute bottom-4 right-4 w-10 h-10 opacity-40">
      <path d="M10 0 L10 10 L0 10" fill="none" stroke="#64c3fa" strokeWidth="1.5" />
    </svg>
  </div>
)

  return (
    
    <div className="grad-bg min-h-screen text-white flex flex-col items-center pt-24 pb-12">
      <AIBackground/>
      {/* Faculty Sec */}
      <h2 className="text-4xl text-center primary-font font-bold mb-8 w-full">Faculty Coordinators</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {faculty.map((person, index) => (
          <motion.div
                          key={index}
                          className="bg-[#0D1B2A] p-4 rounded-2xl shadow-lg text-center inline-block"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true, amount: 0.2 }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                        >
          <div className="relative group">
            <Image
              src={person.img}
              alt={person.name}
              height={256}
              width={256}
              className="w-64 h-72 object-cover rounded-xl"
            />


            <div className="absolute bottom-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a
                href={person.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-3xl"
              >
                <FontAwesomeIcon
                  className="hover:text-[#ff4f84] transition-colors duration-200"
                  icon={faInstagram}
                />
              </a>
              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-3xl"
              >
                <FontAwesomeIcon
                  className="hover:text-[#4fa1ff] transition-colors duration-200"
                  icon={faLinkedin}
                />
              </a>
            </div>
          </div>
        </motion.div>

        ))}
      </div>
      {/* core sec */}
<h2 className="text-4xl font-bold primary-font mb-8">Core Committee</h2>
<div className="grid grid-cols-1 gap-8">

  {/* First row with 2 centered cards */}
<div className="flex flex-col sm:grid sm:grid-cols-2 gap-2 items-center sm:justify-items-center mx-auto w-full max-w-lg">
    {core.slice(0, 2).map((person, index) => (
      <motion.div
        key={index}
        className="bg-[#0D1B2A] p-4 rounded-2xl shadow-lg text-center w-64 h-[320px] mx-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="relative group h-full flex flex-col justify-between">
          <Image
            src={person.img}
            alt={person.name}
            height={256}
            width={256}
            className="w-64 h-72 object-cover rounded-xl mx-auto" // Ensure image size fits within the card
          />
          <div className="absolute bottom-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a
              href={person.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl"
            >
              <FontAwesomeIcon
                className="hover:text-[#ff4f84] transition-colors duration-200"
                icon={faInstagram}
              />
            </a>
            <a
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl"
            >
              <FontAwesomeIcon
                className="hover:text-[#4fa1ff] transition-colors duration-200"
                icon={faLinkedin}
              />
            </a>
          </div>
        </div>
      </motion.div>
    ))}
  </div>

  {/* Rest of the cards in a 3-column grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {core.slice(2).map((person, index) => (
      <motion.div
        key={index + 2} // Adjust index for the rest of the cards
        className="bg-[#0D1B2A] p-4 rounded-2xl shadow-lg text-center inline-block w-full sm:w-64 h-[320px]" // Fixed width and height
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="relative group h-full flex flex-col justify-between">
          <Image
            src={person.img}
            alt={person.name}
            height={256}
            width={256}
            className="w-64 h-72 object-cover rounded-xl mx-auto" // Ensure image size fits within the card
          />
          <div className="absolute bottom-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a
              href={person.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl"
            >
              <FontAwesomeIcon
                className="hover:text-[#ff4f84] transition-colors duration-200"
                icon={faInstagram}
              />
            </a>
            <a
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl"
            >
              <FontAwesomeIcon
                className="hover:text-[#4fa1ff] transition-colors duration-200"
                icon={faLinkedin}
              />
            </a>
          </div>
        </div>
      </motion.div>
    ))}
  </div>

</div>



    </div>
  );
};

export default Core2025_26;
