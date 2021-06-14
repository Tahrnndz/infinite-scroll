
// Unsplash API
const count = 10;
const apiKey = 'L82HhI4lxx_comAHn4Bs_U36uRfN92MEaCZqfMPc0FY';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// get photes from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);

    } catch(error) {
        // Catch Error
        console.log(error);
    }
}

// On Load
getPhotos();