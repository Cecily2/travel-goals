import fetch from 'isomorphic-fetch';

class TripApi {
        static tripList() {
            return fetch('/api/trips',
            {
                method: 'GET',
                headers: { 'Authorization': localStorage.jwt }
            }).then(response => response.json())
        }

        static createTrip(details) {
            const tripObject = {
                trip: {
                    location: details.location,
                    date: details.date,
                    notes: details.notes,
                    image_creator: details.image.user.name,
                    image_creator_link: details.image.user.url,
                    image_full: details.image.links.full,
                    image_raw: details.image.links.raw,
                    image_regular: details.image.links.regular,
                    image_small: details.image.links.small,
                    image_thumb: details.image.links.thumb
                }
             }

            return fetch('/api/trips',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.jwt },
                body: JSON.stringify(tripObject)
            }).then(response => response.json())
        }

}

export default TripApi