import { describe, it, expect } from 'vitest'
import type { CartItem } from "../store/cartStore"
import { priceInfo, totalPrice } from "../helpers/price.logic"

describe('Price Logic', () => {

  describe('totalPrice', () => {
    it('should calculate the totalPrice correctly for a product from the price and quantity', () => {
      expect(totalPrice(10, 5)).toBe(50)
      expect(totalPrice(19.99, 2)).toBe(39.98)
    })

    it('should return 0 if quantity is 0', () => {
      expect(totalPrice(100, 0)).toBe(0)
    })
  })

  describe('priceInfo', () => {
    const mockItems: CartItem[] = [
      { id: '1', price: 100, quantity: 2, title: 'Item 1', mainImage: '' },
      { id: '2', price: 50, quantity: 1, title: 'Item 2', mainImage: '' },
    ]

    it('should calculate subTotal, tax, and total correctly with custom tax', () => {
      const taxRate = 0.15 // 15%
      const result = priceInfo(mockItems, taxRate)

      expect(result.subTotal).toBe(250) // (100*2) + (50*1)
      expect(result.taxValue).toBe(37.5) // 250 * 0.15
      expect(result.total).toBe(287.5) // 250 + 37.5
    })

    it('should use default tax of 10 if tax argument is missing', () => {
      const result = priceInfo(mockItems)

      expect(result.subTotal).toBe(250)
      expect(result.taxValue).toBe(25) // 250 * .1
      expect(result.total).toBe(275)   // 250 + 25
    })

    it('should handle an empty cart', () => {
      const result = priceInfo([])

      expect(result.subTotal).toBe(0)
      expect(result.taxValue).toBe(0)
      expect(result.total).toBe(0)
    })
  })
})