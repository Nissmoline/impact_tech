import { render } from '@testing-library/react';
import Contact from './Contact';

const renderContact = () => render(<Contact />);

describe('Contact Component', () => {
  it('renders contact form with all fields', () => {
    const { getByText, getByPlaceholderText } = renderContact();

    expect(getByText('Start a Project')).toBeInTheDocument();
    expect(getByPlaceholderText('John Doe')).toBeInTheDocument();
    expect(getByPlaceholderText('john@example.com')).toBeInTheDocument();
    expect(getByText('Launch Project')).toBeInTheDocument();
  });

  it('has project type selector', () => {
    const { getByText } = renderContact();

    expect(getByText('Project Type')).toBeInTheDocument();
  });

  it('has budget range selector', () => {
    const { getByText } = renderContact();

    expect(getByText('Business Range')).toBeInTheDocument();
  });

  it('renders submit button', () => {
    const { getByRole } = renderContact();

    const button = getByRole('button', { name: /Launch Project/i });
    expect(button).toBeInTheDocument();
  });
});
