function play(jogador1, jogador2) { // 'rock' 'paper' 'scissors'
    if (jogador1 == jogador2) {
        return 'empate'
    }
    if (jogador1 == 'rock' && jogador2 == 'scissors') {
        return 'jogador1'
    }
}

module.exports = play
