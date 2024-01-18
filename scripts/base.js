var $bubbleTipsTimeoutId = 0;

/**
 * 显示提示消息
 * @param {*} msg 消息内容
 * @param {*} timeout 超时时间
 */
function $alert(msg, timeout) {
    const tipsBlockId = 'bubble-tips-block';
    const tipsId = 'bubble-tips';
    let tipsBlock = document.getElementById(tipsBlockId);
    let tips = document.getElementById(tipsId);
    if (!tipsBlock) { 
        tipsBlock = document.createElement('div');
        tipsBlock.id = tipsBlockId;
        tipsBlock.className = 'tips-bubble-block';
        const title = document.createElement('div');
        title.className = 'tips-bubble-title';
        title.innerText = '提示';
        tips = document.createElement('span');
        tips.id = tipsId;
        tipsBlock.appendChild(title);
        tipsBlock.appendChild(tips);
        document.body.appendChild(tipsBlock);
    }
    tips.innerText = `${msg}`;
    tipsBlock.style.display = '';
    clearTimeout($bubbleTipsTimeoutId);
    $bubbleTipsTimeoutId = setTimeout(() => {
        tipsBlock.style.display = 'none';
    }, timeout || 3000);
}

/**
 * 复制文本
 * @param {*} str 文本
 */
function $copy(str) {
    if (!str) {
        $alert("没有可复制的内容");
        return
    }
    try {
        navigator.clipboard.writeText(str)
        window.$alert('复制完毕');
    }
    catch (ex) {
        window.$alert(`复制时产生异常：${ex}`);
    }
}

/**
 * 设置缓存
 * @param {*} key 缓存键值
 * @param {*} obj 缓存内容
 */
function $setCache(key, obj) 
{
    const str = JSON.stringify(obj);
    localStorage.setItem(key, str);
}

/**
 * 获取缓存
 * @param {*} key 缓存键值
 */
function $getCache(key) 
{
    const str = localStorage.getItem(key);
    const obj = JSON.parse(str);
    return obj;
}