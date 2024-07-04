// Example usage of native fetch in Node.js 18

const httpClient = {}

httpClient.fetchData = async(METHOD, ENDPOINT, BODY) => {
    const url = ENDPOINT; // Replace with your API endpoint
  
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const output =  {
        status: await response.status,
        data: await response.json()
      }
      console.log('Data received:', output);
      return  JSON.stringify(output);
    } catch (error) {
      console.error('Error fetching data:', error);
      const output =  {
        status: 500,
        data: error
      }
      return JSON.stringify(output);
    }
}
  
export default httpClient;