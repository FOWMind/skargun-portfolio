export function replaceSlug(str = '') {
  if (typeof str != 'string') return str
  return encodeURIComponent(
    str.split('-').join('_').split(' ').join('-').toLowerCase()
  )
}

export function restoreSlug(str = '') {
  if (typeof str != 'string') return str
  return str.split('-').join(' ').split('_').join('-').toLowerCase()
}
