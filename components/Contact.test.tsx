import { render } from '@testing-library/react';
import Contact from './Contact';

const renderContact = () => render(<Contact />);

describe('Contact Component', () => {
  it('renders contact heading and subtitle', () => {
    const { getByText } = renderContact();

    expect(getByText("Let's Talk")).toBeInTheDocument();
    expect(getByText('Reach us directly for new projects, partnerships, or questions.')).toBeInTheDocument();
  });

  it('renders contact details', () => {
    const { getByText } = renderContact();

    expect(getByText(/Pl\. Ippodameias 8, Office D8/i)).toBeInTheDocument();
    expect(getByText(/18531 Piraeus, Attica, Greece/i)).toBeInTheDocument();
    expect(getByText('+30 211 006 8114')).toBeInTheDocument();
    expect(getByText('+30 697 385 8321')).toBeInTheDocument();
    expect(getByText('info@impact-tech.gr')).toBeInTheDocument();
  });
});
