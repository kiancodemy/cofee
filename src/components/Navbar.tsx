import { motion } from "motion/react";
import { IoMdClose } from "react-icons/io";
export default function Navbar({ handleClick }: { handleClick: () => void }) {
  return (
    <motion.ul
      onClick={() => handleClick()}
      className="fixed z-[2000] flex  justify-end  inset-0"
    >
      <motion.ul
        key="modal"
        initial={{ x: 150 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.3 }}
        className="flex  z-[1000] list-disc list-inside capitalize text-2xl *:cursor-pointer gap-y-3 py-4  w-[300px] flex-col px-2 bg-yellow-500 text-white"
      >
        <div className="flex justify-end">
          <IoMdClose></IoMdClose>
        </div>
        <li className="hover:bg-black p-2 rounded-md">login </li>
        <li className="hover:bg-black p-2 rounded-md">about us</li>
        <li className="hover:bg-black p-2 rounded-md">products</li>
      </motion.ul>
    </motion.ul>
  );
}
