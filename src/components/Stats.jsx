import { FaUserGraduate, FaStar, FaGlobe, FaUsers } from 'react-icons/fa';

const Stats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
      {/* Card 1 */}
      <div className="text-center bg-white border  rounded-xl p-6 shadow-md hover:shadow-xl transition">
        <FaUserGraduate className="text-4xl text-primary mb-3 mx-auto" />
        <h2 className="text-2xl font-bold text-gray-800">3500+</h2>
        <p className="text-gray-600 font-medium">Experienced Tutors</p>
      </div>

      {/* Card 2 */}
      <div className="text-center bg-white border  rounded-xl p-6 shadow-md hover:shadow-xl transition">
        <FaStar className="text-4xl text-yellow-500 mb-3 mx-auto" />
        <h2 className="text-2xl font-bold text-gray-800">40000+</h2>
        <p className="text-gray-600 font-medium">5-star Tutor Reviews</p>
      </div>

      {/* Card 3 */}
      <div className="text-center bg-white border  rounded-xl p-6 shadow-md hover:shadow-xl transition">
        <FaGlobe className="text-4xl text-blue-500 mb-3 mx-auto" />
        <h2 className="text-2xl font-bold text-gray-800">110+</h2>
        <p className="text-gray-600 font-medium">Languages Taught</p>
      </div>

      {/* Card 4 */}
      <div className="text-center bg-white border  rounded-xl p-6 shadow-md hover:shadow-xl transition">
        <FaUsers className="text-4xl text-pink-500 mb-3 mx-auto" />
        <h2 className="text-2xl font-bold text-gray-800">720,000+</h2>
        <p className="text-gray-600 font-medium">Users</p>
      </div>
    </div>
  );
};

export default Stats;
