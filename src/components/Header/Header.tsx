import '../../index.css';
import './style.css';
import profilePictureDefault from '../../icons/profile-picture-default.svg';
import profileArrow from '../../icons/profile-arrow.svg';
import { useState } from 'react';

function ProfileMenu (): JSX.Element {
    return (
        <div className='profile-menu'>
            <div className='profile-menu-rect'></div>
            <div className='profile-menu-container'>
                <ul className='profile-menu-container__list'>
                    <li className='text profile-menu-container__option'>
                        Profile
                    </li> 
                    <li className='text profile-menu-container__option'>
                        Log out
                    </li>
                </ul>
            </div>
        </div>
    );
}

function Header() {
    const [profileMenuOpen, setProfileMenuOpen] = useState(false);

    const openProfileMenu = (): JSX.Element | null => {
        return (profileMenuOpen ? <ProfileMenu /> : null);
    };

    return (
        <header className='header'>
            <div className='header-container'>
                <h1 className='text header-container__title'>
                    Awesome Kanban Board
                </h1>
                <button className='button profile__button-open-menu'
                    onClick={() => {
                        setProfileMenuOpen(!profileMenuOpen);
                    }}
                >
                    <img className='profile__picture' src={profilePictureDefault} alt='Profile picture' />
                    <img className={'profile__icon-arrow_' + (profileMenuOpen ? 'up' : 'down')} src={profileArrow} alt='Arrow' />
                    {openProfileMenu()}
                </button>
            </div>
        </header>
    );
}

export default Header;