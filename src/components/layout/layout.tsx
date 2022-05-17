import { LayoutType } from "./layout.interface";
import { Header, Section, Container } from "./layout.style";

const Layout: LayoutType = ({ children }) => <>{children}</>;

Layout.Header = Header;
Layout.Section = Section;
Layout.Container = Container;

export default Layout;
