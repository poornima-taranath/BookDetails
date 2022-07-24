import {render} from '@testing-library/react'
import '@testing-library/jest-dom'
import NavBar from './NavBar'

test('renders a message', () => {
  const {asFragment, getByText} = render(<NavBar />)
  expect(asFragment()).toMatchSnapshot()
})