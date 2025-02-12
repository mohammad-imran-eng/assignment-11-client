import { Fade } from "react-awesome-reveal";
import { FaChalkboardTeacher } from "react-icons/fa";

const MeetOurTeam = () => {
    const tutors = [
        { name: "John Doe", subject: "English", image: "https://i.ibb.co.com/p6g5ZsKj/teacher-1.jpg" },
        { name: "Jane Smith", subject: "Mathematics", image: "https://i.ibb.co.com/wZs0bq2y/teacher-2jpg.jpg" },
        { name: "Michael Johnson", subject: "Science", image: "https://i.ibb.co.com/VYFnsRd6/teacher-3.jpg" },
      ];
    return (
        <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold flex justify-center items-center gap-2">
              <FaChalkboardTeacher className="text-blue-500" /> Featured Tutors
            </h2>
            <p className="text-gray-600 mt-2">Meet our top-rated tutors, ready to help you excel!</p>
          </div>
          
          <Fade cascade damping={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tutors.map((tutor, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-md text-center">
                  <img
                    src={tutor.image}
                    alt={tutor.name}
                    className="w-24 h-24 mx-auto rounded-full mb-4"
                  />
                  <h3 className="text-lg font-semibold">{tutor.name}</h3>
                  <p className="text-gray-500">{tutor.subject}</p>
                </div>
              ))}
            </div>
          </Fade>
        </div>
      </section>
    );
};

export default MeetOurTeam;