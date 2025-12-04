import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Contact from './Contact';

describe('Contact Component', () => {
  it('renders contact form with all fields', () => {
    render(<Contact />);

    expect(screen.getByText('Start a Project')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('John Doe')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('john@example.com')).toBeInTheDocument();
    expect(screen.getByText('Launch Project')).toBeInTheDocument();
  });

  it('has project type selector', () => {
    render(<Contact />);

    expect(screen.getByText('Project Type')).toBeInTheDocument();
  });

  it('has budget range selector', () => {
    render(<Contact />);

    expect(screen.getByText('Budget Range')).toBeInTheDocument();
  });

  it('renders submit button', () => {
    render(<Contact />);

    const button = screen.getByRole('button', { name: /Launch Project/i });
    expect(button).toBeInTheDocument();
  });
});
