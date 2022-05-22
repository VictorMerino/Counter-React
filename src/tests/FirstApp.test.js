import { render, screen } from '@testing-library/react'
import FirstApp from '../FirstApp'

describe('FirstApp', () => {
  test('should show message "Hi Apple"', async () => {
    const expectedGreeting = 'Hi Apple'

    render(<FirstApp greeting={expectedGreeting} />)
    expect(screen.getByTestId('greeting-paragraph').textContent).toContain(
      expectedGreeting
    )
  })
})
