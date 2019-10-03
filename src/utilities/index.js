export const handleGetItems = cb => {
  // check if storage exists
  // if false
  if (!window.localStorage) {
    return alert('Storage unavailable')
  } else {
    // if true
    // loop thru localStorage
    const keys = Object.keys(localStorage)
    const json = keys.map(key => {
      // get every item
      const item = localStorage.getItem(key)
      // parse json
      return JSON.parse(item)
    })
    // setStorage
    cb(json)
  }
}
