import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('Footer', () => {
    render(<Footer 
        activeTasks={5}
        finishedTasks={10}
        author={'somebody'}
        year={2000}
    />);
    const activeTasks = screen.getByText(/Active tasks: 5/i);
    expect(activeTasks).toBeInTheDocument();

    const finishedTasks = screen.getByText(/Finished tasks: 10/i);
    expect(finishedTasks).toBeInTheDocument();

    const yearAuthor = screen.getByText(/Kanban board by somebody, 2000/i);
    expect(yearAuthor).toBeInTheDocument();
});
