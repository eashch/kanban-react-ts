import { fireEvent, render, screen } from '@testing-library/react';
import Header from './Header';

test('Header', () => {
    const {container} = render(<Header 
    />);

    const title = screen.getByText(/Awesome Kanban Board/i);
    expect(title).toBeInTheDocument();

    const profileMenuBeforeOpen = container.getElementsByClassName(
        'profile-menu');
    expect(profileMenuBeforeOpen.length).toBe(0);

    const openProfileMenuButton = container.getElementsByClassName(
        'profile__button-open-menu');
    expect(openProfileMenuButton.length).toBe(1);
    fireEvent.click(openProfileMenuButton[0]);

    const profileMenuAfterOpen = container.getElementsByClassName(
        'profile-menu');
    expect(profileMenuAfterOpen.length).toBe(1);
});
