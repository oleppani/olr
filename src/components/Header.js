import {
  AppBar,
  Toolbar,
 // Typography,
  makeStyles,
  IconButton,
  Drawer,
  Link,
  MenuItem,
} from "@material-ui/core"
import logoa from '../pics/index.png';
import MenuIcon from "@material-ui/icons/Menu"
import HomeIcon from '@material-ui/icons/Home'
/*/import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import AccountTreeIcon from '@material-ui/icons/AccountTree'
import InsertCommentIcon from '@material-ui/icons/InsertComment'
import PeopleIcon from '@material-ui/icons/People'
import WorkIcon from '@material-ui/icons/Work'
import FeedbackIcon from '@material-ui/icons/Feedback'
import ContactMailIcon from '@material-ui/icons/ContactMail'
*/
//import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import React, { useState, useEffect } from "react"
import { Link as RouterLink } from "react-router-dom"
//import ico from "../pics/icon.png"


const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#000000",
    paddingRight: "3px",
    paddingLeft: "3px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#66A5AD",
    textAlign: "left",
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 200,
    size: "6px",
    marginLeft: "2px",
    backgroundColor: "#333333",
    color:"#C4DFE6",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "10px 10px",
  },
}))

export default function Header() {
  // eslint-disable-next-line
  const { header, logo, menuButton, toolbar, drawerContainer } = useStyles()

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;
  const headersData = [
    
    {
      label: '',
      href: "/",
      icon: <HomeIcon />
    },
    {
      label: 'JavaScript for React',
      href: "/jfr",
      icon: ''
    },
    {
      label: 'Functional programming with JavaScript',
      href: "/fpwj",
      icon: ''
    },
    {
      label: 'How React works',
      href: "/hrw",
      icon: ''
    },
    {
      label: 'React with JSX',
      href: "/rwj",
      icon: ''
    },
    {
      label: 'React state management',
      href: "/rsm",
      icon: ''
    },
    {
      label: 'Enhancing components with hooks',
      href: "/ecwh",
      icon: ''
    },
    {
      label: 'Incorporating data',
      href: "/id",
      icon: ''
    },
    {
      label: 'Suspense',
      href: "/sus",
      icon: ''
    },
    {
      label: 'React testing',
      href: "/rt",
      icon: ''
    },
    {
      label: 'React router',
      href: "/rr",
      icon: ''
    },
    {
      label: 'React and the server',
      href: "/rats",
      icon: ''
    }
    /*{
      label: '',
      href: "/logout",
      icon: <ExitToAppIcon />
    },*/
  ]
  
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }))
    }

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness())
  }, [])

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
          <div style={{position: 'absolute', left: '1%', top: '10px'}  }>{Logo}</div>
          <div style={{position: 'absolute', left: '6%', top: '35px',color: '#D1DBE2', fontSize: '20px', fontFamily:'Arial black' }  }>Osmo Learning React</div>
        <div align='right' style={{position: 'absolute', right: '10px',top: '3px'}  }>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
         <div style={{position: 'absolute', left: '10px',color: '#C1DBE2'}  }><MenuIcon /></div> 
        </IconButton>
          <div style={{position: 'absolute', left: '20%', top: '10px'}  }>{Logo}</div>
          <div style={{position: 'absolute', left: '31%', top: '18px',color: '#D1DBE2', fontSize: '20px', fontFamily:'Arial black' }  }>Osmo Learning React</div>
        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>

        
        <div align='right' style={{position: 'absolute', right: '10px',}  }>
        <IconButton
          {...{
            color: "inherit",
            to: '/',
            component: RouterLink,
            className: menuButton,
            size: "small"
          }}
        >
          <HomeIcon />
        </IconButton></div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link key='1' {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      )
    })
  }

  const Logo = (
    <div>
    <img src={logoa} alt='Osmo Learning React'/>
    </div>
  )

  const getMenuButtons = () => {
    return headersData.map(({ label, href, icon }) => {
      return (
        <IconButton key='2'
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
            className: menuButton,
            size: "small"
          }}
        >
          {icon}
          <div>{label}</div>
        </IconButton>
      );
    });
  };

  return (
    <header>
      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}