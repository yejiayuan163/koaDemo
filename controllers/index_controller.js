const index_service = require('../service/index_service')
const index = async (ctx, next) => {
    const _html =  index_service.index()
  ctx.body= _html
}

const about = async (ctx, next) => {
  const _html =  index_service.about()
  ctx.body= _html
}
const world = async (ctx, next) => {
  const _html =  index_service.world()
  ctx.body= _html
}
module.exports = {
  index,
  about,
  world
}