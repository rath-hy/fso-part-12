import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Todo from '../Todos/Todo'
import { describe, test, expect, vi } from 'vitest'

describe('Todo component', () => {
  const mockTodo = { id: 1, text: 'Write tests', done: false }
  const mockDelete = vi.fn()
  const mockComplete = vi.fn()

  test('renders todo text', () => {
    render(<Todo todo={mockTodo} deleteTodo={mockDelete} completeTodo={mockComplete} />)

    expect(screen.getByText('Write tests')).toBeInTheDocument()
  })

  test('shows not done info if todo is not done', () => {
    render(<Todo todo={mockTodo} deleteTodo={mockDelete} completeTodo={mockComplete} />)

    expect(screen.getByText(/not done/i)).toBeInTheDocument()
    expect(screen.getByText(/Set as done/i)).toBeInTheDocument()
  })

  test('calls deleteTodo when delete button is clicked', () => {
    render(<Todo todo={mockTodo} deleteTodo={mockDelete} completeTodo={mockComplete} />)

    fireEvent.click(screen.getByText(/Delete/i))
    expect(mockDelete).toHaveBeenCalledWith(mockTodo)
  })

  test('calls completeTodo when complete button is clicked', () => {
    render(<Todo todo={mockTodo} deleteTodo={mockDelete} completeTodo={mockComplete} />)

    fireEvent.click(screen.getByText(/Set as done/i))
    expect(mockComplete).toHaveBeenCalledWith(mockTodo)
  })
})
