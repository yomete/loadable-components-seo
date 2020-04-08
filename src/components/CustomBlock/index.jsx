import * as React from 'react'

import CUSTOM_BLOCKS from './blocks'

const getRenderedContent = customBlockName => {
  if (typeof window === 'undefined') return ''

  const element = window.document.querySelector(
    `#CustomBlock__${customBlockName}`
  )

  return element ? element.innerHTML : ''
}

const CustomBlock = ({ customBlock }) => {
  const CustomBlockComponent = CUSTOM_BLOCKS[customBlock.name]

  if (!CustomBlockComponent) {
    return null
  }

  return (
    <section id={`CustomBlock__${customBlock.name}`}>
      <CustomBlockComponent
        customBlock={customBlock}
        fallback={
          <div
            dangerouslySetInnerHTML={{
              __html: getRenderedContent(customBlock.name),
            }}
          />
        }
      />
    </section>
  )
}

// Use this code snippet below instead of the one above to see the content in the custom block not pre-rendered

// const CustomBlock = ({ customBlock }) => {
//   const CustomBlockComponent = CUSTOM_BLOCKS[customBlock.name]

//   if (!CustomBlockComponent) {
//     return null
//   }

//   return <CustomBlockComponent customBlock={customBlock} />
// }

export default CustomBlock
