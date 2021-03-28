function makeDecorator(method: string) {
  return function (path: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor): void {
      const constructor: any = target.constructor
      if (!constructor.routes) {
        constructor.routes = []
      }
      
      constructor.routes.push({
        method: method,
        path: path,
        handler: async (req, res) => {
          const value = await descriptor.value(req, res)
          res.json(value)
        }
      })
    }
  }
}

export const getDecorator = makeDecorator('get')
export const postDecorator = makeDecorator('post')
export const deleteDecorator = makeDecorator('delete')
