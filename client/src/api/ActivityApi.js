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

        static deleteActivity(id) {
            console.log("Hi from the activity api")
            return fetch(`/api/activities/${id}`,
            {
                method: 'DELETE',
                headers: { 'Authorization': localStorage.jwt }
            }).then(response => response.json())
        }

}

export default ActivityApi