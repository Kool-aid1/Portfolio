import React from "react";
import "./App.css";

function App() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div id="technicalExperience" className="pt-20">
        <header className="text-center text-2xl font-bold mb-8">
          Technical Experience
        </header>
        {/* Capstone Advised Software Engineer */}
        <div className="max-w-4xl mx-auto p-4">
          <div className="mb-8">
            <header className="text-center text-xl font-semibold mb-4">
              Capstone Advised Software Engineer , August 2023 - May 2024 @
              Qualcomm
            </header>
            <ul className="list-disc list-inside text-left">
              <li className="mb-2">
                Developed "XR Translate the World," an Android AR application
                using Unity and Snapdragon SDK on Motorola Edge+ with Think
                Reality A3 glasses.
              </li>
              <li className="mb-2">
                Implemented Google Cloud Vision API for real-time word detection
                in the user's field of view, utilizing C# for application logic
                and Python for API integration.
              </li>
              <li className="mb-2">
                Integrated gaze interaction from Snapdragon SDK for user
                interaction, enabling real-time translation of detected words
                into English, Chinese, and Spanish.
              </li>
              <li className="mb-2">
                Utilized tools including Unity, Visual Studio, and Snapdragon
                SDK throughout the development lifecycle.
              </li>
            </ul>
          </div>

          <div>
            {/* Web Developer Intern */}
            <div className="mb-8">
              <header className="text-center text-xl font-semibold mb-4">
                Web Developer Intern , June 2022 - August 2022 @ Electriq
                Marketing
              </header>
              <ul className="list-disc list-inside text-left">
                <li className="mb-2">
                  Engineered responsive software meeting specifications on
                  Shopify Liquid and HubSpot HUBL, while prioritizing client
                  requirements.
                </li>
                <li className="mb-2">
                  Constructed Macy’s Wine Shop website using HTML, CSS, Tailwind
                  CSS, HUBL, Liquid, JavaScript, and Fetch API.
                </li>
                <li className="mb-2">
                  Enhanced client projects with additional functionalities such
                  as navigation, blog pages, and carousel slides, utilizing
                  Splide JS.
                </li>
              </ul>
            </div>

            {/* IT Manager Assistant */}
            <div className="mb-8">
              <header className="text-center text-xl font-semibold mb-4">
                IT Manager Assistant , March 2016 - January 2019 @ District
                Attorney's Office
              </header>
              <ul className="list-disc list-inside text-left">
                <li className="mb-2">
                  Oversaw and maintained user technology inventory across
                  Southern California districts, ensuring accurate tracking and
                  location data using a robust ticketing system.
                </li>
                <li className="mb-2">
                  Coordinated the deployment and setup of tech equipment to
                  enhance user accessibility and operational efficiency.
                </li>
                <li className="mb-2">
                  Provided frontline technical support via phone and email,
                  resolving issues remotely and documenting solutions in a
                  comprehensive ticketing management system.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="p-6 bg-gray-100 min-h-screen">
          <div id="otherExperience" className="pt-20">
            <header className="text-center text-2xl font-bold mb-8">
              Other Experience
            </header>
            <div className="max-w-4xl mx-auto p-4">
              <div className="mb-8">
                <header className="text-center text-xl font-semibold mb-4">
                  Server, August 2022 - Present @ Bonchon
                </header>
                <ul className="list-disc list-inside text-left">
                  <li className="mb-2">
                    Expertly utilized active listening and interpersonal skills
                    to identify customer preferences and make tailored
                    recommendations, resulting in increased customer
                    satisfaction and repeat business.
                  </li>
                  <li className="mb-2">
                    Implemented upselling and cross-selling techniques to
                    promote Bonchon's signature fried chicken and complementary
                    menu items, consistently achieving and surpassing sales
                    targets.
                  </li>
                  <li className="mb-2">
                    Maintained a friendly and efficient service environment,
                    effectively managing customer inquiries and resolving issues
                    promptly, leading to positive customer experiences and
                    enhanced brand loyalty.
                  </li>
                </ul>
              </div>
              <div className="mb-8">
                <header className="text-center text-xl font-semibold mb-4">
                  Barista, September 2021 - May 2022 @ Starbucks
                </header>
                <ul className="list-disc list-inside text-left">
                  <li className="mb-2">
                    Championed development of strategic customer service skills
                    within the team, resulting in a notable 20% increase in
                    customer connections.
                  </li>
                  <li className="mb-2">
                    Contributed in driving weekly store sales up by $10K through
                    effective management of store operations and a dedicated
                    focus on customer-centered tasks.
                  </li>
                  <li className="mb-2">
                    Played a role in achieving the district's fastest drive-thru
                    times of 43 seconds per car during peak store hours,
                    balancing speed and efficiency without compromising
                    high-quality customer service.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
