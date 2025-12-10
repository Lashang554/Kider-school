import { useState } from 'react'

const AppointmentSection = () => {
    const [formData, setFormData] = useState({
        guardianName: '',
        guardianEmail: '',
        childName: '',
        childAge: '',
        message: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        // Handle form submission here
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <section className="mx-2 sm:mx-4 md:mx-8 py-5">

            <div className="container mx-auto px-4 sm:px-6 md:px-12">

                <div className="bg-[#FFF5F5] rounded-lg overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="flex flex-col justify-center p-8 lg:p-12">
                            <h1 className="text-4xl font-lobster mb-6">Make Appointment</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <label htmlFor="guardianName" className="block text-sm font-medium text-gray-700 mb-2">
                                            Guardian Name
                                        </label>
                                        <input
                                            type="text"
                                            id="guardianName"
                                            name="guardianName"
                                            value={formData.guardianName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="guardianEmail" className="block text-sm font-medium text-gray-700 mb-2">
                                            Guardian Email
                                        </label>
                                        <input
                                            type="email"
                                            id="guardianEmail"
                                            name="guardianEmail"
                                            value={formData.guardianEmail}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <label htmlFor="childName" className="block text-sm font-medium text-gray-700 mb-2">
                                            Child Name
                                        </label>
                                        <input
                                            type="text"
                                            id="childName"
                                            name="childName"
                                            value={formData.childName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="childAge" className="block text-sm font-medium text-gray-700 mb-2">
                                            Child Age
                                        </label>
                                        <input
                                            type="text"
                                            id="childAge"
                                            name="childAge"
                                            value={formData.childAge}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-3 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                        <div className="min-h-[400px] relative">
                            <img
                                src="/image/appointment.jpg"
                                alt="Appointment"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AppointmentSection

