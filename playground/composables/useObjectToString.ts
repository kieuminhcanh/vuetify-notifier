export const useObjectToString = (obj: any) =>
  JSON.stringify(obj, (_, value) => {
    if (value) {
      return value
    }
  }, 2)
