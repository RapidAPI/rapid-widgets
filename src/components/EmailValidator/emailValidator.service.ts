import axios from 'axios'

export function validateEmail(rapidKey: string, email: string, idAddress?: string) {
  return axios.get(
    `https://zerobounce1.p.rapidapi.com/v2/validate?ip_address=${idAddress}&email=${email}`,
    {
      headers: {
        "x-rapidapi-host": "zerobounce1.p.rapidapi.com",
        "x-rapidapi-key":
          rapidKey,
      }
    }
  )
}
