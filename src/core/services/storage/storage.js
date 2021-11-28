
const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

const getItem = (key) => {
  return JSON.parse(localStorage.getItem(key) || false)
}

const removeItem = (key) => {
  if (getItem(key) === false) return false
  localStorage.removeItem(key)
}

const clearStorage = () => {
  localStorage.clear()
}

const isLogged = () => {
  return getItem("user") ? true : false
}

export { setItem, getItem, removeItem, clearStorage , isLogged}
