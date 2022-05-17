import { LayoutType } from "./layout.interface";
import { Header, Section, Container, CodeSection } from "./layout.style";

const Layout: LayoutType = ({ children }) => <>{children}</>;

Layout.Header = Header;
Layout.Section = Section;
Layout.Container = Container;
Layout.CodeSection = CodeSection;

export default Layout;
