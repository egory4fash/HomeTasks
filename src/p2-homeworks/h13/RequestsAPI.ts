import axios from 'axios'



export const API = {
post(checked:string) {
    axios.post('https://neko-cafe-back.herokuapp.com/auth/test',{sucess:checked})
        .then( (res) => {
            alert(res)
        })
        .catch( (rej) => {
            alert(rej.errorText)
        })
}
}