// GET ALL ITEMS FROM LOCALSTORAGE
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

// SAVE ITEM TO LOCAL STORAGE
export const handleSetItem = errandObj => {
  // check if localstorage exists
  if (!window.localStorage) {
    // if false - return alert
    return alert("Local Storage doesn't exist")
  } else {
    // if true - set item
    localStorage.setItem(errandObj.title, JSON.stringify(errandObj))
  }
}
