import { AiFillFire, AiFillHome } from "react-icons/ai";
import { GrGamepad } from "react-icons/gr";
import { HiOutlineSaveAs } from "react-icons/hi";

export const SideBarItems = [
  {
    title: "Home",
    icon: <AiFillHome size={18} />,
    link: "/",
  },
  {
    title: "Trending",
    icon: <AiFillFire size={18} />,
    link: "/trending",
  },
  {
    title: "Gaming",
    icon: <GrGamepad size={18} />,
    link: "/gaming",
  },
  {
    title: "Saved Videos",
    icon: <HiOutlineSaveAs size={18} />,
    link: "/saved-videos",
  },
];
