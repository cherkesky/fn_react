  const url = 'http://localhost:5000/'
  
  //Fetch API
  export const fetchAPI = async (id) => {
    const res = await fetch(`${url}/${id}`)
    const data = await res.json()
    return data
  }

