import { createUseStyles } from "react-jss";
import * as FaIcons from "react-icons/fa";
import { useAtom } from "jotai";
import { toggleCollapsed, toggleOpen } from "../../pages/_app";
const useStyle = createUseStyles({
  topbar: {
    left: "0px",
    width: "85%",
    marginLeft: "240px",
    top: "0px",
    zIndex: 10000,
    backgroundColor: "#ffffff",
    position: "fixed",
    boxShadow: "0px 10px 10px -15px #111",
    height: "70px",
    display: "flex",
    alignItems: "center",
    transition: 'ease-in 200ms',
    justifyContent:'space-between',
    "& button": {
      border: "none",
      backgroundColor: "white",
      padding: "10px",
      color: "gray",
      cursor: "pointer",
    },
    "& button:hover": {
      border: "none",
      backgroundColor: "white",
      padding: "10px",
      color: "#ff9",
    },
  },
  topbarMini: {
    left: "0px",
    width: "95%",
    marginLeft: "70px",
    top: "0px",
    zIndex: 10000,
    backgroundColor: "#ffffff",
    position: "fixed",
    boxShadow: "0px 10px 10px -15px #111",
    height: "70px",
    display: "flex",
    alignItems: "center",
    justifyContent:'space-between',
    transition: 'ease-out 200ms',
    "& button": {
      border: "none",
      backgroundColor: "white",
      padding: "10px",
      color: "gray",
      cursor: "pointer",
    },
    "& button:hover": {
      border: "none",
      backgroundColor: "white",
      padding: "10px",
      color: "#ff9",
    },
  },
  imgProfile: {
    borderRadius: '50%',
    height: "36px",
    marginRight: '50px',
    left: 0,
    width: "36px",
    border: "2px solid #edf0f0",
  },
});
export default function TopBar() {
  const classes = useStyle();
  const [collapsed, setCollapsed] = useAtom(toggleCollapsed);
  const [open, setOpen] = useAtom(toggleOpen);
  const onClickHandler = () => {
    setCollapsed(!collapsed);
    setOpen(false);
  };
  return (
    <div className={collapsed ? classes.topbar : classes.topbarMini}>
      <button onClick={onClickHandler}>
        <FaIcons.FaBars size={24} />
      </button>
      <img
        src="https://t.me/i/userpic/320/1eHgbs7Y3x_ad1gdo6yKx21bVZPCv8fMZHiMpnE6FXo.jpg"
        alt="user-img"
        className={classes.imgProfile}
      />
    </div>
  );
}
