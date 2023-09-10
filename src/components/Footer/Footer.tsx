import '../../index.css';
import { IFooterProps } from '../../types/interfaces';
import './style.css';

function Footer(footerProps: IFooterProps) {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                <div className='footer-left-block'>
                    <h2 className='text footer-text'>
                        {`Active tasks: ${footerProps.activeTasks}`}
                    </h2>
                    <h2 className='text footer-text'>
                        {`Finished tasks: ${footerProps.finishedTasks}`}
                    </h2>
                </div>
                <h2 className='text footer-text'>
                    {`Kanban board by ${footerProps.author}, ${footerProps.year}`}
                </h2>
            </div>
        </footer>
    );
}

export default Footer;