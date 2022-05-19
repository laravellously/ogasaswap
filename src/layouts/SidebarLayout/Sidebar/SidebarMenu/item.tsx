import {
  FC,
  ReactNode,
  useState,
  useContext,
  useMemo,
  forwardRef,
} from "react";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
  useMatch,
  useResolvedPath
} from "react-router-dom";
import clsx from "clsx";
import { SidebarContext } from "@/contexts/SidebarContext";
import PropTypes from "prop-types";
import { Button, Collapse, ListItem } from "@mui/material";

import ExpandLessTwoToneIcon from "@mui/icons-material/ExpandLessTwoTone";
import ExpandMoreTwoToneIcon from "@mui/icons-material/ExpandMoreTwoTone";

interface SidebarMenuItemProps {
  children?: ReactNode;
  link: string;
  icon?: any;
  badge?: string;
  open?: boolean;
  active?: boolean;
  name: string;
}

const SidebarMenuItem: FC<SidebarMenuItemProps> = ({
  children,
  link,
  icon: Icon,
  badge,
  open,
  active,
  name,
  ...rest
}) => {
  const [menuToggle, setMenuToggle] = useState<boolean>(false);

  const { toggleSidebar } = useContext(SidebarContext);

  const toggleMenu = (): void => {
    setMenuToggle((Open) => !Open);
  };

  let resolved = useResolvedPath(link);
  let match = useMatch({ path: resolved.pathname, end: true });

  if (children) {
    return (
      <ListItem component="div" className="Mui-children" key={name} {...rest}>
        <Button
          className={clsx({ "Mui-active": menuToggle })}
          startIcon={Icon && <Icon />}
          endIcon={
            menuToggle ? <ExpandLessTwoToneIcon /> : <ExpandMoreTwoToneIcon />
          }
          onClick={toggleMenu}
        >
          {name}
        </Button>
        <Collapse in={menuToggle}>{children}</Collapse>
      </ListItem>
    );
  }

  const renderLink = useMemo(
    () =>
      forwardRef<HTMLAnchorElement, Omit<RouterLinkProps, "to">>(function Link(
        itemProps,
        ref
      ) {
        return (
          <RouterLink to={link} ref={ref} {...itemProps} role={undefined} />
        );
      }),
    [link]
  );

  return (
    <ListItem component="div" key={name} {...rest}>
      <Button
        className={ match ? "Mui-active" : "none" }
        component={renderLink}
        onClick={() => toggleSidebar()}
        // activeclassname="Mui-active"
        startIcon={Icon && <Icon />}
      >
        {name}
      </Button>
    </ListItem>
  );
};

SidebarMenuItem.propTypes = {
  children: PropTypes.node,
  active: PropTypes.bool,
  link: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
  badge: PropTypes.string,
  open: PropTypes.bool,
  name: PropTypes.string.isRequired,
};

SidebarMenuItem.defaultProps = {
  open: false,
  active: false,
};

export default SidebarMenuItem;
