export default key => store => next => action => {
  let result = next(action);

  try {
    let json = JSON.stringify(key ? store.getState()[key] : store.getState());
    localStorage.setItem(key, json);
  }catch (e) {
    console.error(e);
  }

  return result
}


export const loadState = key => {

  try {
    let json = localStorage.getItem(key);
    if (json === null) {
      return undefined;
    } else {
      return JSON.parse(json)
    }
  } catch (e) {
    return undefined;
  }
};