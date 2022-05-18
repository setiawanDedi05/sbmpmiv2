import { useAtom } from "jotai";
import { createUseStyles } from "react-jss";
import { pathAtom, selectedAtom, toggleCollapsed } from "../../pages/_app";
import HeaderContent from "./HeaderContent";

const useStyle = createUseStyles({
  content: {
    borderTop: "2px solid #F39C31",
    boxShadow: "0px 0px 2px rgb(0 0 0 / 50%)",
    minHeight: '500px',
    marginTop: "40px",
    width: "73%",
    transition: "ease-in 200ms",
    marginLeft: "300px",
    padding: '30px',
    marginBottom: '200px'
  },
  contentMini: {
    borderTop: "2px solid #F39C31",
    boxShadow: "0px 0px 2px rgb(0 0 0 / 50%)",
    padding: '30px',
    width: "80%",
    minHeight: '500px',
    marginTop: "40px",
    transition: "ease-out 200ms",
    marginLeft: "160px",
    marginRight: "200px",
    marginBottom: '200px'
  },
});
export default function Content({ children }) {
  const classes = useStyle();
  const [collapsed] = useAtom(toggleCollapsed);
  const [path] = useAtom(pathAtom)
  const [selected] = useAtom(selectedAtom)
  return (
    <>
    <HeaderContent title={selected} path={path} />
      <div className={collapsed ? classes.content : classes.contentMini}>
        {children}
      </div>
    </>
  );
}
