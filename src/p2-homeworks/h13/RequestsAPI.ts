import axios from 'axios'



export const API = {
post(checked:boolean) {
    return axios.post('https://neko-cafe-back.herokuapp.com/auth/test',{success:checked})

}
}