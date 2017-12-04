import fetch from 'isomorphic-fetch';

class UnsplashApi {
        static searchPhotos(location) {

            return fetch(`https://api.unsplash.com/search/photos?query=${location}&per_page=6`,
            {
                method: "GET",
                headers: { 'Authorization': "Client-ID 3cab4e810d3931b39f6c3e501568db2d820e1f108c73f01baf15e6d5450dbb92" },
                mode: "cors"
            }).then(response => response.json())
            .then(response => {
                return response
            })
            .catch(error => console.log("Error: ", error))
        }

}

export default UnsplashApi