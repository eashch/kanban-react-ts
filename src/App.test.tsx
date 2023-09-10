import { render } from '@testing-library/react';
import App from './App';

test('App', () => {
    const {container} = render(<App />);

    const kanban = container.getElementsByClassName('kanban');
    expect(kanban.length).toBe(1);

    const footer = container.getElementsByClassName('footer');
    expect(footer.length).toBe(1);

    const header = container.getElementsByClassName('header');
    expect(header.length).toBe(1);
});
