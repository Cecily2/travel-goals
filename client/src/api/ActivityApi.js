import fetch from 'isomorphic-fetch';

class ActivityApi {

        static createActivity(details) {
            return fetch('/api/activities',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.jwt },
                body: JSON.stringify({activity: details})
            }).then(response => response.json())
        }

}

export default ActivityApi