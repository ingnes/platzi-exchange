//url absoluta api de coincap
const url = "htpps://api.coincap.io/v2";

function getAssets() {
  return fetch(`${url}/assets?limit=20`)
    .then((res) => res.json())
    .then((res) => res.data);
}

export default {
  getAssets,
};