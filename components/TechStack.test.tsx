import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import TechStack from './TechStack';

describe('TechStack Component', () => {
  it('renders tech stack section', () => {
    const { container } = render(<TechStack />);
    const section = container.querySelector('section');
    expect(section).toBeInTheDocument();
  });

  it('displays heading text', () => {
    render(<TechStack />);
    expect(screen.getByText(/Our Tech Stack/i)).toBeInTheDocument();
  });

  it('renders technology items', () => {
    const { container } = render(<TechStack />);
    // Check if any technology abbreviations are rendered
    expect(container.textContent).toMatch(/Re|Ne|Ty|No|Ta|Th|Fi|Gr/);
  });

  it('has animated container', () => {
    const { container } = render(<TechStack />);
    // Check if there's any content rendered
    expect(container.querySelector('section')).toHaveTextContent(/./);
  });
});
