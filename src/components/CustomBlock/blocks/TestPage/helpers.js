export const convertMicrocopiesToKeyValuePairs = microcopies => {
  if (!microcopies) {
    return {}
  }

  return microcopies.reduce((prev, curr) => {
    return { ...prev, [curr.fields.key]: curr.fields.value }
  }, {})
}
