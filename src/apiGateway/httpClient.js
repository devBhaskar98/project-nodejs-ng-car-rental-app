// Example usage of native fetch in Node.js 18

const httpClient = {}

httpClient.fetchData = async (ENDPOINT) => {
  const url = ENDPOINT; // Replace with your API endpoint

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const output = {
      status: await response.status,
      data: await response.json()
    }
    // console.log('Data received:', output);
    return JSON.stringify(output);
  } catch (error) {
    console.error('Error fetching data:', error);
    const output = {
      status: 500,
      data: error
    }
    return JSON.stringify(output);
  }
}

httpClient.postData = async (ENDPOINT, BODY) => {
  const url = ENDPOINT; // Replace with your API endpoint

  try {

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Set the correct content type
      },
      body: JSON.stringify(BODY), // Convert the body to a JSON string
    });

    BODY

    console.log('POST CALL',response);


    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const output = {
      status: await response.status,
      data: await response.json()
    }
    console.log('Data received:', output);
    return JSON.stringify(output);
  } catch (error) {
    console.error('Error fetching data:', error);
    const output = {
      status: 500,
      data: error
    }
    return JSON.stringify(output);
  }
}

export default httpClient;