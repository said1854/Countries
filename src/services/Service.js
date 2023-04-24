export async function getAllCountries() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json;
    return data;
  } catch (error) {
    return [];
  }
}

// export async function createUser(data) {
//   const response = await fetch(`/api/user`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ user: data }),
//   });
//   return await response.json();
// }
