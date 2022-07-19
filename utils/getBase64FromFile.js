export const getBase64FromFile = (file, handleBase64) => {
  if (!file) return
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.addEventListener('loadend', () => {
    handleBase64(reader.result)
  })
}
