import axios from 'axios'

export default axios.create({
    baseURL: 'https://shopping-db76c.firebaseio.com/'
})