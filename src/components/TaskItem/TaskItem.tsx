import '../../index.css';
import { ITaskFolderItem } from '../../types/interfaces';
import './style.css';
import { useNavigate } from 'react-router-dom';

function TaskItem(taskItem: ITaskFolderItem) {
    const navigate = useNavigate();

    return (
        <button className='text button task-item'
            onClick={() => navigate(`../tasks/${taskItem.id}`)}
        >
            {taskItem.title}
        </button>
    );
}

export default TaskItem;