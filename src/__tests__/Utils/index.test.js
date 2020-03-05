import { getRandomString } from '../../Utils'

require('dotenv').config()

test('#getRandomString', async () => {
  const result = getRandomString()
  
  expect(typeof result).toEqual('string')
})
