const play = require('./rock-paper-scissors')

test('when rock vs scissors then rock wins', () => {
    const jogador1 = 'rock'
    const jogador2 = 'scissors'
    const result = play(jogador1, jogador2)

    expect(result).toBe('jogador1')
})

test('quando os dois jogadores colocam o mesmo valor da empate', () => {
    const jogador1 = 'rock'
    const jogador2 = 'rock'
    const result = play(jogador1, jogador2)

    expect(result).toBe('empate')
})