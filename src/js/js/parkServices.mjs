// js/parkService.mjs

// 1️⃣ Base URL for the NPS API
const baseUrl = "https://developer.nps.gov/api/v1/";

// 2️⃣ Load your API key from the .env file
const apiKey = import.meta.env.VITE_NPS_API_KEY;

// 3️⃣ Fetch Yellowstone park data
export async function getParkData() {
  const options = {
    method: "GET",
    headers: {
      "X-Api-Key": apiKey
    }
  };

  let data = {};
  const response = await fetch(baseUrl + "parks?parkCode=yell", options);

  if (response.ok) {
    data = await response.json();
  } else {
    throw new Error("response not ok");
  }

  // Only return the first park object
  return data.data[0];
}
