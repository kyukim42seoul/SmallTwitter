class backend {
  getDataByKey(key) {
    return window.localStorage.getItem(key);
  }

  setData(key = "", data) {
    if (typeof data == "string") {
      window.localStorage.setItem(key, data);
    } else {
      window.localStorage.setItem(key, JSON.stringify(data));
    }
  }
}
