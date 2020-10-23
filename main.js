getCss.onclick = () => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', '/style.css')//1
    // xhr.onload = () => {
    //     const style = document.createElement('style')
    //     style.innerHTML = xhr.response
    //     document.head.appendChild(style)
    // }
    // xhr.onerror = () => {
    //     console.log('失败了')
    // }
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {//下载成功
            if (xhr.status >= 200 && xhr.status < 300) {
                const style = document.createElement('style')
                style.innerHTML = xhr.response
                document.head.appendChild(style)
            }
        }
    }
    xhr.send()//2
}

getJs.onclick = () => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', '/2.js')
    xhr.onload = () => {
        const script = document.createElement('script')
        script.innerHTML = xhr.response
        document.body.appendChild(script)
    }
    xhr.onerror = () => {
        console.log('失败了')
    }
    xhr.send()
}

getHtml.onclick = () => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', '/3.html')
    xhr.onload = () => {
        const div = document.createElement('div')
        div.innerHTML = xhr.response
        document.body.appendChild(div)
        // console.log(typeof xhr.response);
    }
    xhr.onerror = () => {
        console.log('出错了')
    }
    xhr.send()
}

getXml.onclick = () => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', '/4.xml')
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // const dom = xhr.responseXML
            // dom.getElementsByTagName('warning').textContent
            // console.log(text);
        }
    }
    xhr.send()
}

getJSON.onclick = () => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', '/5.json')
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // console.log(xhr.response);
            const obj = JSON.parse(xhr.response)
            console.log(obj);
        }
    }
    xhr.send()
}

let n = 1
nextP.onclick = () => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', `/page${n + 1}`)
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // console.log(xhr.response);
            const array = JSON.parse(xhr.response)
            array.forEach(item => {
                const li = document.createElement('li')
                li.innerHTML = item.id
                jsonData.appendChild(li)
            })
            n = n + 1
            // console.log(n);
        }
    }
    xhr.send()
}