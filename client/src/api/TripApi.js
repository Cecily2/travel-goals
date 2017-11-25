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
            return fetch('/api/trips',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.jwt },
                body: JSON.stringify({trip: details})
            }).then(response => response.json())
        }

}

export default TripApi