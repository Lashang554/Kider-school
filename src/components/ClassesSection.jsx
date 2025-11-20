import React from 'react'

const Classes = () => {
  const classes = [
    {
      image: 'classes-1.jpg',
      title: 'Art & Drawing',
      teacher: 'Jhon Doe',
      price: '$99',
      age: '3-5 Years',
      time: '9-10 AM',
      capacity: '30 Kids',
    },
    {
      image: 'classes-2.jpg',
      title: 'Color Management',
      teacher: 'Jhon Doe',
      price: '$99',
      age: '3-5 Years',
      time: '9-10 AM',
      capacity: '30 Kids',
    },
    {
      image: 'classes-3.jpg',
      title: 'Athletic & Dance',
      teacher: 'Jhon Doe',
      price: '$99',
      age: '3-5 Years',
      time: '9-10 AM',
      capacity: '30 Kids',
    },
    {
      image: 'classes-4.jpg',
      title: 'Language & Speaking',
      teacher: 'Jhon Doe',
      price: '$99',
      age: '3-5 Years',
      time: '9-10 AM',
      capacity: '30 Kids',
    },
    {
      image: 'classes-5.jpg',
      title: 'Religion & History',
      teacher: 'Jhon Doe',
      price: '$99',
      age: '3-5 Years',
      time: '9-10 AM',
      capacity: '30 Kids',
    },
    {
      image: 'classes-6.jpg',
      title: 'General Knowledge',
      teacher: 'Jhon Doe',
      price: '$99',
      age: '3-5 Years',
      time: '9-10 AM',
      capacity: '30 Kids',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center" data-aos="fade-up">
          <h1 className="text-3xl font-bold mb-2">School Classes</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero
            ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.
          </p>
        </div>

      </div >
    </section>
  );
};

export default Classes;
