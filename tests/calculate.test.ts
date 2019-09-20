import { sum, sub } from '@/libs/calculate'

describe('sum', (): void => {
  test('1 plus 1 is 2', (): void => {
    expect(sum(1, 1)).toBe(2)
  })
})

describe('sub', (): void => {
  test('1 minus 1 is 0', (): void => {
    expect(sub(1, 1)).toBe(0)
  })
})
