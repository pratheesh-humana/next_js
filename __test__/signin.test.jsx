import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Signin from '@/components/Signin'

describe('Signin', () => {
    it('renders a heading', () => {
      render(<Signin />)
  
      const heading = screen.getByRole('heading', {
        name: 'Login',
      })
  
      expect(heading).toBeInTheDocument()
    })
  })