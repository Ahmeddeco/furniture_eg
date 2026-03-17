import { describe, it, expect } from 'vitest'
import { Currency, priceAfterDiscount, calculateFinalPrice, formatCurrency } from '../logic/currency'

describe('Currency Utilities', () => {

  describe('Currency & formatCurrency', () => {
    it('should format numbers to Egyptian Pound (EGP) in Arabic locale', () => {
      const result = formatCurrency(1500)
      // Checks for the Egyptian Pound symbol and the formatted number
      expect(result).toContain('١٬٥٠٠')
      expect(result).toContain('ج.م')
    })

    it('should handle zero correctly', () => {
      const result = Currency(0)
      expect(result).toContain('٠')
    })
  })

  describe('priceAfterDiscount', () => {
    it('should return a formatted string with the correct discounted price', () => {
      // 1000 - 10% = 900
      const result = priceAfterDiscount(1000, 10)
      expect(result).toContain('ج.م.‏')
    })

    it('should clamp discount to 100 if input is higher than 100', () => {
      const result = priceAfterDiscount(500, 150)
      expect(result).toContain('ج.م.‏') // 100% discount results in 0
    })

    it('should handle negative price by treating it as 0', () => {
      const result = priceAfterDiscount(-100, 10)
      expect(result).toContain('ج.م.‏')
    })

    it('should handle negative discount by treating it as 0', () => {
      const result = priceAfterDiscount(1000, -50)
      expect(result).toContain('ج.م.‏')
    })
  })

  describe('calculateFinalPrice', () => {
    it('should return a raw number for further calculations', () => {
      const result = calculateFinalPrice(200, 25)
      expect(result).toBe(150)
      expect(typeof result).toBe('number')
    })

    it('should handle null or undefined discount as 0%', () => {
      expect(calculateFinalPrice(100, null)).toBe(100)
      expect(calculateFinalPrice(100, undefined)).toBe(100)
    })

    it('should round to 2 decimal places as specified', () => {
      // Testing the .toFixed(2) logic
      const result = calculateFinalPrice(99.99, 12.5)
      // 99.99 - (99.99 * 0.125) = 87.49125 -> 87.49
      expect(result).toBe(87.49)
    })

    it('should ensure price is never less than 0', () => {
      expect(calculateFinalPrice(-50, 10)).toBe(0)
    })
  })
})