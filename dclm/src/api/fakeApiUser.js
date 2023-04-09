//example api request: replace with your API request here in folder API

export const getUser = async () => {
  try {
    const response = await fetch(
      'https://640472db80d9c5c7bac80677.mockapi.io/api/v1/users'
    )
    const res = await response.json()
    return { status: 'success', data: res }
  } catch (e) {
    console.log('err', e)
    return Promise.reject(e)
  }
}

module.exports = {
  getUser
}
