import { Link } from 'react-router'
import { FaArrowRight } from 'react-icons/fa'

const CallToActionSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="bg-gray-100 rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="min-h-[400px] relative">
              <img
                src="/image/call-to-action.jpg"
                alt="Call to Action"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <h1 className="text-4xl font-lobster mb-4">Become A Teacher</h1>
              <p className="text-gray-600 mb-6">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.
                Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <Link
                to="/call-to-action"
                className=" bg-orange-500 hover:bg-orange-600 transition  btn-primary inline-flex items-center px-8 py-3 rounded-full w-fit"
              >
                Get Started Now
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToActionSection

