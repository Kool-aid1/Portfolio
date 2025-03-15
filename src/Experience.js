import React from "react";
import "./App.css";

function App() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div id="experience" className="pt-20">
        <header className="text-center text-4xl font-bold mb-8 text-gray-800">
          Technical Experience
        </header>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto p-6 space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
              Capstone Advised Software Engineer, August 2023 - May 2024 @
              Qualcomm
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                Developed "XR Translate the World," an Android AR application
                using Unity and Snapdragon SDK on Motorola Edge+ with Think
                Reality A3 glasses.
              </li>
              <li>
                Implemented Google Cloud Vision API for real-time word detection
                in the user's field of view, utilizing C# for application logic
                and Python for API integration.
              </li>
              <li>
                Integrated gaze interaction from Snapdragon SDK for user
                interaction, enabling real-time translation of detected words
                into English, Chinese, and Spanish.
              </li>
              <li>
                Utilized tools including Unity, Visual Studio, and Snapdragon
                SDK throughout the development lifecycle.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
              Web Developer Intern, June 2022 - August 2022 @ Electriq Marketing
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                Engineered responsive software meeting specifications on Shopify
                Liquid and HubSpot HUBL, while prioritizing client requirements.
              </li>
              <li>
                Constructed Macy’s Wine Shop website using HTML, CSS, Tailwind
                CSS, HUBL, Liquid, JavaScript, and Fetch API.
              </li>
              <li>
                Enhanced client projects with additional functionalities such as
                navigation, blog pages, and carousel slides, utilizing Splide
                JS.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
              IT Manager Assistant, March 2016 - January 2019 @ District
              Attorney's Office
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                Oversaw and maintained user technology inventory across Southern
                California districts, ensuring accurate tracking and location
                data using a robust ticketing system.
              </li>
              <li>
                Coordinated the deployment and setup of tech equipment to
                enhance user accessibility and operational efficiency.
              </li>
              <li>
                Provided frontline technical support via phone and email,
                resolving issues remotely and documenting solutions in a
                comprehensive ticketing management system.
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-20">
          <header className="text-center text-4xl font-bold mb-8 text-gray-800">
            Other Experience
          </header>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto p-6 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                Triage Technician, Nov 2024 - Current @ Give Back Wireless
              </h2>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  Utilized Phonecheck software to accurately grade and test
                  mobile devices, ensuring they meet quality standards for
                  resale.
                </li>
                <li>
                  Diagnosed and resolved a wide range of mobile device issues,
                  enhancing device performance and customer satisfaction.
                </li>
                <li>
                  Conducted thorough inspections and assessments of mobile
                  devices to identify defects and ensure compliance with
                  industry standards.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                Server, Aug 2022 - Nov 2024 @ Bonchon
              </h2>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  Expertly utilized active listening and interpersonal skills to
                  identify customer preferences and make tailored
                  recommendations, resulting in increased customer satisfaction
                  and repeat business.
                </li>
                <li>
                  Implemented upselling and cross-selling techniques to promote
                  Bonchon's signature fried chicken and complementary menu
                  items, consistently achieving and surpassing sales targets.
                </li>
                <li>
                  Maintained a friendly and efficient service environment,
                  effectively managing customer inquiries and resolving issues
                  promptly, leading to positive customer experiences and
                  enhanced brand loyalty.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                Barista, Sept 2021 - May 2022 @ Starbucks
              </h2>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  Championed development of strategic customer service skills
                  within the team, resulting in a notable 20% increase in
                  customer connections.
                </li>
                <li>
                  Contributed in driving weekly store sales up by $10K through
                  effective management of store operations and a dedicated focus
                  on customer-centered tasks.
                </li>
                <li>
                  Played a role in achieving the district's fastest drive-thru
                  times of 43 seconds per car during peak store hours, balancing
                  speed and efficiency without compromising high-quality
                  customer service.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
