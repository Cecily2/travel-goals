export default function initialUserState() {

    const details = () => {
        if(!!localStorage.user){
            return JSON.parse(localStorage.user)
        }
    }

    return {
        session: !!localStorage.jwt,
        ...details()
    }
}
