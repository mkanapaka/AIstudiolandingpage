"use client";
import React from "react";
import GradientCallToActionButton from "../components/gradient-call-to-action-button";

function MainComponent() {
  const companies = [
    "Company A",
    "Company B",
    "Company C",
    "Company D",
    "Company E",
    "Company F",
    "Company G",
    "Company H",
    "Company I",
    "Company J",
  ];

  const services = [
    {
      title: "UI/UX Design",
      icon: "fas fa-paint-brush",
      description:
        "Create stunning, user-friendly interfaces that captivate and convert.",
    },
    {
      title: "Web Development",
      icon: "fas fa-code",
      description:
        "Build powerful, responsive websites that drive results for your business.",
    },
    {
      title: "Digital Branding",
      icon: "fas fa-bullhorn",
      description:
        "Craft a unique brand identity that resonates with your target audience.",
    },
    {
      title: "AI Transformation",
      icon: "fas fa-robot",
      description:
        "Leverage AI to transform and optimize your digital processes and products.",
    },
  ];

  const testimonials = [
    {
      name: "John Doe",
      company: "Tech Co",
      text: "CraftR delivered an amazing website for us. Highly recommended!",
    },
    {
      name: "Jane Smith",
      company: "Design Agency",
      text: "The UI/UX design work was top-notch. Our clients love it!",
    },
    {
      name: "Mike Johnson",
      company: "Startup Inc",
      text: "Fast, efficient, and creative. CraftR is our go-to for all things digital!",
    },
    {
      name: "Sarah Lee",
      company: "E-commerce Giant",
      text: "The AI transformation services provided by CraftR have revolutionized our business processes!",
    },
    {
      name: "David Brown",
      company: "Marketing Firm",
      text: "Exceptional digital branding work. CraftR truly understands how to create a lasting impression.",
    },
  ];

  const pricingPlans = [
    {
      name: "Basic Plan",
      price: "$0",
      features: ["Basic UI/UX Design", "Simple Web Development", "1 Revision"],
      buttonGradient: "from-blue-400 to-blue-600",
    },
    {
      name: "Pro Plan",
      price: "$200",
      features: [
        "Advanced UI/UX Design",
        "Full-Stack Web Development",
        "Unlimited Revisions",
        "Priority Support",
      ],
      buttonGradient: "from-purple-400 to-purple-600",
      bestValue: true,
    },
  ];

  return (
    <div className="font-roboto bg-[#F9F1EE]">
      <header className="px-24 py-8 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="https://ucarecdn.com/ce7ad2d8-6a3b-4a8a-b30b-c699c3be9c58/-/format/auto/"
            alt="CraftR Logo"
            className="h-[48px] w-auto"
          />
        </div>
        <nav className="flex items-center">
          <a
            href="#about"
            className="text-black text-lg font-medium mr-12 px-3 py-1 rounded-lg hover:bg-[#964230] hover:text-white transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#work"
            className="text-black text-lg font-medium mr-12 px-3 py-1 rounded-lg hover:bg-[#964230] hover:text-white transition-colors duration-300"
          >
            Work
          </a>
          <a
            href="#contact"
            className="text-black text-lg font-medium mr-16 px-3 py-1 rounded-lg hover:bg-[#964230] hover:text-white transition-colors duration-300"
          >
            Contact
          </a>
          <GradientCallToActionButton text="Book a Call" />
        </nav>
      </header>

      <main className="container mx-auto px-24">
        <section className="hero py-20 text-center mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8 font-roboto leading-relaxed">
            <span className="block">Get your websites and apps</span>
            <span className="block mt-6">
              in days,{" "}
              <span className="relative inline-block">
                <span className="relative z-10">not months</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#FFE380] to-[#FBC918] -skew-y-3 rounded-lg px-6 py-3"></span>
              </span>
              .
            </span>
          </h1>
          <p className="text-xl font-medium text-black mt-6">
            💛 UI/UX & Web Development with AI, lightning fast delivery 💛
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <GradientCallToActionButton text="See Plans" />
            <button className="px-8 py-4 text-black text-lg font-medium rounded-lg flex items-center group transition-all duration-300">
              <span className="mr-2 group-hover:text-[#964230]">
                View our Work
              </span>
              <i className="fas fa-arrow-right text-black group-hover:text-[#964230] transform group-hover:rotate-[-45deg] transition-transform duration-300"></i>
            </button>
          </div>
        </section>

        <section className="trusted-companies mt-12 mb-20">
          <h2 className="text-2xl font-bold text-center mb-16">
            🌍 Trusted by Companies
          </h2>
          <div className="overflow-hidden">
            <div className="flex animate-scroll">
              {[...companies, ...companies].map((company, index) => (
                <div key={index} className="flex-shrink-0 px-8">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="our-services mt-32 mb-20">
          <h2 className="text-4xl font-bold text-center mb-16">
            🚀 Our Services
          </h2>
          <div className="flex justify-center gap-8 pb-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-[#F9F1EE] rounded-2xl shadow-lg p-8 text-center transition-all duration-300 hover:shadow-xl group relative overflow-hidden cursor-pointer w-64 h-40"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#964230] to-[#FC6F50] opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-lg p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {service.description}
                  </p>
                </div>
                <div className="bg-gradient-to-r from-[#964230] to-[#FC6F50] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className={`${service.icon} text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-[#964230]">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </section>

        <section className="testimonials mt-32 mb-20">
          <h2 className="text-4xl font-bold text-center mb-16">
            🗣️ Client Speak!
          </h2>
          <div className="relative">
            <div className="flex overflow-x-auto gap-6 pb-4 carousel-container">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 max-w-sm flex-shrink-0 w-80 transform hover:-translate-y-1 transition-transform duration-300 border border-gray-200"
                >
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">
                        {testimonial.company}
                      </p>
                    </div>
                    <div className="text-yellow-400">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <p className="text-lg">{testimonial.text}</p>
                </div>
              ))}
            </div>
            <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-[#F9F1EE] to-transparent pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[#F9F1EE] to-transparent pointer-events-none"></div>
          </div>
        </section>

        <section className="pricing mt-32 mb-32">
          <h2 className="text-4xl font-bold text-center mb-16">
            💰 Our Pricing
          </h2>
          <div className="flex justify-center gap-12">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg p-8 text-center relative w-80 transition-all duration-300 hover:shadow-xl ${
                  plan.bestValue
                    ? "hover:bg-gradient-to-br from-purple-100 to-purple-200"
                    : "hover:bg-gradient-to-br from-blue-100 to-blue-200"
                }`}
              >
                {plan.bestValue && (
                  <div className="absolute top-0 right-0 bg-yellow-400 text-black font-bold py-1 px-4 rounded-tr-2xl rounded-bl-2xl">
                    Best Value
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <p className="text-4xl font-bold mb-6">{plan.price}</p>
                <ul className="mb-8 text-left">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="mb-2 flex items-center">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`px-6 py-3 bg-gradient-to-r ${plan.buttonGradient} text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105`}
                >
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>

      <div className="bg-slate-800 text-white py-16 mb-20">
        <div className="container mx-auto px-24 flex flex-col items-center">
          <h2 className="text-4xl font-bold mb-8 text-center">
            ✨✨ Let's create something amazing together! 💥💥
          </h2>
          <GradientCallToActionButton text="Get Started" />
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .carousel-container {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .carousel-container::-webkit-scrollbar {
          display: none;
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
      `}</style>
    </div>
  );
}

export default MainComponent;