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

// export const createComments = async (commentsData) => {
//   try {
//     const res = await Client.post('/attractions', commentsData)
//     return res.data
//   } catch (error) {
//     throw error
//   }
// }