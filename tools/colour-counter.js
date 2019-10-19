const cc = require('color-convert')

function getMinMaxForLabValues() {
  let maxL = -99999
  let minL = 99999
  let maxA = -99999
  let minA = 99999
  let maxB = -99999
  let minB = 99999

  for (let r = 0; r < 256; r++) {
    for (let g = 0; g < 256; g++) {
      for (let b = 0; b < 256; b++) {
        const lab = cc.rgb.lab(r, g, b)
        maxL = Math.max(maxL, lab[0])
        minL = Math.min(minL, lab[0])
        maxA = Math.max(maxA, lab[1])
        minA = Math.min(minA, lab[1])
        maxB = Math.max(maxB, lab[2])
        minB = Math.min(minB, lab[2])
        // if (lab[2] <= -108) console.log(`#${cc.rgb.hex(r, g, b)}`)
      }
    }
  }

  console.log(`maxL: ${maxL}`)
  console.log(`minL: ${minL}`)
  console.log(`maxA: ${maxA}`)
  console.log(`minA: ${minA}`)
  console.log(`maxB: ${maxB}`)
  console.log(`minB: ${minB}`)
}

getMinMaxForLabValues()

