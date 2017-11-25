import fetch from 'isomorphic-fetch';

class TripApi {
        static tripList() {
            return fetch('/api/trips',
            {
                method: 'GET',
                headers: { 'Authorization': localStorage.jwt }
            }).then(response => response.json())
        }

}

export default TripApi