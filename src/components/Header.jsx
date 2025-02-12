import { FaArrowRight } from "react-icons/fa";
import firstImg from '../../src/assets/one.jpg'
import secondImg from '../../src/assets/two.jpg'
import thirdImg from '../../src/assets/three.jpg'
import fourthImg from '../../src/assets/fourjpg.jpg'
import { motion } from "framer-motion";

const Header = () => {
    return (
        <div className="bg-white min-h-screen flex flex-col items-center p-8">
      <main className="max-w-5xl text-center mt-12">
        <h2 className="text-4xl font-bold">
          A good <span className="text-blue-500">#education</span> is always a base of
        </h2>
        <motion.h3 initial={{x:0}} animate={{x:20}}  transition={{ repeat: Infinity, repeatType: "reverse", duration: 1, ease: "linear" }} className="bg-purple-700 mt-2 text-2xl inline-block px-2 py-2 text-white font-bold rounded-md">
        A bright future
        </motion.h3>
        <p className="mt-1 text-[20px]">Start your education directory
        Quickly and efficiently</p>
        <p className="text-gray-600 mt-4">
        Our tutor-related website connects students with expert tutors for personalized learning. Whether you need help with academics, test prep, or skill development, we offer one-on-one and group sessions. Easily find tutors, schedule lessons, and track progress. Learn anytime, anywhere with trusted professionals. Start your journey today and achieve your learning goals! 🚀
        </p>
        <div className="flex gap-4 justify-center mt-6">
          <button className="bg-orange-500 px-3 py-2 text-white hover:bg-orange-600 flex items-center gap-2">
            Start as student <FaArrowRight />
          </button>
          <button className="border px-3 py-2 border-gray-300 hover:bg-gray-100 text-black">
            Join as Instructor <span className="text-blue-500">It’s Free!</span>
          </button>
        </div>
      </main>
      <div className="relative mt-12 w-full flex justify-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-blue-200 rounded-full w-32 h-32 flex items-center justify-center">
            <img src={firstImg} alt="Person 1" className="rounded-full" />
          </div>
          <div className="bg-yellow-200 rounded-full w-32 h-32 flex items-center justify-center">
            <img src={secondImg} alt="Person 2" className="rounded-full" />
          </div>
          <div className="bg-purple-200 rounded-full w-32 h-32 flex items-center justify-center">
            <img src={thirdImg} alt="Person 3" className="rounded-full" />
          </div>
          <div className="bg-green-200 rounded-full w-32 h-32 flex items-center justify-center">
            <img src={fourthImg} alt="Person 4" className="rounded-full" />
          </div>
        </div>
      </div>
      
        </div>
    );
};

export default Header;