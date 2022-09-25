import React from "react";
import CakeIcon from "@mui/icons-material/Cake";
import WorkIcon from "@mui/icons-material/Work";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import Diversity3Icon from "@mui/icons-material/Diversity3";

const RightPanel = () => {
  return (
    <>
      <div className="w-[25vw] p-4 h-screen fixed right-0 bg-slate-600">
        <div className="p-4 shadow-[0px_5px_15px_rgba(0,0,0,0.35)] bg-white rounded-2xl">
          <p>Sponsores</p>
          <div className="border-2 flex rounded-xl h-20 mt-3">
            <div className="">
              <img
                className="h-[75px] rounded-xl w-[155px]"
                src="https://www.wordstream.com/wp-content/uploads/2021/07/persuasive-ads-coca-cola.jpg"
                alt="cocacola india"
              />
            </div>
            <div className="flex justify-center items-center pl-4">
              <a
                href="https://www.coca-colaindia.com/homepage"
                className="p-2 border-2 mb-2 hover:bg-slate-600 hover:text-white rounded-xl"
              >
                Visit Website
              </a>
            </div>
          </div>
          <div className="border-2 flex rounded-xl h-20 mt-3">
            <div className="">
              <img
                className="h-[75px] rounded-xl w-[155px]"
                src="https://visme.co/blog/wp-content/uploads/2019/08/Behind-the-Scenes.png"
                alt="mcdonalds india"
              />
            </div>
            <div className="flex justify-center items-center pl-4">
              <a
                href="https://www.mcdonaldsindia.com/"
                className="p-2 border-2 mb-2 hover:bg-slate-600 hover:text-white rounded-xl"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
        <div className="p-4 shadow-[0px_5px_15px_rgba(0,0,0,0.35)] bg-white rounded-2xl mt-5">
          <p>
            Birthdays{" "}
            <span>
              <CakeIcon />
            </span>
          </p>
          <div>
            <div className="border-2 rounded-xl mt-3 p-3">
              <span>
                <strong className="p-1">Shweta</strong>,
                <strong className="p-1">Rishabh</strong> and
                <a href="/Birthday" className="text-blue-400">
                  3 others
                </a>{" "}
                have their Birthdays Today. Wish them!
              </span>
            </div>
          </div>
        </div>
        <div className="p-4 shadow-[0px_5px_15px_rgba(0,0,0,0.35)] bg-white rounded-2xl mt-5">
          <p>Groups</p>
          <div>
            <div className="rounded-xl">
              <ul className="p-2">
                <a href="/group">
                  <li className="p-2 border-2 mb-2 hover:bg-slate-600 hover:text-white rounded-xl">
                    {" "}
                    <span>
                      <WorkIcon />
                    </span>{" "}
                    work
                  </li>
                </a>
                <a href="/group">
                  <li className="p-2 border-2 mb-2 hover:bg-slate-600 hover:text-white rounded-xl">
                    {" "}
                    <span>
                      <FamilyRestroomIcon />
                    </span>{" "}
                    family
                  </li>
                </a>
                <a href="/group">
                  <li className="p-2 border-2 mb-2 hover:bg-slate-600 hover:text-white rounded-xl">
                    {" "}
                    <span>
                      <Diversity3Icon />
                    </span>{" "}
                    friends
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightPanel;
