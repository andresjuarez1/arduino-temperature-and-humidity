/** @type {Socket} */
const socket = io()

const h = document.getElementById("hum")
const t = document.getElementById("tem")

const tt = document.getElementById("tem-tit")
const ht = document.getElementById("hum-tit")

socket.on('updateData',(info)=>{
    if(!t.classList.contains("info")){
        t.classList.add("info")
        h.classList.add("info")
        tt.classList.add('title-box')
        ht.classList.add('title-box')
    }
    t.textContent = `${info.tem} °C`
    h.textContent = `${info.hum} %`
})