export function isValidElement(element) {
  return (
    isVueOptions(element) ||
    (element &&
      typeof element === 'object' &&
      'componentOptions' in element &&
      'context' in element &&
      element.tag !== undefined)
  ) // remove text node
}

export function isVnode(element: any): boolean {
  return (
    element &&
    typeof element === 'object' &&
    'componentOptions' in element &&
    'context' in element &&
    element.tag !== undefined
  )
}

export function isVueOptions(options: any) {
  return (
    options &&
    (typeof options.template === 'string' ||
      typeof options.render === 'function')
  )
}
// interface a {}
export function composeExport<T0, T1>(s0: T0, s1: T1): T0 & T1 {
  return Object.assign(s0, s1)
}
