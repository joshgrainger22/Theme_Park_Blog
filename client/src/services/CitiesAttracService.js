import Client from './'

export const GetCities = async () => {
  try {
    const res = await Client.get(`/cities`)
    return res.data
  } catch (error) {
    throw error
  }
}


export const GetAttractions = async (id) => {
  try {
    const res = await Client.get(`/attractions`)
    return res.data
  } catch (error) {
    throw error
  }
}

