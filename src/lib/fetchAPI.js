import axios from "axios"

const baseURL = process.env.REACT_APP_BASE_URL

console.log(process.env)

export default axios.create({
  baseURL,
})
