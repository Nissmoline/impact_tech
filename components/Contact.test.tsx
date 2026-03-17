import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AccentThemeProvider } from '../contexts/AccentThemeContext';
import Contact from './Contact';

const renderContact = (initialEntry = '/') =>
  render(
    <MemoryRouter initialEntries={[initialEntry]}>
      <AccentThemeProvider>
        <Contact />
      </AccentThemeProvider>
    </MemoryRouter>
  );

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
    expect(getByText('info@impacttech.gr')).toBeInTheDocument();
  });

  it('uses clickable tel and mailto links', () => {
    const { getByRole } = renderContact();

    expect(getByRole('link', { name: '+30 211 006 8114' })).toHaveAttribute('href', 'tel:+302110068114');
    expect(getByRole('link', { name: '+30 697 385 8321' })).toHaveAttribute('href', 'tel:+306973858321');
    expect(getByRole('link', { name: 'info@impacttech.gr' })).toHaveAttribute('href', 'mailto:info@impacttech.gr');
  });

  it('fires the Google Ads conversion event on the contact hash route', () => {
    const gtag = vi.fn();
    Object.assign(window, { gtag });

    renderContact('/#contact');

    expect(gtag).toHaveBeenCalledWith('event', 'conversion_event_contact_2', {});
  });

  it('does not fire the Google Ads conversion event without the contact hash', () => {
    const gtag = vi.fn();
    Object.assign(window, { gtag });

    renderContact('/');

    expect(gtag).not.toHaveBeenCalled();
  });
});
