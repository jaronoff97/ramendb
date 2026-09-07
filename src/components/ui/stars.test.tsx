// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { StarInput, Stars } from './stars'

// Testing Library only registers its own cleanup when vitest runs with
// globals. It does not here, so each test would otherwise leave its markup in
// the document and the next query would find two of everything.
afterEach(cleanup)

describe('StarInput', () => {
  it('offers every half step as its own control', () => {
    render(<StarInput value={0} onChange={() => {}} />)
    const options = screen.getAllByRole('radio')
    expect(options).toHaveLength(10)
    expect(options.map((o) => o.getAttribute('aria-label'))).toEqual([
      '0.5 out of 5',
      '1 out of 5',
      '1.5 out of 5',
      '2 out of 5',
      '2.5 out of 5',
      '3 out of 5',
      '3.5 out of 5',
      '4 out of 5',
      '4.5 out of 5',
      '5 out of 5',
    ])
  })

  it('reports a half when the left of a star is clicked', () => {
    const onChange = vi.fn()
    render(<StarInput value={0} onChange={onChange} />)
    fireEvent.click(screen.getByLabelText('3.5 out of 5'))
    expect(onChange).toHaveBeenCalledWith(3.5)
  })

  it('reports a whole star from the right half', () => {
    const onChange = vi.fn()
    render(<StarInput value={0} onChange={onChange} />)
    fireEvent.click(screen.getByLabelText('4 out of 5'))
    expect(onChange).toHaveBeenCalledWith(4)
  })

  it('marks only the chosen value as checked', () => {
    render(<StarInput value={2.5} onChange={() => {}} />)
    expect(
      screen.getByLabelText('2.5 out of 5').getAttribute('aria-checked'),
    ).toBe('true')
    expect(
      screen.getByLabelText('3 out of 5').getAttribute('aria-checked'),
    ).toBe('false')
  })

  it('says nothing is picked until something is', () => {
    const { rerender } = render(<StarInput value={0} onChange={() => {}} />)
    expect(screen.getByText('—')).toBeTruthy()
    rerender(<StarInput value={4.5} onChange={() => {}} />)
    expect(screen.getByText('4.5')).toBeTruthy()
  })
})

describe('Stars', () => {
  it('announces the score it draws, snapped to a half', () => {
    const { rerender } = render(<Stars value={4.25} />)
    expect(screen.getByRole('img').getAttribute('aria-label')).toBe(
      '4.5 out of 5',
    )
    rerender(<Stars value={4.2} />)
    expect(screen.getByRole('img').getAttribute('aria-label')).toBe(
      '4 out of 5',
    )
  })
})
