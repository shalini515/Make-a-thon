// import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
// import { FaUserCircle } from "react-icons/fa";
// import ProfilePage from "./ProfilePage";

// const allIdeas = [
//   { id: 1, title: "AI-Powered Tutor", description: "A virtual AI tutor that adapts to student learning styles.", category: "Technology", image: "https://via.placeholder.com/300x200", funding: 7500, goal: 15000 },
//   { id: 2, title: "Smart Wearable for Health", description: "A smartwatch that monitors vitals and predicts health issues.", category: "Healthcare", image: "https://via.placeholder.com/300x200", funding: 12000, goal: 25000 },
//   { id: 3, title: "Solar-Powered Water Purifier", description: "A sustainable device that purifies water using solar energy.", category: "Sustainability", image: "https://via.placeholder.com/300x200", funding: 5000, goal: 20000 },
//   ...Array.from({ length: 94 }, (_, i) => ({
//     id: i + 4,
//     title: `Innovative Idea ${i + 4}`,
//     description: `Description for Idea ${i + 4}. This is an innovative concept to solve a problem.`,
//     category: i % 3 === 0 ? "Technology" : i % 3 === 1 ? "Healthcare" : "Sustainability",
//     image: "https://via.placeholder.com/300x200",
//     funding: Math.floor(Math.random() * 10000),
//     goal: 20000
//   }))
// ];

// function IdeaShowcase() {
//   const [visibleIdeas, setVisibleIdeas] = useState(6);
//   const [filter, setFilter] = useState("All");
//   const [sort, setSort] = useState("Latest");
//   const [search, setSearch] = useState("");
//   const navigate = useNavigate();

//   let filteredIdeas = allIdeas.filter(idea => 
//     (filter === "All" || idea.category === filter) && 
//     idea.title.toLowerCase().includes(search.toLowerCase())
//   );

//   if (sort === "Popular") {
//     filteredIdeas.sort((a, b) => b.funding - a.funding);
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="max-w-6xl mx-auto flex justify-between items-center mb-6">
//         <div className="text-center w-full">
//           <h1 className="text-5xl font-extrabold text-gray-800">Explore Innovative Ideas</h1>
//           <p className="text-gray-600 text-lg">Discover and support groundbreaking ideas across various fields.</p>
//         </div>
//         <FaUserCircle className="text-gray-600 text-4xl cursor-pointer" onClick={() => navigate("/profile")} />
//       </div>

//       <div className="flex justify-center gap-4 mb-6">
//         <input 
//           type="text" 
//           placeholder="Search ideas..." 
//           className="p-3 border rounded-md bg-white shadow-md text-lg" 
//           value={search} 
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <select 
//           className="p-3 border rounded-md bg-white shadow-md text-lg" 
//           value={filter} 
//           onChange={(e) => setFilter(e.target.value)}
//         >
//           <option value="All">All Categories</option>
//           <option value="Technology">Technology</option>
//           <option value="Healthcare">Healthcare</option>
//           <option value="Sustainability">Sustainability</option>
//         </select>
//         <select 
//           className="p-3 border rounded-md bg-white shadow-md text-lg" 
//           value={sort} 
//           onChange={(e) => setSort(e.target.value)}
//         >
//           <option value="Latest">Latest</option>
//           <option value="Popular">Most Funded</option>
//         </select>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {filteredIdeas.slice(0, visibleIdeas).map((idea) => (
//           <div key={idea.id} className="bg-white p-6 shadow-xl rounded-lg hover:shadow-2xl transition duration-300">
//             <img src={idea.image} alt={idea.title} className="w-full h-56 object-cover rounded-md" />
//             <h3 className="text-3xl font-semibold mt-4 text-gray-900">{idea.title}</h3>
//             <p className="text-gray-700 text-base mt-2">{idea.description}</p>
//             <div className="bg-gray-200 h-4 rounded-md mt-3 relative">
//               <div className="bg-green-500 h-4 rounded-md" style={{ width: `${(idea.funding / idea.goal) * 100}%` }}></div>
//             </div>
//             <p className="text-gray-600 text-sm mt-2">${idea.funding} raised of ${idea.goal}</p>
//             <button
//               className="mt-4 w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition duration-300 text-lg"
//               onClick={() => navigate(`/learn-more/${index}`)} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg">}
//               Learn More
//             </button>
//             <button
//               className="mt-2 w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition duration-300 text-lg"
//             >
//               Back This Idea
//             </button>
//           </div>
//         ))}
//       </div>

//       {visibleIdeas < filteredIdeas.length && (
//         <div className="flex justify-center mt-8">
//           <button
//             className="bg-green-600 text-white px-8 py-3 rounded-md text-xl font-semibold hover:bg-green-700 transition duration-300"
//             onClick={() => setVisibleIdeas(prev => prev + 6)}
//           >
//             Show More Ideas
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<IdeaShowcase />} />
//         <Route path="/profile" element={<ProfilePage />} />
//         <Route path="/learn-more/:id" element={<IdeaDetailsPage />} />
//       </Routes>
//     </Router>
//   );
// }
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useParams } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ProfilePage from "./ProfilePage";

const allIdeas = [
    { 
      id: 1, 
      title: "Smart Traffic System", 
      description: "An AI-powered traffic management system to reduce congestion.", 
      category: "Technology", 
      image: "data:image/jpeg;base64,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", 
      funding: 5000, 
      goal: 20000, 
      impact: "Expected to improve traffic flow in 50+ cities.", 
      team: "Team Alpha", 
      challenges: "Overcoming regulatory and infrastructure challenges." 
    },
    { 
      id: 2, 
      title: "AI Medical Diagnosis", 
      description: "AI-driven system to assist doctors in diagnosing diseases more accurately.", 
      category: "Healthcare", 
      image: "https://th.bing.com/th/id/OIP.yxrxe8rz5qGsPxR0eM47jQHaEK?w=261&h=180&c=7&r=0&o=5&pid=1.7", 
      funding: 8000, 
      goal: 25000, 
      impact: "Helping over 10,000 patients get early diagnosis.", 
      team: "Team Beta", 
      challenges: "Ensuring regulatory approval and data privacy." 
    },
    { 
      id: 3, 
      title: "Solar-Powered Water Purifier", 
      description: "A sustainable water purification system powered by solar energy.", 
      category: "Sustainability", 
      image: "data:image/jpeg;base64,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", 
      funding: 3000, 
      goal: 15000, 
      impact: "Providing clean water access to rural communities.", 
      team: "Team Gamma", 
      challenges: "Reducing costs for mass adoption." 
    },
    { 
      id: 4, 
      title: "Accessible Smart Glasses for the Visually Impaired", 
      description: "Smart glasses that help visually impaired people navigate and interact with their environment.", 
      category: "Technology", 
      image: "https://th.bing.com/th/id/OIP.iHdw6Ub3c0kkWTQvHlG0ZAHaEQ?w=309&h=180&c=7&r=0&o=5&pid=1.7", 
      funding: 6000, 
      goal: 20000, 
      impact: "Enhancing mobility and interaction for people with visual impairments.", 
      team: "Team Delta", 
      challenges: "Miniaturizing technology while maintaining comfort." 
    },
    { 
      id: 5, 
      title: "Hand Gesture Recognition for the Disabled", 
      description: "A system that allows people with limited mobility to control devices through hand gestures.", 
      category: "Technology", 
      image: "https://th.bing.com/th/id/OIP.IuxphyVnYqHUQwekSulRQwHaEN?w=241&h=182&c=7&r=0&o=5&pid=1.7", 
      funding: 9000, 
      goal: 25000, 
      impact: "Providing an alternative control method for people with severe mobility restrictions.", 
      team: "Team Epsilon", 
      challenges: "Ensuring precise recognition of gestures." 
    },
    { 
      id: 6, 
      title: "Mobile App for Sign Language Translation", 
      description: "An app that translates sign language into text or speech in real-time.", 
      category: "Healthcare", 
      image: "data:image/jpeg;base64,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", 
      funding: 7000, 
      goal: 20000, 
      impact: "Bridging communication gaps for the deaf and hard of hearing.", 
      team: "Team Zeta", 
      challenges: "Developing accurate translation algorithms for various sign languages." 
    },
    { 
      id: 7, 
      title: "Virtual Reality Therapy for Physical Rehabilitation", 
      description: "A VR-based rehabilitation program designed for people with physical disabilities.", 
      category: "Healthcare", 
      image: "https://th.bing.com/th/id/OIP.LhZTDEuDAbBseBX9XvL0WgHaE8?w=257&h=180&c=7&r=0&o=5&pid=1.7", 
      funding: 5000, 
      goal: 15000, 
      impact: "Helping individuals with mobility impairments recover through engaging virtual exercises.", 
      team: "Team Theta", 
      challenges: "Ensuring accessibility and affordability." 
    },
    { 
      id: 8, 
      title: "Assistive Exoskeleton for the Paralyzed", 
      description: "An exoskeleton that helps paralyzed individuals stand and walk, providing mobility assistance.", 
      category: "Technology", 
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAC0AK8DASIAAhEBAxEB/8QAGwAAAQUBAQAAAAAAAAAAAAAABAACAwUGAQf/xABKEAACAQMCAgUHCAcHAgYDAAABAgMABBEFEiExBhMiQVEUYXGBkZLRIzJSU6GxweEVQkNUYpPSJDNjgqLC8HKDFhclNESyc5Tx/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDAAQF/8QAKhEAAgICAgEDAwUAAwAAAAAAAAECEQMhEjFBBFFhEyLwMnGRocGx0eH/2gAMAwEAAhEDEQA/APJm4nPjXUFJuHqrqc6byAlJ2geNM7Td9S7Mx9YfHArscTyMEUZY0zdA7ICCpGOfmqNssSTR1xCsA2n53fQDHialdj1QgMkAcycCrWDQ76ZVbdEobGMtk1UUSl7eoAFnlAGMDdwo0Cy7i6MTOSHmQADu8aHvdFFrG7CUMV7sijtJvZpd5kkY4HMmmQzxyajcpNITCq5y2MAAZJNLKEnVMMMkVfJWZwJIeSn2VcadoovYesZ9pJwBnB9hqaWLWpGE1jp5jt5QGgykbyPGfmswfhx58viWSDX7Q20l3BJbRyP1ayBVVHYjIU7eGfZW5RekwuM0uTQQ3RaX9nOvoJFV93oV/acyjDxBpl1qOorKwS6lA8xGPuoV7/UJMb7iVvSazT8AjJPbIGUqSG5inRlVdGYZUHiKYWJJJOSeZNdB5UwLNjp0mn3KqiOA4A4d/sq8hMsJUN2o/uFebwF1cMjFXXipU4NbLRdW8pHktzgTKOB7nHjTJ+DM04I2qRxU1V39rtPWLyNWKIYlBzmN+XmNRz4kQqeYogMZqenSOpnhXtIMvjvFUHaXiO/mPPXojxIEOeCspDVgb9Fhup41+aGJX0UDAhrqnFEpaSPjurr2Uy5I41qZhpl3hFAwFq003qo0lmfG4Ahc1UKjqcEHJ7gONWBiljt8srL4hgQfWDWasK0B3kxkdm8SfZQfOpJslqjpTMRrgpHNPjRpHRFGSxAA85rANHoOm3V1DPIFYJjCnxOO6gI7K5/SUtmxCSypOgaTO3jGxG4jx5VudCMllZwwSBNxGeA9fE1UNNpc3SCSaae3UIqRxBXVhI7HAA2ZB8KnzbtIMUk02Wqi936bbdQCgsLYzOZMNHIIkBGOWCSAPyqHU7TUdU0qzhaGOGZNUiMiGTMcKBJAS7k8x+PnqzuQ6vAylYiiJsPEZBwR80+GKkleWKzfqY45wJUY7gSqoO1I4GeJXnz4c64oWp0uz2sji8Vvo821m0ezuOqYchwOMZFVVbTXrWTUmWSBopHA/ZujZHmKk1j5YZYXaOVSrA4INd8Xa2eJrwNVS2cdwpvI1Pb4y2fDhUTDtN6TT0BPZ1G2kGjEuGikhnjOGRgeHeO+ganSNmjLCslbGs9Isr5J7ABjkkAr66fO2DHx5rxrP6V5RHp0UskciRvwjd1YK2Pok0Td38IWPt5IHdTIBZkZTjyPsrE9II1jvAQMblya1UGsWBijWU7cEcWGKzfSSe2urqJrchlWMAsORNDyYDsnJu2XOVIHD11bNGGkZQOQFVMAWOQOPnVaRyneHPHkD6KoISabDGdb0lWQFDMNwI4cAatek7Wq3NxCoUZhjcY8Tmg8pmOaE7ZFIZSOBBqp1PyySdriR2dmAUk+AGAOFBoK7K3qBKW44xTnsQqIwb5xxXEZlPI4NGMwaOPA5Nx83GlGfuMTSg2Mt3canXShGVdHO5SCPSKMjkCkZDAYHMGpXmRUcjJbado8TjgKuoRo5nOQRDZXcuha7q88jsYLaSCyi3FUCvIsMk7YPE43BR6+OeFJ0Zs2utXtzgbbQG7Yf9BCp/qK16Rc2aQ9G9WsG4LDpEykgZO6CESZ4+JH21neglmfJdZvWUZla2tITjiQh6yTHrKD1eahwSkkOpvi2XGozwWgguZCfJxa2vlgcZSORc24eP07Qrjx2n9arTSo5xHqGoXcRiZEbS9OtHGOrEgQu8gHDe5KhvALjmSKM8lgklxJGjxI0rMjqCjEcQGB4YzzFdcZXAPBWmunJIx1khwDx8Tg/wD9po+nh9X6gZeqn9L6R4zqMX6P1jUVh4eR6jcGE7QoKxzFkOB3EYrYdJOi8LRwazaO5tbkx9bC3aNu0iB02uOaniOPEcOJzwA6cacLXU1ukUCG/tyw24wJLdVjYDHm2mvQ9CgW/wCjdhb3O3N7pqCXiCFDRRpG2fEYDeqsoK2mLKT4po8gTTQGYg/NBrtlpZvrmS33bMEdo8+PhVjMJbaa7hdCJoXkikXB4OjFWHtrmjTiG4uZ5wVAxjIPdSTVBg22U+q6d+jp+p37sgMPHBp+nNGZbaNwCGkAYHliuaxei/vHmUEIoCJnvA76HtIpJJFK5G05yKmuyvg9C1/W4n0vT9FhtlVh1G+VSMCOIcAqgcz3/nVbPplkdLN0r4ljUE5PM55UBGoyryksQMAtzqO4naQFFYhO9c8DWcfYCYPqoCWVuVABLAEj11TgkgZPdVjdO80aROeypyKiht1YEk+ah0Hsj454VZWcTsRkcKIh0t8hn9Qqyjs2XAAAFXjH3JuXsdgS3Xblc+PhU8gszkNGCPRXFtnBFGW2lTXcgUZCfrN4VpSikCKbKZo9O3f3QxnjgVp9HbovDHGJFiyO0xcZ4+c4o6HolbS4BdgP1jwzU110YtYI9scpDEYHBa5XKMu+i9NaG3ur9ENqxh4D4gLnH2VBaXPRu8uYLeBYpJpGJVQvHEYLknh3YqufoirEk3TcT9FaO0nQIdJuXvDOGkMDwRh9i7Q7KWYewD10sVGckkaTcY2ywvIhJBqETcRcWV1Hjx6y3ZDQegWa2mk6TDsC9XbQmUD9aV2M8hPrOPVVjfPHbWF3eS52WtrcXDY4ErGhbAPn5eusVZdPtKit4o7mxvusQEHqWhZcbiRxcg/ZXfNpbOSMW1SN0N2X5AbGY585H51E9vHdQXEMykxzqm9QSpKhlcDhx7hWT/8AMHRnJA03UGBABDSW4BGcYJGaOs+mWkSeUG5hvLYqu5mZBLGqHHad4cuOf1ZxwoqaejODQukfRmwi6PapdW6v1tl1F5GGZnYKj9VIuScYKuSeH6o8KsOiFyToej7g4xBHGN4wSkfZyPN4ebFR33Szog+n3UEurI4uYnjeOzhubmQoVI2HrI40GTzyfvyAeiF7HPpSmMuYrKeS0TrgC5iTBj3hO/BGceFBJctBt8dmovW0OyuRLepCvlm6RJHAG9lwG4kc+WfT56r7uXotKGAe1IcccFfworVbGLWNLa3BZJYpI57WWWM4RyNpR8cQGBxnHMCsvH0Vv1OGeMqeHI5Fc2WKi9lsbbVogey0HrWEcULrngQAaJistNX5kCD0AUWnRa8i7XWAjzCpW0y6twCe0PNQU0tDNXsDmsbB48dWBnvAFZu+0qSMs0XFPDvFa0o2OIoeWFiDwqtpiUedyq6Eqw4jOfGo1LdxxWrvtJErF1XDVTSafNEcMnoIpGh0zULGlTBEpwVfCjLW0M7gAdnPE1SU1FbJxiMtrRpmG1SVzxIrU2dmiqqouOHE0y2to4lWOMeGcVbR7Il5HAHE1xSlzfwdCXEcFjgjyeGB7arZWMrljnHcKfcXCStgE7F5eehyy+JqUpLoeMX2d2jwNCzWCXbM1wWWNZcRjd2nARfmjwH35PfRO5fGnxoXkQHBDZ2jPgTxq/pUnJslnviUPSaF7PQ+kLpJI9vNZytLHMwZIpJHgt06kAcBxJI8RmqSx6J9HCFE1n1ud2GaacZKkgjsuB4VZ9Ob7+z22hxld+q3dpbXT5Km3j66N4w3DaN+GOCeSZ5HjXaN0p0FoxBdS+Rsp6tOvEjQuEOxGWUAkEgAndjj3nPDqjNSk+RBxaSourDof0XluCkel2vWbC6iVpnXs8+zI5H2d1Hr0P6Mrud9EsM7iH+Tfgc8ipbA9QFS2N5pwmtLtL6yMEcmJJUu7faqSKYi24P3ZzVqdZ0K0SQ3uraeg28DJdRHeMZ3KFO459FFvekZJvtlDddF+iMcbN+h7FeHNYzn1ZNYzSI5jbata2Fv1cF3eTyWqGTKBRJHbSxzhe0Nqhn7shWxzyT+lXTrT2tZrHRzcSyzAp5aUMMKDv6kON5PnwPXQvQ2a2h1DUbGPhFqFjp2oQIG6wowtmM2WOTnLEHJ++hOajXE0It3yN/ZQCF4LlDuSVHV1I+ZIoJIVh481z6O+pEYSokoGBIqyYAwBvG7AFPtobtoPKUjITA2qvFGCsAQwb18a7L1YkkCEbQxAxjHq81S9TTSY+C02TwyjGx/QCabPBGeIHA86gDDjxoyCRGXY2MgcDXNFp6ZZqtoobq2VeKgnPcBVe6gdx9la2aBCMrjI7qqbu03dtBxHMVWMq0xWr6M/IinPChJLdGPFR7KtmjIJBBz56iMZ8K6I7IsGtraSdwo4DvPditHaWyRBY05nmaktreOBAihC3DJxxJqyhjCDOE3H7K5JS5s6ElFDooUjGcjceZqK5mTBjRwT+tjwqWeURpjsFmHsqv28ydnHjSyaWkGO9sbhB4V3KealtHgld2qf1Y/bUtDnMIT3Ad5PIDvJqhtI+lN7rcmo2uqwxaZDI62enS5KTRQbd29VXGG7yST2u7HC+MSOGRlQq6lGAYjgwweNVttHqFjFdXB42to1xLC4ZElljj4OIwVYYbAyeGMHFDnKLXApCEJJ82YW51fXTrFnod9aWUT2+sw6lcytame5Nwdxeac7yHADZOAOCgDAUCsrNG7MziNHDSyyOoUmLJckBcENj2VsNPvIv8Axf8Api/mYXItL++gVAAs10LebCnPIAA4Ho8OOVtS8zwZcq0gy7IF3EuMk+n1V3Y42zknKiS2stKvX0q2EJiub9pl3Qzvsi2uyITHKrkk7Tw3DmKFK2UKgwG4IJ4m4REGQB83qz+NXsydWFXY9xKgHUNLIm+PAJ38IBgDnzqPUJdBbSNMkBB1Z7eM3AVHbJDOpLEttBPZ7vzq8RJZfgpbmPfIerDdVkFS4XADAMF399X+ny9IrZNDk0sRtJeWl1YBY2aN44rG5YtJLIrJjJfvPcAQcgVQRmSV1CKS3gOOAPScVdaXqL2kptNshuXmnx1nGIQTiCcsoGDv3R5B5cT38kyQqNofHJOVSPXdKu9cijmM5thbRGMdUsbs8J2l5FLgAljndnBHmAPCXYv2UHpE97ttorniJbzq0uAFPbZPmso45wMLwx3ek/afon21wKcpN80dk4xjXBkYVePKnYxg5AxyNd2fwn20tn8J9tMTCYpQ3ZJXP30pYP1k9YocLtIIVsjiCDRkThxg7g3eKrFp6YjVbRUXNqJMsMBxVY8ciHDLWolhRuIDbh9tCPBE/Bg3CmUnEVxUieKIDDMUB8PCpG2IpbcnDu8adtwMmMcPHFBTN1jf3WFHAcvbSP7UFbYxyzsWOzjyFMIbwSndWv1Z+z41wqn1Tf8APXUXbKi2v9FK6UYD5qH11zamP7tv+euuYH1L+2sYcFfnsThxxmmyoJtPESGNwdMkTcjq6s7xu5KsvA8TUNy4htL6Uo6mO2nZTnPaKFV7/EipLGCOO3sIisgxFErYB7xx7/PVVCsfP5J8vv4/B43qtzcWV1pN/bkLNCJljYgEBhxBIPD9Y0HalCsRRYJNijsyKrjh3MG+FWuuWm57e3fhs1NLZj3qHZoz91VDaXPCX6pt+x2BQHa+VJU4PI8vNXTCTW0Smk+wq7nZUCEON6DeQccuO1VDEBfAYqvF3uKrIfkwiqiRAZCDiASKsejtk97rmlWOolxazTZlRySJQilxECM8yMc+VaHplYafHr0cltbpE0thFLPsRVSWWSSTdJtxjdjAyPDz07m5SUUIoKMbZQ2F0sU6W0VuiPdpIpmkIfbGELBRGRgZI557/NRtlpc8XSBVmUEeRW10pAIGycJg4JPdnvqy07RbS5vdOt0hQPJPFA0rAsyLntsCePAZqw6KRQ6jqXTHUVHyb3Oy2yc/JxrIy8uA4FeA5cu6tkbitghUm6RsLbdHZWUu3BjuYbosWVQEE+WJLEDGCaPcqXkKKShd9hzzXccGhHgVrGa2Jft2MkJHHbkxEY9tcsHWax0+Uu+ZLW3c4zjJjXNcslcXP5OhOmo/AXn+FqWf4WpuE+sf/nqrvZ+sb/nqqJUd/leuhirBgH3DkaZlR+0P/PVXdy/WH7KKAGpIkgGQwbvFceJWIwGBoQOAciTiOXKi45UKj5Tj35I51VO+ybVdAFxNKX2qyYXmQp4n21FvnPenu1Fg/Tf2/lS2n6b+2uaU2y6ikSFpsfOX3aWZvpL7tRbG7nf204I/039tLyfuNxJPlfpJ7v50i0vivsPxpm1vpv7R8K5tc/rv7RW5MHEG1JpGtDF2f7RcW0HAHjlxIf8A60fukGMbeGAOB7uFV10rNc6VDvb+9muGzjIESYB+00bh/rG+yunJJrHBfu/z+CMFc5P9l+fyY3pP0a1G6i1e+tpYAiddqTButSSPqQ07hCqkE88cRWBt9UKRRpJEzup7T78FuJJJyM5rT9MrvVVutS6u/vEj8q8m6pLiVIup6sqU2KwXBxx4d9VVnbWNzZRSzxxu2DllHVt2eWdp/GrYVKuyeVryi56ER22o6xNfbcNp9r11vGzZxJMzW5Z8DuGcf9Xmo7p3HIb7QpMEK2nXqyMgYAmOXKAkDn2uVU/RW6Wx6RWFtbIVS+We0uAACCpTrY/YVyfMaN6W3F83SGOO5laO1ggtxZMsIkVIZFDPJhe1ktu3HzY7qLjJ5abBaWPSArKTXLO1nuYFvoGHk8CzupEKQzRrG+9pOyu4548D5/HSdA7OS00yVzhmuWSd88NplTGzh4AKf83m4l2+p2zaXrtwAJCLSBnW0Cyu4RlV32OAASMk+kj0CdApbu406+knuJH2XICBm7ChIIUVEHLA/CjnTWhcMk/Bs0klDL2FxkD5x5eyq7SJJEsY4doJt5rq3PEjHVzOMcvRRg636Q9n50HZ70uNahBA2X7yjs908ccnDj6ahjleOa/Z/wB/+l5qpxf5+aD+sk+gPePwrokb6se9+VM+U8U9386XynivsPxqHIpRJvb6v/UKW9vqv9Qpo6096esH40j1vcU+2jZqHbz9UfeFdz/gsPWPjTPl/CP/AFUgZ/BPa1FMFAxjX+L3m+Nc6tf4veb407qV8X99vjSEQ+m/vt8aiVOCNfE+81O2L4t7zfGl1Q+nJ75rvV/4kvv0DDSg8W99qQTzv77U7qz3SS+8PhSEbZHysnH+IfCiYCCb9Tbi/wDZ7NATuOd0rFuJ9FGhf4n94/ChraCbrr24ZnVbiRRA2UJkiiBj3HGe8HworY/1sntT4V0eoa5JLwkv6OfD+lt+W/8Ak8w6cxlL2+wW7T282Tz7SY4n11mLS+8nhKqwVtpGChYce8YOM+qtn09j2zTMSSWs7dwWxk4cDurIpbWvXqhO6GNgzOy43qjAngPEcKvhtrQmWvJv+hGlwRR3uoTSCbUXKRZwCbaGROs2LnkW7/MMcuc/T1Ej0izvMv18OoR20ByAoWeN3kyAOPzFx+dR9BXY21zEWYOUSVshSSEleEE5oXp9PL12i2bHdCttc3jAqMdbJKIgTjwCnHpoOElmSsKknjujN2l/OunX4EduOss5ZFZYlSZH+mky4ccuIzjj5uOz6AoBo07ooRZbm5kVQSwRdwUAFuJxiqIWcNl0bvZHtIhOtijJKVUSJLNNGoOeZ5j0ECtT0NjZdAszyaVXkJx3vI7/AI0+fkv1Mni4v9KNBhvp+xVoFAU1a+Xdjr7OynBwvEx74Tw9lHbZPpj3B8aFeJ/0lZSGWJd9jdwAOpBkZJEmCqBwzjJrnwtW0/Kf/f8AhbKtJr3QV2/pj3RXflPpj3R8aXVyDPbX3PzpbJPpJ7h/qqJU72/pj3PzpfKfTHufnXNsvinuH+qu7ZvGP1o39VYwvlfrF9386d8sP1090/Gm7Jv8L2P8aW2b/C/10THPJz9c3uR/CueTvnhMf5aUjcTD/wCPPy74R+ElM8puQeFvJ/Jb8Ho8QWx3k83dOPXEP6q6YLj6+P1w/B6Ybq5/dZv5Tf1U03dx+6XPqhb+qjwM5EnVT/WQn0wv+EldEdwO0ZIMLlj8k3JRk/tKi8sm/dLsf9hvwaory922F83UXaSm3lRS9uyxhnGxcvnz08MXKSj7iSyUm/Y5pUUxsYJsxf2lprk71ct8rIzcSGA+yjequPGD3JP66jtpoIbe1gEV4Opghi42lxjsIAeS1L5XbjmtyPTa3X9FHM1PJKXuzY04wS+DIdMtB1jUYVnsoVuGW3eKSKE7ZAAd4YLI3Ec84PqrzmRS07i3OI5VgkAI4gzQpKVOfAk17fcXsQt7wwysk/kt0IGmt59izGF9hYMmMA4zXiVveQoI45kYssaRSFlLsdiheywPdgY4d2Kt6fum6J5rS0j0HoTbzf8AqEqY2w2lhZq0pYbyTJM57Oe/76g6Zw3FzqelWoEbTCw3RhGx1m+eQ7QXA48Dj86v+i0NrY6WhDMWupPKGJ3McbAqg7F2jAHKs104mT9MWMiPjq9Mh2MQ64cXEpyCwHLgapalntE6ccVMrdRu530aWyuY3jma5tyhJBEiWgd5FYDiCOyfVW66ORSxaBpCpsDm0tm+UJVe0gY8R6axl0l5qGmWfl15p/ldxJMbPq2QvL1qJZqkkiKTwLhjjuByCQMeiWAtrSztLV7i3YwQQwkq/ZLRoEJG7Bxw8KX1D+42FfaOJvx+6fzX/poW8N0G0qWRYMR6jHGDFKWP9oikhAIK8icVYdfZn9tbn0yx/iaD1VrT9H3MiSQdZA1rcpsljJJiuI3IABzyzSYXHmtDZFLi9hmbnH/twfRMn9NN/tP7uf5sfxojrrf62H0GaMH15al1sB/aQ/zo/wCquZqtHQpWDZuR/wDHY+iSP407dcfu0nvwn/dU/WRfWRfzE+NLrE+mnqdPwNZI1kGZf3eb3of66WZMf3E/r6o/c9EdYh5MvvA/jSyPH7a1AsF66D6Q9j/gtLyi3z85cf5/6aqvKelQ/aaS3/YuV/GuG96W8Ts0c/5Lgf7qyaflD18P+i36+2GMsBnjyfl7tLr7I8pR6ww+8VTHUOlw4+T6QfQJ/wCum/pLpeOdppXsn/CSm17o1fDLxZbcnhJF6S6j76D1UrJDZ267D5VqFpExVlPZVusYHHooBNU6TbvlbfS1XB4kXA4++aBXVNQudbIl8mMmn6cywJCx6lZp2WTeyvkk8geI4DFPjksc1LWieSDnBqmrNh3khV4kngfypdvwHvH4VQ/pDpEfmtpo9Cxf7nrov+kg/U01/Ssf3pMDUrXwPxl7MtdQlmh07V5lCBotOv3UsSQCLd+0Rg8ufKvCYba4a7jh5yFw23G4MvziwK54Y45r2Nr3XpYp4ZbCweOaKWCTq5ZY22SoY2wRK3cTWFTobr8JZBM5ttpQbVZnCfR2q+0+ccqpCcV2JKMj0Do7Dt0PR+xGwe367cMYPWyPJw4Hhx4caoenfksKaQhgHlFx12+cM6iO2jYEIAoK5Zs81OAD45q2s9QfTrKxshp171dpbxWyO8d07MI127m2REZNZnpjey6odEMFncg2r3aylrW9fhJ1bAcYR4H/AJzyl91mp1RDDcPd/oaF1Mos7uzuotkhwxSWJyJlKq43YABKEefx9EMCAnMUnf8ANcH/AHVh9FnL3WnxxWV4pjYtLvgurePYgDD5ZkGASOI5HwOa23lsn7p7LpPxipXkC4HDFCP2Nz48Bn8TQ15b2r2t7H1d1mW0uUXMR+cY2293jiifLX/c2/8A2ovxSmTX84t7sx2jq4troowu7c7W6p8HGAeHOnjmp3/pOWO1X+CsiLqzs5gIz1kETNvjQ9oopPMZ76n8nHH5K3x/+JKo+jV/u0bT1CG4KRCI9TPEGTado3hyOfdVz5Y37jc+qa2P+8UuSacm0PCLUUmPFvH9Tan/ALQFI20f7tb+4vwphvGPA2d171sfukrnlSHnaXnq6n8JaXkNRJ5LB32sGf8Aoj/ppeT264xaw/y4/hUflEX7vfj0EfhLXDPb/Q1P0YbH/wBzWsySIgoru0caVKuQ6BbRw85prcKVKgY6By84J7qmjVe3wHzG44GfbSpU0ewPobsXJH3gfCmmKMjio91fhSpVn2CxvUQn9RfTtX4V3qIQfm8/Dh91KlWQU2d6mMct45Dg7j8acYuPCW4HDulf8TSpUbCjpgOD8vcHIPOTP4UBNvjPZdz3cW+FKlVE2MoxfaI98n0m9pruSRxJPGlSrpx77OXMkloIgARokQBVJYkIAoJI5kCjCOHM9w9tKlU/UJKSoXA7ixbR4mltHifspUq5i4toAPmrmKVKmMz/2Q==", 
      funding: 12000, 
      goal: 50000, 
      impact: "Restoring mobility to individuals with spinal cord injuries.", 
      team: "Team Iota", 
      challenges: "Designing lightweight and durable technology." 
    },
    { 
      id: 9, 
      title: "Smart Prosthetic Limbs with Haptic Feedback", 
      description: "Prosthetic limbs that provide sensory feedback, allowing users to 'feel' objects.", 
      category: "Healthcare", 
      image: "https://th.bing.com/th/id/OIP.RHDtReb5kSHS4czeFMRBYwHaEK?w=279&h=180&c=7&r=0&o=5&pid=1.7", 
      funding: 15000, 
      goal: 40000, 
      impact: "Enhancing the experience of users with prosthetic limbs by enabling sensory feedback.", 
      team: "Team Kappa", 
      challenges: "Developing realistic and affordable haptic feedback." 
    },
    { 
      id: 10, 
      title: "Text-to-Speech App for the Visually Impaired", 
      description: "An app that reads out texts from books, articles, or websites to people with visual impairments.", 
      category: "Technology", 
      image: "https://th.bing.com/th/id/OIP._290twwRKBjNlvEYTjAEqAHaDt?w=329&h=175&c=7&r=0&o=5&pid=1.7", 
      funding: 4000, 
      goal: 15000, 
      impact: "Improving accessibility to written content for the visually impaired.", 
      team: "Team Lambda", 
      challenges: "Ensuring high-quality and accurate text-to-speech conversion." 
    },
    { 
      id: 11, 
      title: "Smart Wheelchair with Obstacle Detection", 
      description: "A wheelchair equipped with sensors to detect obstacles and navigate autonomously.", 
      category: "Technology", 
      image: "https://th.bing.com/th/id/OIP.3q2r6_CyPRKrZ0zIADE1mQHaFW?w=277&h=200&c=7&r=0&o=5&pid=1.7", 
      funding: 5000, 
      goal: 20000, 
      impact: "Helping people with mobility issues navigate their environment safely.", 
      team: "Team Alpha", 
      challenges: "Ensuring accurate sensor calibration and long battery life." 
    },
    { 
      id: 12, 
      title: "AI-Powered Speech-to-Text for the Hearing Impaired", 
      description: "An AI-driven system that transcribes spoken words in real-time for the hearing impaired.", 
      category: "Healthcare", 
      image: "https://th.bing.com/th/id/OIP.uDjYbT9YYcvTtlHxjt_14AHaDi?w=278&h=167&c=7&r=0&o=5&pid=1.7", 
      funding: 7000, 
      goal: 25000, 
      impact: "Empowering individuals with hearing loss to participate in conversations.", 
      team: "Team Beta", 
      challenges: "Ensuring high accuracy in noisy environments." 
    },
    { 
      id: 13, 
      title: "Voice-Controlled Home Automation", 
      description: "A system that allows disabled individuals to control their home environment with voice commands.", 
      category: "Technology", 
      image: "https://th.bing.com/th/id/OIP.Vo18CflQ2jIpNWruymViGAAAAA?w=244&h=182&c=7&r=0&o=5&pid=1.7n", 
      funding: 8000, 
      goal: 30000, 
      impact: "Improving independence and comfort for individuals with mobility impairments.", 
      team: "Team Gamma", 
      challenges: "Ensuring compatibility with various home devices." 
    }
  ];
  

function IdeaShowcase() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center mb-6">
      <h1 class="text-4xl font-extrabold text-gray-800 text-center">Innovative Ideas</h1>
        <FaUserCircle className="text-gray-600 text-4xl cursor-pointer" onClick={() => navigate("/profile")} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {allIdeas.map((idea) => (
          <div key={idea.id} className="bg-white p-6 shadow-xl rounded-lg hover:shadow-2xl transition duration-300">
            <img src={idea.image} alt={idea.title} className="w-full h-40 object-cover rounded-md" />
            <h3 className="text-xl font-semibold mt-2 text-gray-900">{idea.title}</h3>
            <p className="text-gray-700 text-sm mt-2">{idea.description}</p>
            <button
              className="mt-3 w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-300"
              onClick={() => navigate(`/learn-more/${idea.id}`)}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function IdeaDetailsPage() {
  const { id } = useParams();
  const idea = allIdeas.find(idea => idea.id === parseInt(id));
  const navigate = useNavigate();

  if (!idea) {
    return <div className="text-center text-2xl font-bold text-red-500 mt-10">Idea Not Found</div>;
  }

  const fundingProgress = (idea.funding / idea.goal) * 100;

  return (
    <div className="fixed inset-0 bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[85%] max-w-4xl flex">
        <div className="w-1/3 p-4">
          <img src={idea.image} alt={idea.title} className="w-full rounded-lg object-cover" />
        </div>
        <div className="w-2/3 p-4">
          <h1 className="text-3xl font-bold text-gray-800">{idea.title}</h1>
          <p className="text-gray-600">{idea.description}</p>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <h2 className="text-lg font-semibold">Impact</h2>
              <p className="text-gray-700 text-sm">{idea.impact}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Team</h2>
              <p className="text-gray-700 text-sm">{idea.team}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Challenges</h2>
              <p className="text-gray-700 text-sm">{idea.challenges}</p>
            </div>
          </div>
          <div className="flex items-center mt-6">
            <div className="w-20 h-20">
              <CircularProgressbar
                value={fundingProgress}
                text={`${Math.round(fundingProgress)}%`}
                styles={buildStyles({
                  textSize: "16px",
                  pathColor: fundingProgress >= 50 ? "green" : "orange",
                  textColor: "#333",
                  trailColor: "#d6d6d6"
                })}
              />
            </div>
            <p className="text-gray-600 text-sm ml-4">${idea.funding} raised of ${idea.goal}</p>
          </div>
          <div className="flex justify-end mt-4">
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
              onClick={() => navigate(-1)}
            >
              Close
            </button>
          </div>
          <div className="mt-8 flex justify-between">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300">
              Invest Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IdeaShowcase />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/learn-more/:id" element={<IdeaDetailsPage />} />
      </Routes>
    </Router>
  );
}



