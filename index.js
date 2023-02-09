/*
 * @Description: 
 * @Author: Xinyue Cao
 * @Date: 2023-02-08 12:12:05
 * @LastEditTime: 2023-02-08 12:32:09
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

