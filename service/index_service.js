const index = () => {
    return '<div><a href="/">Index</a>&nbsp;&nbsp;&nbsp;<a href="/about">About</a>&nbsp;&nbsp;&nbsp;<a href="/world">World</a></div><h1>Index</h1>'
}

const about = () => {
  return '<div><a href="/">Index</a>&nbsp;&nbsp;&nbsp;<a href="/about">About</a>&nbsp;&nbsp;&nbsp;<a href="/world">World</a></div><h1>About</h1>'
}

const world = () => {
  return '<div><a href="/">Index</a>&nbsp;&nbsp;&nbsp;<a href="/about">About</a>&nbsp;&nbsp;&nbsp;<a href="/world">World</a></div><h1>World</h1>'
}

module.exports = {
  index,
  about,
  world
}