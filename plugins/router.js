export default ({app}) => {
  // true服务端，fasle客户端。
  const dsas = process.server
  console.log(dsas)
  app.router.beforeEach((to, form, next) => {
    console.log(to)
    next()
  })
}
