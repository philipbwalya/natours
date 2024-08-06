import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function App() {
  const [tours, setTours] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Capture the query parameters from the URL
    const queryParams = new URLSearchParams(location.search);
    const queryString = queryParams.toString();

    axios
      .get(`http://localhost:3000/api/v1/tours?${queryString}`)

      .then((response) => {
        console.log(response.data.data);
        setTours(response.data.data.tours);
        console.log("tours::", tours);
      })
      .catch((error) => {
        console.log("err:::", error);
      });
  }, [location.search]);

  const handleFilterClick = (key, value) => {
    const queryParams = new URLSearchParams(location.search);
    queryParams.set(key, value);
    navigate(`/tours?${queryParams.toString()}`);
  };

  return (
    <div className="flex flex-col justify-center items-center bg-slate-950 text-white pb-7">
      <h1 className="text-3xl font-bold underline mb-10">
        ALL {tours.length} TOURS
      </h1>
      <div className="flex gap-4 mb-10">
        <button
          onClick={() => handleFilterClick("duration", 5)}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Duration 5 days
        </button>
        <button
          onClick={() => handleFilterClick("price", 100)}
          className="bg-green-500 text-white p-2 rounded"
        >
          Price $100
        </button>
      </div>
      <div className="flex flex-col gap-10 justify-center items-center">
        {tours.map((tour) => (
          <div
            className="border border-slate-600 p-5 shadow-md  rounded-md w-[80%] py-5 bg-slate-900 flex flex-col justify-center items-center"
            key={tour._id}
          >
            <h1 className="text-xl font-semibold">{tour.name}</h1>
            <div className="flex gap-10 items-center justify-center">
              <p>${tour.price}</p>
              <p>Duration: {tour.duration} days</p>
            </div>

            <p>Summary:{tour.summary}</p>
            <p>Difficulty:{tour.difficulty}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
