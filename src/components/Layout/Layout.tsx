import './style.css';
import { ILayoutProps } from '../../types/interfaces';

export const Layout = ({ 
    HeaderComponent, ContentComponent, FooterComponent 
}: ILayoutProps) => {

return (
    <div className="layout">
        {HeaderComponent()}
        {ContentComponent()}
        {FooterComponent()}
    </div>
);
}

export default Layout;