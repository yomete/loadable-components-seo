import loadable from '@loadable/component'

const CUSTOM_BLOCKS = {
  TestPage: loadable(() => import('./TestPage')),
}

export default CUSTOM_BLOCKS
