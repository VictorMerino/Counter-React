import { fireEvent, render, screen } from '@testing-library/react'
import CounterApp from '../CounterApp'

/**
 * Counter app should:
 * show default value
 * substract
 * add
 * reset
 */

describe('CounterApp', () => {
  const defaultValue = 0
  test('should show default value', () => {
    render(<CounterApp value={defaultValue} />)
    expect(Number(screen.getByTestId('result').textContent)).toBe(defaultValue)
  })
  test('should substract', async () => {
    render(<CounterApp value={defaultValue} />)
    const substractBtn = await screen.findByTestId('substract')
    fireEvent.click(substractBtn)
    expect(Number(screen.getByTestId('result').textContent)).toBe(-1)
  })
  test('should add', async () => {
    render(<CounterApp value={defaultValue} />)
    const addBtn = await screen.findByTestId('add')
    fireEvent.click(addBtn)
    expect(Number(screen.getByTestId('result').textContent)).toBe(1)
  })
  test.only('reset to default value', async () => {
    const clickedTimes = 5
    render(<CounterApp value={defaultValue} />)
    const addBtn = await screen.findByTestId('add')

    for (let i = 0; i < clickedTimes; i++) {
      fireEvent.click(addBtn)
    }
    expect(Number(screen.getByTestId('result').textContent)).toBe(clickedTimes)

    const resetBtn = await screen.findByTestId('reset')
    fireEvent.click(resetBtn)

    expect(Number(screen.getByTestId('result').textContent)).toBe(defaultValue)
  })
})
