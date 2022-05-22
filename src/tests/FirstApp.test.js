import { render, screen } from '@testing-library/react'
import FirstApp from '../FirstApp'

describe('FirstApp', () => {
  const expectedGreeting = 'Hi Apple'
  test('should show message "Hi Apple"', async () => {
    render(<FirstApp greeting={expectedGreeting} />)

    expect(screen.getByTestId('greeting-paragraph').textContent).toContain(
      expectedGreeting
    )
  })

  test('should show default subtitle', async () => {
    const expectedSubtitle = 'Default value'

    render(<FirstApp greeting={expectedGreeting} />)

    expect(screen.getByTestId('subtitle').textContent).toEqual(expectedSubtitle)
  })
})
