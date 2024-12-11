import React, { useRef } from 'react';
import { PiOpenAiLogo } from "react-icons/pi";
import { useSelector } from 'react-redux';
import lang from "../utils/languageConstants";
import client from '../utils/openai';

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.language);
  const searchText = useRef();

  const handleGptSearchClick = async () => {
    const query = searchText.current?.value; // Safely access current
    // if (!query) {
    //   console.error("Search text is empty.");
    //   return;
    // }
    const gptQuery = 
      "Act as a Movie Recommendation System and suggest some movies for the query : " + 
      query + 
      ". only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Raone, Avengers, Sholay, Don, Life of Pie";
      
    console.log(query);

    try {
      const gptResults = await client.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery }],
        // model: 'gpt-4o',
        model:"gpt-3.5-turbo",
      });
      console.log(gptResults.choices);
    } catch (error) {
      console.error("Error fetching GPT results:", error);
    }
  };

//   const handleGptSearchClick = async () => {
//     // const gptQuery = "Your query string";
//     const gptQuery = 
//       "Act as a Movie Recommendation System and suggest some movies for the query : " + 
//       query + 
//       ". only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Raone, Avengers, Sholay, Don, Life of Pie";
//     let retryCount = 0;
//     while (retryCount < 3) {
//         try {
//             const gptResults = await client.chat.completions.create({
//                 messages: [{ role: "user", content: gptQuery }],
//                 model: "gpt-3.5-turbo",
                
//             });
//             console.log(gptResults.choices);
//             break; // Exit loop on success
//         } catch (error) {
//             if (error.status === 429) {
//                 console.warn("Rate limit hit, retrying...");
//                 // retryCount++;
//                 await new Promise((res) => setTimeout(res, 2000)); // Wait before retrying
//             } else {
//                 console.error("Error:", error.message);
//                 break;
//             }
//         }
//     }
// };



  return (
    <div className="pt-[10%]">
      <form 
        onSubmit={(e) => e.preventDefault()} 
        className="flex items-center px-3 rounded py-3 w-1/2 mx-auto bg-black"
      >
        <input
          ref={searchText}
          className="w-[88%] col-span-11 text-white text-xl bg-zinc-700 px-2 py-3 outline-none"
          type="text"
          placeholder={lang[langKey]?.gptSearchPlaceholder || "Search..."}
        />
        <button
          style={{ backgroundColor: "#e50914" }}
          onClick={handleGptSearchClick}
          className="px-4 py-3 flex items-center gap-2 text-white text-xl"
        >
          <p><PiOpenAiLogo /></p>
          <span>{lang[langKey]?.search || "Search"}</span>
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
