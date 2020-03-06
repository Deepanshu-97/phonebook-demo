import { getRandomString } from '../../Utils'

test('#getRandomString', async () => {
  const result = getRandomString()
  
  expect(typeof result).toEqual('string')
})
