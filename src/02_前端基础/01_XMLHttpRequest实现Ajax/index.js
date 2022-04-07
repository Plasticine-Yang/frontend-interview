// 用 XMLHttpRequest 实现 Ajax
function ajax(url, successCallback) {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', url, true)
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        successCallback(JSON.parse(xhr.responseText))
      }
    }
  }

  xhr.send(null)
}

ajax(
  'https://tenapi.cn/music/?id=1307374414&type=song&media=netease',
  function (res) {
    console.log(res)
  }
)

// 用 Fetch 实现 Ajax
function ajaxWithFetch(url) {
  return fetch(url).then((res) => res.json())
}

ajaxWithFetch(
  'https://tenapi.cn/music/?id=1307374414&type=song&media=netease'
).then((res) => {
  console.log(res)
})
