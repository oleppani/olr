import { render, fireEvent, screen } from '@testing-library/react'
import App from '../App'

test('renders Osmo Learning React', () => {
  render(<App />);
  const Element = screen.getByText('Osmo Learning React');

  // /learn react/i
  expect(Element).toBeInTheDocument();
})

test('JavaScript for React link works ', () => {
  const { getByText }= render(
    <App />
  )
  const button = getByText('JavaScript for React')
  fireEvent.click(button)
  
  expect(screen.getByText("Declaring variables")).toBeInTheDocument();
})