import { useAtom } from "jotai";
import * as FaIcons from "react-icons/fa";
import { createUseStyles } from "react-jss";
import { pathAtom, selectedAtom, toggleCollapsed } from "../../pages/_app";
const useStyle = createUseStyles({
  headerContent: {
    boxShadow: "1px 1px 30px rgb(0 0 0 / 50%)",
    display: "flex",
    color: "red",
    width: '82%',
    marginLeft: "240px",
    marginTop: "70px",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    height: "40px",
    transition: "ease-in 200ms",
  },
  headerContentMini: {
    boxShadow: "1px 1px 30px rgb(0 0 0 / 50%)",
    display: "flex",
    color: "red",
    width: '94%',
    marginLeft: "70px",
    transition: "ease-out 200ms",
    marginTop: "70px",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    height: "40px",
  },
});
export default function HeaderContent({ path, title }) {
  const pathPharse = path.split("/");
  const [collapsed] = useAtom(toggleCollapsed)
  const classes = useStyle()
  return (
    <div className={collapsed ? classes.headerContent : classes.headerContentMini}>
      <h1>{title}</h1>
      <span>
        <FaIcons.FaHome style={{ marginRight: "5px" }} />
        <span>Home {" > "}</span>
        {pathPharse.map((it, index) => {
          if (index === pathPharse.length) {
            return (
              <span key={index}>
                {it}
                {" > "}
              </span>
            );
          } else {
            return <span key={index}>{it}</span>;
          }
        })}
      </span>
    </div>
  );
}
