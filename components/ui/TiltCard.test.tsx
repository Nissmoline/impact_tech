import { render, screen } from '@testing-library/react';
import TiltCard from './TiltCard';

describe('TiltCard Component', () => {
  it('renders children content', () => {
    render(
      <TiltCard>
        <div>Test Content</div>
      </TiltCard>
    );

    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <TiltCard className="custom-class">
        <div>Content</div>
      </TiltCard>
    );

    const card = container.querySelector('.custom-class');
    expect(card).toBeInTheDocument();
  });

  it('has motion div wrapper', () => {
    const { container } = render(
      <TiltCard>
        <div>Content</div>
      </TiltCard>
    );

    // Check if Framer Motion creates motion div
    const motionDiv = container.querySelector('div[style]');
    expect(motionDiv).toBeInTheDocument();
  });

  it('accepts rotationFactor prop', () => {
    // This test verifies the component accepts the prop without crashing
    expect(() => {
      render(
        <TiltCard rotationFactor={20}>
          <div>Content</div>
        </TiltCard>
      );
    }).not.toThrow();
  });
});
