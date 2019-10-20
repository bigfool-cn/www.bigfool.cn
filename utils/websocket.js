const WSS_URL = `wss://api.bigfool.cn/ws`
let Socket = ''
let setIntervalWebSocketPing = null

/**建立连接 */
export function createSocket() {
  if (!Socket) {
    Socket = new WebSocket(WSS_URL)
    Socket.onopen = onopen
    Socket.onmessage = onmessage
    Socket.onerror = onerror
    Socket.onclose = onclose
  } else {
    //
  }
}

/**打开WS之后发送心跳 */
export function onopen() {
  sendPing() //发送心跳
}

/**连接失败重连 */
export function onerror() {
  clearInterval(setIntervalWebSocketPing)
  Socket.close()
  createSocket() //重连
}

/**WS数据接收统一处理 */
export function onmessage(data) {
  window.dispatchEvent(new CustomEvent('onmessage', {
    detail: {
      data: data
    }
  }))
}

/**发送数据
 * @param data
 */
export function sendWebSocketData(data) {
  if (Socket !== null && Socket.readyState === 3) {
    Socket.close()
    createSocket() //重连
  } else if (Socket.readyState === 1) {
    Socket.send(JSON.stringify(data))
  } else if (Socket.readyState === 0) {
    setTimeout(() => {
      Socket.send(JSON.stringify(data))
    }, 5000)
  }
}

/**关闭WS */
export function onclose() {
  clearInterval(setIntervalWebSocketPing)
  console.log('websocket已断开')
}

/**发送心跳 */
export function sendPing() {
  Socket.send('ping')
  setIntervalWebSocketPing = setInterval(() => {
    Socket.send('ping')
  }, 5000)
}

