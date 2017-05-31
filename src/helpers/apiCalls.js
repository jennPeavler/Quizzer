const rootDirectory = 'http://localhost:3000/'

export const apiCall = (path) => {
  return fetch (`${rootDirectory}${path}`)
  .then(response => response.json())
  .then(data => data)
  .catch(err => console.log(err))
}
