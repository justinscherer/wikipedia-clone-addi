import { useState, useEffect } from 'react'

// Mock implementation of useKV for GitHub Pages deployment
export function useKV<T>(key: string, defaultValue: T): [T, (value: T | ((prev: T) => T)) => void, () => void] {
  const [value, setValue] = useState<T>(() => {
    try {
      const stored = localStorage.getItem(`kv_${key}`)
      return stored ? JSON.parse(stored) : defaultValue
    } catch {
      return defaultValue
    }
  })

  const setValueAndStore = (newValue: T | ((prev: T) => T)) => {
    const resolvedValue = typeof newValue === 'function' ? (newValue as (prev: T) => T)(value) : newValue
    setValue(resolvedValue)
    try {
      localStorage.setItem(`kv_${key}`, JSON.stringify(resolvedValue))
    } catch (error) {
      console.warn('Failed to store value in localStorage:', error)
    }
  }

  const deleteValue = () => {
    setValue(defaultValue)
    try {
      localStorage.removeItem(`kv_${key}`)
    } catch (error) {
      console.warn('Failed to remove value from localStorage:', error)
    }
  }

  return [value, setValueAndStore, deleteValue]
}