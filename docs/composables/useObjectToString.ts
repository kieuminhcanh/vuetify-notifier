export const useObjectToString = (obj: any) => {
  return JSON.stringify(obj, (key, value) => {
    if (value) {
      return typeof value === 'function' ? key : value
    }
  }, 2)
    .replace(': "onSubmit"', ': (data) => console.log("Submit data", data)')
    .replace(': "onClick"', ': () => console.log("Toast clicked")')
    .replace(': "onClose"', ': () => console.log("Close")')
}
