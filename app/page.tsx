import { Inter } from "next/font/google";
import { AiFillPhone } from "react-icons/ai";
import { BsFillEnvelopeAtFill, BsGlobeAmericas } from "react-icons/bs";
import { MdOutlineSportsTennis } from "react-icons/md";
import { RiRidingFill } from "react-icons/ri";
import { HiLocationMarker } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaKeyboard } from "react-icons/fa";
import { BiJoystickAlt } from "react-icons/bi";
const inter = Inter({ subsets: ["latin"] });

// container === main
export default function Home() {
  return (
    <div className="main relative w-full max-w-5xl min-h-[1000px] bg-white grid grid-cols-3 shadow-xs shadow-black m-[40px] max-[1000px]:m-[10px] max-[1000px]:grid-cols-1">
      <div className="left_side relative bg-[#003147] p-10">
        <div className="profileText relative flex flex-col items-center pb-5 border-b-[1px] border-cyan-800 justify-center">
          <div className="imgBx ">
            <img
              className=" relative w-[200px] h-[200px]  rounded-full "
              src="https://avatars.githubusercontent.com/u/109475658?v=4"
              alt="me"
            />
            <h2 className="text-base mt-[20px] font-semibold leading-6 text-white text-center	">
              ABDULLAH AZHAR KHAN <br />{" "}
              <span className="text-sm font-light	">DEVELOPER</span>
            </h2>
          </div>
        </div>
        <div className="contactInfo pt-[40px]">
          <h3 className="title text-white font-semibold tracking-wider mb-[20px]">
            CONTACT INFO
          </h3>
          <ul className="relative ">
            <li className="relative my-[10px] cursor-pointer">
              <span className="icon  ">
                <AiFillPhone className="w-[30px] text-lg text-[#03a9f4]  " />
              </span>
              <span className="text text-white">+92 3338237882</span>
            </li>
            <li className="relative my-[10px] cursor-pointer">
              <span className="icon">
                <BsFillEnvelopeAtFill className=" w-[30px] text-lg text-[#03a9f4] " />
              </span>
              <span className="text text-white">
                abdullahazharkhan1@gmail.com
              </span>
            </li>
            <li className="relative my-[10px] cursor-pointer">
              <span className="icon">
                <BsGlobeAmericas className=" w-[30px] text-lg text-[#03a9f4] " />
              </span>
              <span className="text text-white">www.abdullah.xyz</span>
            </li>
            <li className="relative my-[10px] cursor-pointer">
              <span className="icon">
                <FaLinkedinIn className=" w-[30px] text-lg text-[#03a9f4] " />
              </span>
              <span className="text text-white">www.linkedin.com/abdullah</span>
            </li>
            <li className="relative my-[10px] cursor-pointer">
              <span className="icon">
                <HiLocationMarker className=" w-[30px] text-lg text-[#03a9f4] " />
              </span>
              <span className="text text-white">Karachi, Pakistan</span>
            </li>
          </ul>
        </div>

        <div className="contactInfo education pt-[40px] ">
          <h3 className="title text-white font-semibold tracking-wider mb-[20px]">
            EDUCATION
          </h3>
          <ul className="relative ">
            <li className="relative my-[10px] cursor-pointer mb-[15px]">
              <h5 className="text-[#03a9f4] font-semibold">2019 - 2021</h5>
              <h4 className="text-white font-semibold">Matriculation</h4>
              <h4 className="text-white font-light">YEN Academy</h4>
            </li>
            <li className="relative my-[10px] cursor-pointer mb-[15px]">
              <h5 className="text-[#03a9f4] font-semibold">2021 - PRESENT</h5>
              <h4 className="text-white font-semibold">
                Intermediate with Pre-Engineering
              </h4>
              <h4 className="text-white font-light">Sir Adamjee Institute</h4>
            </li>
            <li className="relative my-[10px] cursor-pointer mb-[15px]">
              <h5 className="text-[#03a9f4] font-semibold">2020 - PRESENT</h5>
              <h4 className="text-white font-semibold">
                Advanced Diploma in Software Engineering
              </h4>
              <h4 className="text-white font-light">
                Aptech Computer Education
              </h4>
            </li>
          </ul>
        </div>

        <div className="contactInfo language pt-[40px] ">
          <h3 className="title text-white font-semibold tracking-wider mb-[20px]">
            LANGUAGES
          </h3>
          <ul className="relative ">
            <li className="relative my-[10px] cursor-pointer mb-[15px]">
              <span className="text font-medium text-white">English</span>
              <span className="percent relative w-full h-[6px] bg-[#081921] block mt-[5px] ">
                <div
                  style={{ width: "70%" }}
                  className="absolute top-0 left-0 h-full bg-[#03a9f4]"
                ></div>
              </span>
            </li>
            <li className="relative my-[10px] cursor-pointer mb-[15px]">
              <span className="text font-medium text-white">Urdu</span>
              <span className="percent relative w-full h-[6px] bg-[#081921] block mt-[5px] ">
                <div
                  style={{ width: "90%" }}
                  className="absolute top-0 left-0 h-full bg-[#03a9f4]"
                ></div>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="right_side relative bg-[#fff] p-10 col-span-2">
        <div className="about mb-[50px] last:mb-0">
          <h2 className="title2 text-[#003147] font-bold tracking-wider mb-[10px] text-xl">
            PROFILE
          </h2>
          <p className="text-[#333]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis eligendi tenetur, similique ex culpa voluptatum
            aspernatur nulla debitis placeat ad fugit fugiat quisquam ab ea,
            sunt beatae dolore? Itaque dolore nemo rerum ullam fuga, expedita
            reiciendis veritatis, perspiciatis neque accusantium porro
            voluptatibus dolorum aut. <br />
            <br /> Molestiae natus libero nesciunt ad, esse, architecto suscipit
            exercitationem a facilis, soluta facere tempore ex alias repudiandae
            molestias quibusdam sint praesentium ab cumque eius. Quisquam
            recusandae exercitationem dolorum animi doloremque nobis earum
            distinctio soluta deleniti temporibus!
          </p>
        </div>
        <div className="about mb-[50px] last:mb-0">
          <h2 className="title2 text-[#003147] font-bold tracking-wider mb-[10px] text-xl">
            EXPERIENCE
          </h2>
          <div className="box flex flex-row my-[20px] max-[600px]:flex-col">
            <div className="year_company min-w-[150px] max-[600px]:mb-1">
              <h5 className="font-semibold text-[#848c90]">2019 - PRESENT</h5>
              <h5 className="font-semibold text-[#848c90]">ABC Company</h5>
            </div>
            <div className="text ">
              <h4 className="font-medium uppercase text-[#2a7da2] text-[16px]">
                Junior Developer
              </h4>
              <p className="text-[#333]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
                eligendi dolorem voluptas, culpa repudiandae illo corporis sit
                quo debitis illum.
              </p>
            </div>
          </div>

          <div className="box flex flex-row my-[20px] max-[600px]:flex-col">
            <div className="year_company min-w-[150px] max-[600px]:mb-1">
              <h5 className="font-semibold text-[#848c90]">2019 - 2021</h5>
              <h5 className="font-semibold text-[#848c90]">XYZ Company</h5>
            </div>
            <div className="text ">
              <h4 className="font-medium uppercase text-[#2a7da2] text-[16px]">
                Junior Developer
              </h4>
              <p className="text-[#333]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium, at!
              </p>
            </div>
          </div>

          <div className="box flex flex-row my-[20px] max-[600px]:flex-col">
            <div className="year_company min-w-[150px] max-[600px]:mb-1">
              <h5 className="font-semibold text-[#848c90]">2018 - 2019</h5>
              <h5 className="font-semibold text-[#848c90]">PQR Company</h5>
            </div>
            <div className="text ">
              <h4 className="font-medium uppercase text-[#2a7da2] text-[16px]">
                Junior Developer
              </h4>
              <p className="text-[#333]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Maiores, provident beatae eligendi a quaerat recusandae?
              </p>
            </div>
          </div>
        </div>

        <div className="about skills mb-[50px] last:mb-0">
          <h2 className="title2 text-[#003147] font-bold tracking-wider mb-[10px] text-xl">
            PROFESSIONAL SKILLS
          </h2>
          <div
            className="box relative w-full justify-center items-center mb-3"
            style={{ display: "grid", gridTemplateColumns: "150px 1fr" }}
          >
            <h4 className="text-[#848c99] font-semibold">HTML</h4>
            <div className="percent relative w-full h-[10px] bg-[#f0f0f0] block mt-[5px]">
              <div
                style={{ width: "95%" }}
                className="absolute top-0 left-0 h-full bg-[#03a9f4]"
              ></div>
            </div>
          </div>
          <div
            className="box relative w-full justify-center items-center mb-3"
            style={{ display: "grid", gridTemplateColumns: "150px 1fr" }}
          >
            <h4 className="text-[#848c99] font-semibold">CSS</h4>
            <div className="percent relative w-full h-[10px] bg-[#f0f0f0] block mt-[5px]">
              <div
                style={{ width: "85%" }}
                className="absolute top-0 left-0 h-full bg-[#03a9f4]"
              ></div>
            </div>
          </div>
          <div
            className="box relative w-full justify-center items-center mb-3"
            style={{ display: "grid", gridTemplateColumns: "150px 1fr" }}
          >
            <h4 className="text-[#848c99] font-semibold">JAVASCRIPT</h4>
            <div className="percent relative w-full h-[10px] bg-[#f0f0f0] block mt-[5px]">
              <div
                style={{ width: "90%" }}
                className="absolute top-0 left-0 h-full bg-[#03a9f4]"
              ></div>
            </div>
          </div>
          <div
            className="box relative w-full justify-center items-center mb-3"
            style={{ display: "grid", gridTemplateColumns: "150px 1fr" }}
          >
            <h4 className="text-[#848c99] font-semibold">NODE JS</h4>
            <div className="percent relative w-full h-[10px] bg-[#f0f0f0] block mt-[5px]">
              <div
                style={{ width: "82%" }}
                className="absolute top-0 left-0 h-full bg-[#03a9f4]"
              ></div>
            </div>
          </div>
          <div
            className="box relative w-full justify-center items-center mb-3"
            style={{ display: "grid", gridTemplateColumns: "150px 1fr" }}
          >
            <h4 className="text-[#848c99] font-semibold">REACT JS</h4>
            <div className="percent relative w-full h-[10px] bg-[#f0f0f0] block mt-[5px]">
              <div
                style={{ width: "75%" }}
                className="absolute top-0 left-0 h-full bg-[#03a9f4]"
              ></div>
            </div>
          </div>
          <div
            className="box relative w-full justify-center items-center mb-3"
            style={{ display: "grid", gridTemplateColumns: "150px 1fr" }}
          >
            <h4 className="text-[#848c99] font-semibold">NEXT JS</h4>
            <div className="percent relative w-full h-[10px] bg-[#f0f0f0] block mt-[5px]">
              <div
                style={{ width: "79%" }}
                className="absolute top-0 left-0 h-full bg-[#03a9f4]"
              ></div>
            </div>
          </div>
        </div>

        <div className="about interest mb-[50px] last:mb-0">
          <h2 className="title2 text-[#003147] font-bold tracking-wider mb-[10px] text-xl">
            INTERESTS
          </h2>
          <ul className="grid grid-cols-4	max-[1000px]:grid-cols-2 max-[600px]:grid-cols-1">
            <li className="text-[#333] font-semibold m-[10]">
              {" "}
              <BiJoystickAlt className="inline-block text-[#03a9f4] text-[20px] w-[20px] m-1" />
              Gaming
            </li>
            <li className="text-[#333] font-semibold m-[10]">
              {" "}
              <RiRidingFill className="inline-block text-[#03a9f4] text-[20px] w-[20px] m-1" />
              Riding
            </li>
            <li className="text-[#333] font-semibold m-[10]">
              <MdOutlineSportsTennis className="inline-block text-[#03a9f4] text-[20px] w-[20px] m-1" />
              Sports
            </li>
            <li className="text-[#333] font-semibold m-[10]">
              <FaKeyboard className="inline-block text-[#03a9f4] text-[20px] w-[20px] m-1" />
              Developing
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
