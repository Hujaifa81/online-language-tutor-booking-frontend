import image from '../assets/banner3.jpg'
// import useTitle from '../hooks/UseTitle';
const AboutUs = () => {
    // useTitle()
    return (
        <div className="max-w-4xl mx-auto p-6 mt-10 text-center">
            <h1 className="text-4xl font-bold text-red-600">About Us</h1>
            <p className="mt-6 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">Welcome to TutorConnect, where language learning meets opportunity.

                We are a global platform dedicated to connecting students with expert language tutors. Our mission is to make language education accessible, personalized, and effective for everyone — no matter where they are.

                At TutorConnect, we believe that learning a new language opens doors to new cultures, careers, and communities.
            </p>
            <div className="mt-8 flex justify-center items-center gap-6">
                <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-500">Our Mission</h2>
                    <p className="mt-6 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                        Our mission at <span className="text-blue-600 font-semibold">Hi Tutor</span> is to empower individuals across the globe to learn new languages with confidence.
                        <br />
                        We believe that language is a bridge — connecting cultures, opportunities, and communities. Through personalized lessons with experienced tutors, flexible scheduling, and real-world practice, we aim to make language learning simple, accessible, and inspiring for everyone.
                        <br />
                        We are committed to breaking barriers, opening doors, and helping you achieve your dreams — one word at a time.
                    </p>
                </div>


            </div>

            <div className="mt-8">
                <img
                    src={image}
                    alt="image"
                    className="rounded-lg shadow-lg w-full"
                />
            </div>

            <div className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-500">Join Us</h2>
                <p className="text-gray-700 mt-2 text-lg leading-relaxed">
                    Become part of the Hi Tutor community! By joining us, you’ll unlock exclusive access to the latest movie releases, personalized recommendations, and a vibrant community of fellow movie lovers. <br /> Whether you're here to watch your favorite films or discover something new, StreamFlix is your one-stop destination for all things cinema. Sign up today and start exploring!
                </p>
            </div>
        </div>
    );
};

export default AboutUs;
