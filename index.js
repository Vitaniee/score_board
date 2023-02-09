/*
 * @Description: 
 * @Author: Xinyue Cao
 * @Date: 2023-02-08 12:12:05
 * @LastEditTime: 2023-02-09 13:07:35
 * @LastEditors: Xinyue Cao
 */
let homeS = 0
let guestS = 0

function increment(num,side){
    if(side == "home"){
        let target = document.getElementById("homeScore")
        homeS += num
        target.textContent = homeS
    }
    if(side == "guest"){
        let target = document.getElementById("guestScore")
        guestS += num
        target.textContent = guestS
    }
    
}

function reset(){
    homeS=0
    guestS=0
    let target = document.getElementById("homeScore")
    target.textContent = 0
    target = document.getElementById("guestScore")
    target.textContent = 0
}

