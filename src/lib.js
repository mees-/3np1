export function threeNPone(n) {
  if (n === 1) {
    return 1
  } else if (n % 2 === 0) {
    return n / 2
  } else {
    return n * 3 + 1
  }
}

export function* threeNPoneGen(start) {
  let current = start
  yield current
  while (current !== 1) {
    current = threeNPone(current)
    yield current
  }
  return null
}

export const threeNPonePath = n => [...threeNPoneGen(n)]

export function threeNPoneWebWorker(num) {
  function threeNPone(n) {
    if (n === 1) {
      return 1
    } else if (n % 2 === 0) {
      return n / 2
    } else {
      return n * 3 + 1
    }
  }
  function* threeNPoneGen(start) {
    let current = start
    yield current
    while (current !== 1) {
      current = threeNPone(current)
      yield current
    }
    return null
  }

  return [...threeNPoneGen(num)]
}
