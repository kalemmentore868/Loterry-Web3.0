export const globalActions = {
  setWallet: (state, action) => {
    state.wallet = action.payload
  },
  setJackpots: (state, action) => {
    state.jackpots = action.payload
  },
  setGeneratorModal: (state, action) => {
    state.generatorModal = action.payload
  },
  setWinnersModal: (state, action) => {
    state.winnersModal = action.payload
  },
}
