import React from "react";
import { SidebarData } from "./SideBarData";
import { createUseStyles } from "react-jss";
import { useRouter } from "next/router";
import SubMenu from "./SubMenu";
import { useAtom } from "jotai";
import { pathAtom, selectedAtom, toggleCollapsed, toggleOpen } from "../../pages/_app";
import PlusOrMinus from "./IconPlusOrMinus";
const useStyles = createUseStyles({
  sidebar: {
    height: "100vh",
    width: "240px",
    position: "fixed",
    overflowY: 'auto',
    top: "70px",
    left: 0,
    zIndex: 1,
    backgroundColor: "#ca2f28",
    transition: "ease-in 200ms",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.15)",
    "& ul": {
      margin: 0,
      padding: 0,
      transition: "ease-in 200ms",
      width: "240px ",
    },
    "& ul li": {
      marginLeft: 0,
      listStyleType: "none",
    },
    "& ul li button": {
      backgroundColor: "white",
      transition: "ease-in 200ms",
      width: "240px",
      margin: 0,
      border: 0,
      fontWeight: "normal",
      cursor: "pointer",
      textDecoration: "none",
      lineHeight: 2,
      position: "relative",
    },
    "& ul > li > button": {
      backgroundColor: "#ca2f28",
      display: "inline-flex",
      alignItems: "center",
      marginLeft: 0,
      color: "white",
      width: "240px",
      padding: "10px 20px",
    },
    "& ul > li > button:hover": {
      backgroundColor: "#fff",
      color: "#000",
    },
    "& ul > li > ul > li > button": {
      marginLeft: "20px",
      width: "220px",
    },
  },
  sidebarMini: {
    transition: "ease-out 200ms",
    height: "100vh",
    width: "70px",
    position: "fixed",
    cursor: "pointer",
    top: '70px',
    left: 0,
    zIndex: 1,
    backgroundColor: "#ca2f28",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.15)",
    "& ul": {
      margin: 0,
      padding: 0,
      width: "100px ",
      transition: "ease-out 200ms",
    },
    "& ul li": {
      marginLeft: 0,
      listStyleType: "none",
    },
    "& ul li button": {
      backgroundColor: "white",
      width: "70px",
      margin: 0,
      border: 0,
      fontWeight: "normal",
      textDecoration: "none",
      lineHeight: 2,
      position: "relative",
    },
    "& ul > li > button": {
      backgroundColor: "#ca2f28",
      display: "inline-flex",
      alignItems: "center",
      marginLeft: 0,
      color: "white",
      width: "70px",
      transition: "ease-out 200ms",
      padding: "10px 20px",
    },
    "& ul > li > button:hover": {
      backgroundColor: "#fff",
      color: "#000",
    },
    "& ul > li > ul > li > button": {
      marginLeft: "20px",
      width: "70px",
      transition: "ease-out 200ms",
    },
  },
  userProfile: {
    backgroundColor: "#B33321",
    display: "flex",
    paddingTop: "15px",
    paddingBottom: "15px",
  },
  headerSideBar: {
    backgroundColor: "white",
    fontSize: "24px",
    width: "240px",
    float: "left",
    position: "fixed",
    top: "0px",
    zIndex: 10000,
    letterSpacing: "0.05em",
    fontWeight: 800,
    textTransform: "uppercase",
    lineHeight: "70px",
    fontFamily: "Nunito",
    display: "flex",
    justifyContent: "center",
    boxShadow: "0px 10px 10px -15px #111",
    alignItems: "center",
    height: "50px",
    textDecoration: "none",
    padding: "10px",
    fontFamily: "Nunito",
  },
  headerSideBarMini: {
    backgroundColor: "white",
    fontSize: "24px",
    width: "100px",
    float: "left",
    position: "fixed",
    top: "0px",
    zIndex: 10000,
    letterSpacing: "0.05em",
    fontWeight: 800,
    textTransform: "uppercase",
    lineHeight: "70px",
    fontFamily: "Nunito",
    justifyContent: "center",
    boxShadow: "0px 10px 10px -15px #111",
    height: "50px",
    textDecoration: "none",
    padding: "10px",
    fontFamily: "Nunito",
  },
  imageProfile: {
    borderRadius: "50%",
    marginTop: "20px",
    marginLeft: "20px",
    marginRight: "15px",
    border: "2px solid #ffffff",
    height: "54px",
    width: "54px",
  },
});
export default function Sidebar() {
  const [open, setOpen] = useAtom(toggleOpen);
  const [, setSelected] = useAtom(selectedAtom);
  const [collapsed, setCollapsed] = useAtom(toggleCollapsed);
  const [, setPath] = useAtom(pathAtom)
  const classes = useStyles();
  const router = useRouter();
  const clickHandler = (url, title, hasChildrens) => {
    setSelected(title);
    hasChildrens ? setOpen(!open) : setPath(url);
    setCollapsed(true);
    router.push(url ? url : "/admin/dashboard");
  };
  return (
    <div className={collapsed ? classes.sidebar : classes.sidebarMini}>
      <a href="#" className={collapsed ? classes.headerSideBar : classes.headerSideBarMini}>
        <img
          src="https://cbs.pmi.or.id/konfig/PMI-logo.png"
          style={{ width: "46px", marginTop: "-5px", borderRadius: "16%" }}
          height="45"
        />
        {collapsed && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "baseline",
            }}
          >
            <span
              style={{
                color: "#d40000ff",
                marginRight: "5px",
                marginLeft: "5px",
              }}
            >
              SBM
            </span>
            <span style={{ color: "#525252" }}>
              PMI<sup>&reg;</sup>
            </span>
          </div>
        )}
      </a>
      {collapsed && (
        <div className={classes.userProfile}>
          <div>
            <img
              title="Dedi Setiawan"
              src="https://t.me/i/userpic/320/1eHgbs7Y3x_ad1gdo6yKx21bVZPCv8fMZHiMpnE6FXo.jpg"
              alt="title"
              className={classes.imageProfile}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              color: "white",
              lineHeight: "25px",
            }}
          >
            <a
              href="#"
              style={{
                color: "white",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Dedi Setiawan
            </a>
            Relawan
            <span style={{ color: "#e9e0d2" }}>SUMBERAGUNG</span>
            <span style={{ color: "#e9e0d2", fontSize: "12px" }}>
              Klego Boyolali
            </span>
          </div>
        </div>
      )}
      <ul>
        {SidebarData.map((items, index) => {
          return (
            <li key={index}>
              <button
                onClick={() =>
                  clickHandler(
                    items.path,
                    items.title,
                    items.childrens ? true : false,
                  )
                }
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {collapsed ? (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    {items.icon}
                    <span style={{marginLeft: '10px'}}>{items.title}</span>
                  </div>
                ) : (
                  <div>{items.icon}</div>
                )}
                {items.childrens && <PlusOrMinus parent={items.title} />}
              </button>
              {items.childrens && (
                <SubMenu subMenu={items.childrens} parent={items.title} />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
