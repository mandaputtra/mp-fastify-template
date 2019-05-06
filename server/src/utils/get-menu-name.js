module.exports = function(arrMenu) {
  const tempMenu = []
  for (let i = 0; i < arrMenu.length; i++) {
    // UWu read menu.js for docs
    const regex = /^[^_]+(?=_)/g
    const element = arrMenu[i]
    const found = element.match(regex)
    tempMenu.push(found[0])
  }

  const filteredMenu = [...new Set(tempMenu)]
  return filteredMenu
}
