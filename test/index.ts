import { ConvertKNXFloatToNumber, ConvertNumberToKNXFloat } from "../src/index"

import { describe } from "mocha"
import { expect } from "chai"

describe('Convert KNX float to number', () => {
  describe('ConvertKNXFloatToNumber(0x0000)', () => {
    let value = ConvertKNXFloatToNumber(0x0000);

    it('should return 0.00', () => {
      expect(value).to.equal(0.00);
    })
  })

  describe('ConvertKNXFloatToNumber(0x07D0)', () => {
    let value = ConvertKNXFloatToNumber(0x07D0);

    it('should return 20.00', () => {
      expect(value).to.equal(20.00);
    })
  })

  describe('ConvertKNXFloatToNumber(0x0C1A)', () => {
    let value = ConvertKNXFloatToNumber(0x0C1A);

    it('should return 21.00', () => {
      expect(value).to.equal(21.00);
    })
  })

  describe('ConvertKNXFloatToNumber(0x7FFF)', () => {
    let value = ConvertKNXFloatToNumber(0x7FFF);

    it('should return 670760.96', () => {
      expect(value).to.equal(670760.96);
    })
  })

  describe('ConvertKNXFloatToNumber(0xFFFF)', () => {
    let value = ConvertKNXFloatToNumber(0xFFFF);

    it('should return -671088.64', () => {
      expect(value).to.equal(-671088.64);
    })
  })
})

describe('Convert number to KNX float', () => {
  describe('ConvertNumberToKNXFloat(0.00)', () => {
    let value = ConvertNumberToKNXFloat(0.00);

    it('should return 0x0000', () => {
      expect(value).to.equal(0x0000);
    })
  })

  describe('ConvertNumberToKNXFloat(20.00)', () => {
    let value = ConvertNumberToKNXFloat(20.00);

    it('should return 0x07D0', () => {
      expect(value).to.equal(0x07D0);
    })
  })

  describe('ConvertNumberToKNXFloat(21.00)', () => {
    let value = ConvertNumberToKNXFloat(21.00);

    it('should return 0x0C1A', () => {
      expect(value).to.equal(0x0C1A);
    })
  })

  describe('ConvertNumberToKNXFloat(20.99)', () => {
    let value = ConvertNumberToKNXFloat(20.99);

    it('should return 0x0C19', () => {
      expect(value).to.equal(0x0C19);
    })
  })

  describe('ConvertNumberToKNXFloat(21.01)', () => {
    let value = ConvertNumberToKNXFloat(21.01);

    it('should return 0x0C1A', () => {
      expect(value).to.equal(0x0C1A);
    })
  })

  describe('ConvertNumberToKNXFloat(670760.96)', () => {
    let value = ConvertNumberToKNXFloat(670760.96);

    it('should return 0x7FFF', () => {
      expect(value).to.equal(0x7FFF);
    })
  })

  describe('ConvertNumberToKNXFloat(-671088.64)', () => {
    let value = ConvertNumberToKNXFloat(-671088.64);

    it('should return 0xFFFF', () => {
      expect(value).to.equal(0xFFFF);
    })
  })
})