import * as React from 'react'

import CustomBlockComponent from '../components/CustomBlock'

const nodeIs = (node, fieldsToCheck, type) => {
  const { sys, fields } = node.data.target
  if (!sys.contentType || !sys.contentType.sys || !fields) {
    return false
  }

  return sys.contentType.sys.id === type
}

export const embeddedEntryRenderer = (node, key) => {
  const { fields } = node.data.target

  if (nodeIs(node, fields, 'customBlock')) {
    return (
      <CustomBlockComponent customBlock={fields} key={`CustomBlock=${key}`} />
    )
  }
}
