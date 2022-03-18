function battle(x, y) {
    const alphabet = { 'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9, 'J': 10, 'K': 11, 'L': 12, 'M': 13, 'N': 14, 'O': 15, 'P': 16, 'Q': 17, 'R': 18, 'S': 19, 'T': 20, 'U': 21, 'V': 22, 'W': 23, 'X': 24, 'Y': 25, 'Z': 26 }
    let scoreX = 0;
    let scoreY = 0;
    let splitX = x.split("");
    let splitY = y.split("");
    for (let i = 0; i < splitX.length; i++) {
        scoreX += alphabet[splitX[i]]
    }
    for (let i = 0; i < splitY.length; i++) {
        scoreY += alphabet[splitY[i]]
    }
    if (scoreX > scoreY) {
        return x;
    } else if (scoreY > scoreX) {
        return y
    } else {
        return "Tie!"
    }
}