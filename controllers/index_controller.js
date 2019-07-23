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
const postdata = async (ctx, next) => {
  console.log('解析后的请求体:',ctx.request.body)// { name: 'teswe', ee: 'ef' }
  console.log('原始的请求体:',ctx.request.rawBody)// name=teswe&ee=ef
  const _html =  index_service.world()
  ctx.body= _html
}
module.exports = {
  index,
  about,
  world,
  postdata
}