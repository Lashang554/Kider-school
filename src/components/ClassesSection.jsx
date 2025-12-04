import { Link } from "react-router";

const ClassesSection = () => {
    const classes = [
        {
            image: "classes-1.jpg",
            title: "Art & Drawing",
            teacher: "Jhon Doe",
            price: "$99",
            age: "3-5 Years",
            time: "9-10 AM",
            capacity: "30 Kids",
        }, {
            image: "classes-2.jpg",
            title: "Color Management",
            teacher: "Jhon Doe",
            price: "$99",
            age: "3-5 Years",
            time: "9-10 AM",
            capacity: "30 Kids",
        }, {
            image: "classes-3.jpg",
            title: "Athletic & Dance",
            teacher: "Jhon Doe",
            price: "$99",
            age: "3-5 Years",
            time: "9-10 AM",
            capacity: "30 Kids",
        }, {
            image: "classes-4.jpg",
            title: "Language & Speaking",
            teacher: "Jhon Doe",
            price: "$99",
            age: "3-5 Years",
            time: "9-10 AM",
            capacity: "30 Kids",
        }, {
            image: "classes-5.jpg",
            title: "Religion & History",
            teacher: "Jhon Doe",
            price: "$99",
            age: "3-5 Years",
            time: "9-10 AM",
            capacity: "30 Kids",
        }, {
            image: "classes-6.jpg",
            title: "General Knowledge",
            teacher: "Jhon Doe",
            price: "$99",
            age: "3-5 Years",
            time: "9-10 AM",
            capacity: "30 Kids",
        },
    ];

    return (
        <section className="py-10 ">

            {/* Added responsive horizontal padding here */}
            <div className="container mx-auto  px-10 sm:px-6 lg:px-8">
                {/* Title Section */}
                <div className="text-center max-w-2xl mx-auto mb-12" data-aos="fade-up">
                    <h1 className="text-4xl font-lobster mb-4">School Classes</h1>
                    <p>
                        Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.
                    </p>
                </div>

                {/* Classes Grid (with previous fix) */}
                <div className="pt-45 mx-auto px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-1 gap-y-40 justify-items-center">
                    {classes.map((classItem, index) => (
                        <div
                            key={index}
                            className="bg-[#FFF5F5] w-85 rounded-2xl shadow-lg hover:shadow-xl transition-all pt-20 pb-6 relative"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            {/* Rounded Image */}
                            <div className="absolute -top-38 left-1/2 -translate-x-1/2">
                                <div className="w-60 h-60 rounded-full bg-[#FFF5F5] p-4 shadow-xl">
                                    <img
                                        src={`/image/${classItem.image}`}
                                        alt={classItem.title}
                                        className="w-full h-full rounded-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Class Title */}
                            <Link
                                to="/classes"
                                className="block text-center text-3xl font-lobster mt-6 mb-4 text-primary hover:text-orange-500"
                            >
                                {classItem.title}
                            </Link>

                            {/* Teacher & Price */}
                            <div className="flex items-center justify-between px-6 mb-6">
                                <div className="flex items-center">
                                    <img
                                        src="/image/user.jpg"
                                        alt="teacher"
                                        className="w-14 h-14 rounded-full mr-3"
                                    />
                                    <div>
                                        <h6 className="text-orange-500 font-semibold">{classItem.teacher}</h6>
                                        <small className="text-gray-600">Teacher</small>
                                    </div>
                                </div>
                                <span className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold">
                                    {classItem.price}
                                </span>
                            </div>

                            {/* Age / Time / Capacity */}
                            <div className="grid grid-cols-3 gap-4 px-6 border-t pt-4">
                                <div>
                                    <div className="border-t-4 border-orange-500 mb-1"></div>
                                    <h6 className="text-orange-500 text-sm font-semibold">Age:</h6>
                                    <small className="text-gray-600">{classItem.age}</small>
                                </div>
                                <div>
                                    <div className="border-t-4 border-green-500 mb-1"></div>
                                    <h6 className="text-green-600 text-sm font-semibold">Time:</h6>
                                    <small className="text-gray-600">{classItem.time}</small>
                                </div>
                                <div>
                                    <div className="border-t-4 border-yellow-500 mb-1"></div>
                                    <h6 className="text-yellow-600 text-sm font-semibold">Capacity:</h6>
                                    <small className="text-gray-600">{classItem.capacity}</small>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClassesSection;