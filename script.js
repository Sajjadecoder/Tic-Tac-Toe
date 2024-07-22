let Game = (pO, pX) => {
    let boxes = document.querySelectorAll(".box")
    let resetBtn = document.querySelector("#reset")
    let turn = document.querySelector("h2")
    let loser = document.querySelector(".loser")
    let turnO = true;
    let turnX = true;
    let game = true;
    let displayWinner = document.querySelector(".displayWinner");
    let x = 0;
    const checkDraw = () => {
        let cnt = 0;
        boxes.forEach(box => {
            if (box.innerHTML === "X" || box.innerHTML === "O") {
                cnt++
            }
        });
        console.log("Count: ", cnt)
        if (cnt === 9) {
            return 1;
        } else {
            return 0;
        }
    }
    boxes.forEach(box => {
        turn.innerHTML = `${pO}'s Turn`
        box.addEventListener("click", () => {
            if (!game) {
                return
            }
            if (turnO && box.innerHTML === "") {
                if (x === 0) {

                    turn.innerHTML = `${pX}'s Turn`
                    x = 1;
                }
                box.innerHTML = "O"
                turnO = false
                turnX = true;
                turn.innerHTML = `${pX}'s Turn`
            } else {
                if (box.innerHTML === "") {
                    turn.innerHTML = `${pO}'s Turn`
                    box.innerHTML = "X"
                    turnX = false;
                    turnO = true;
                } else {
                    alert("Cannot click here bro")
                }
            }
            let check = checkWinner()
            if (check === "X") {
                displayWinner.innerHTML = `${pX} Wins`
                loser.innerHTML = `(Skill Issue ft. ${pO})`
                turn.innerHTML = ""
                game = false
            } else if (check === "O") {
                displayWinner.innerHTML = `${pO} Wins`
                loser.innerHTML = `(Skill Issue ft. ${pX})`
                turn.innerHTML = ""
                game = false

            }else{

                // console.log(check)
                let draw = checkDraw()
                console.log("draw ", draw)
                if (draw === 1) {
                    boxes.forEach(box => {
                        box.style.backgroundColor = "red"
                        box.style.color = "white"

                    });
                    displayWinner.innerHTML = "It's A Draw"
                    turn.innerHTML = ""
                    game = false
                }
            }


        })
    });
    resetBtn.addEventListener("click", () => {
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].innerHTML = ""

            boxes[i].style.backgroundColor = ""
            turnO = true
            turnX = true
            game = true

        }
        turn.innerHTML = ""
        displayWinner.innerHTML = ""
        loser.innerHTML = ""
    })
    const changeColor = (el1, el2, el3) => {
        if (el1.innerHTML != "" && el2.innerHTML != "" && el3.innerHTML != "") {
            return 1
        }
        return 0
    }
    const checkWinner = () => {
        if (boxes[0].innerHTML !== "" && boxes[0].innerHTML === boxes[1].innerHTML && boxes[0].innerHTML === boxes[2].innerHTML) {
            boxes[0].style.backgroundColor = "#19cf19";
            boxes[1].style.backgroundColor = "#19cf19";
            boxes[2].style.backgroundColor = "#19cf19";
            return boxes[0].innerHTML;
        }
        if (boxes[3].innerHTML !== "" && boxes[3].innerHTML === boxes[4].innerHTML && boxes[3].innerHTML === boxes[5].innerHTML) {
            boxes[3].style.backgroundColor = "#19cf19";
            boxes[4].style.backgroundColor = "#19cf19";
            boxes[5].style.backgroundColor = "#19cf19";
            return boxes[3].innerHTML;
        }
        if (boxes[6].innerHTML !== "" && boxes[6].innerHTML === boxes[7].innerHTML && boxes[6].innerHTML === boxes[8].innerHTML) {
            boxes[6].style.backgroundColor = "#19cf19";
            boxes[7].style.backgroundColor = "#19cf19";
            boxes[8].style.backgroundColor = "#19cf19";
            return boxes[6].innerHTML;
        }
        if (boxes[0].innerHTML !== "" && boxes[0].innerHTML === boxes[3].innerHTML && boxes[0].innerHTML === boxes[6].innerHTML) {
            boxes[0].style.backgroundColor = "#19cf19";
            boxes[3].style.backgroundColor = "#19cf19";
            boxes[6].style.backgroundColor = "#19cf19";
            return boxes[0].innerHTML;
        }
        if (boxes[1].innerHTML !== "" && boxes[1].innerHTML === boxes[4].innerHTML && boxes[1].innerHTML === boxes[7].innerHTML) {
            boxes[1].style.backgroundColor = "#19cf19";
            boxes[4].style.backgroundColor = "#19cf19";
            boxes[7].style.backgroundColor = "#19cf19";
            return boxes[1].innerHTML;
        }
        if (boxes[2].innerHTML !== "" && boxes[2].innerHTML === boxes[5].innerHTML && boxes[2].innerHTML === boxes[8].innerHTML) {
            boxes[2].style.backgroundColor = "#19cf19";
            boxes[5].style.backgroundColor = "#19cf19";
            boxes[8].style.backgroundColor = "#19cf19";
            return boxes[2].innerHTML;
        }
        if (boxes[0].innerHTML !== "" && boxes[0].innerHTML === boxes[4].innerHTML && boxes[0].innerHTML === boxes[8].innerHTML) {
            boxes[0].style.backgroundColor = "#19cf19";
            boxes[4].style.backgroundColor = "#19cf19";
            boxes[8].style.backgroundColor = "#19cf19";
            return boxes[0].innerHTML;
        }
        if (boxes[2].innerHTML !== "" && boxes[2].innerHTML === boxes[4].innerHTML && boxes[2].innerHTML === boxes[6].innerHTML) {
            boxes[2].style.backgroundColor = "#19cf19";
            boxes[4].style.backgroundColor = "#19cf19";
            boxes[6].style.backgroundColor = "#19cf19";
            return boxes[4].innerHTML;
        }
        return "-";
    }
    
}
let playerO = prompt("Enter Player 1's Name: ")
let playerX = prompt("Enter Player 2's Name: ")
while (playerO===playerX) {
    alert("NO MATCHING NAMES!!")
    playerO = prompt("Enter Player 1's Name again: ")
    playerX = prompt("Enter Player 2's Name again: ")
    
}
Game(playerO, playerX)
