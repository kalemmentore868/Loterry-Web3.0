const { expect } = require('chai')
const { faker } = require('@faker-js/faker')
const { ethers } = require('hardhat')

const toWei = (num) => ethers.utils.parseEther(num.toString())
const fromWei = (num) => ethers.utils.formatEther(num)

const addDays = (days) => {
  const currentDate = new Date()
  const millisecondsPerDay = 24 * 60 * 60 * 1000
  const newTimestamp = currentDate.getTime() + days * millisecondsPerDay
  return newTimestamp
}

const generateLuckyNumbers = (count) => {
  const result = []
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  for (let i = 0; i < count; i++) {
    let string = ''
    for (let j = 0; j < 6; j++) {
      string += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    result.push(string)
  }
  return result
}

describe('DappLottery', () => {
  let Contract, contract
  const servicePercent = 5
  const title = faker.random.words(5)
  const description = faker.lorem.paragraph(5)
  const image = faker.image.imageUrl()
  const prize = toWei(10)
  const ticketPrice = toWei(0.01)
  const expiresAt = addDays(7)
  const lotteryId = 1
  const numberToGenerate = 5
  const numberOfWinners = 2

  beforeEach(async () => {
    Contract = await ethers.getContractFactory('DappLottery')
    ;[serviceAccount, participant1, participant2, participant3, participant4, participant5] =
      await ethers.getSigners()

    contract = await Contract.deploy(servicePercent)
    await contract.deployed()
  })

  describe('Deployed State', () => {
    it('Should confirm deployment info', async () => {
      result = await contract.owner()
      expect(result).to.be.equal(serviceAccount.address)
      result = await contract.servicePercent()
      expect(result.toNumber()).to.be.equal(servicePercent)
    })
  })

  describe('Lottery Creation', () => {
    it('Should confirm lottery creation', async () => {
      result = await contract.getLotteries()
      expect(result).to.have.lengthOf(0)

      await contract.createLottery(title, description, image, prize, ticketPrice, expiresAt)

      result = await contract.getLotteries()
      expect(result).to.have.lengthOf(1)
    })
  })
})
