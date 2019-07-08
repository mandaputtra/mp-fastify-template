import { join, dirname } from 'path'

export const rootPath: string = dirname(__dirname)
export const servicePath: string = join(rootPath, 'service')
