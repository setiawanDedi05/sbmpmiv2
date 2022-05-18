import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { selectedAtom, toggleCollapsed, toggleOpen } from "../../pages/_app";

export default function SubMenu({ subMenu, parent }) {
  const [open] = useAtom(toggleOpen);
  const [, setCollapsed] = useAtom(toggleCollapsed)
  const [selected, setSelected] = useAtom(selectedAtom);
  const router = useRouter()
  const clickHandler = (url, title, hasChildrens) => {
    setSelected(title);
    hasChildrens ? setOpen(!open) : null;
    setCollapsed(true);
    router.push(url ? url : "/admin/dashboard");
  };
  if (open && selected === parent) {
    return (
      <ul>
        {subMenu.map((sub, i) => {
          return (
            <li key={i}>
              <button onClick={() => clickHandler(sub.path, sub.title)}>
                {sub.icon}
                <span style={{ marginLeft: "16px" }}>{sub.title}</span>
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}
