import Sidebar from "../components/sideBar/SideBar";
import { atom } from "jotai";
import TopBar from "../components/topBar/TopBar";
import Footer from "../components/footer/footer";
import Content from "../components/content/Content";
import '../../styles/globals.css'
const openAtom = atom(true);
export const toggleOpen = atom(
  (get) => get(openAtom),
  (get, set, newValue) => {
    set(openAtom, newValue);
  }
);
const collapsedAtom = atom(true);
export const toggleCollapsed = atom(
  (get) => get(collapsedAtom),
  (get, set, newValue) => {
    set(collapsedAtom, newValue);
  }
);
const selectedInit = atom("dashboard");
export const selectedAtom = atom(
  (get) => get(selectedInit),
  (get, set, newValue) => {
    set(selectedInit, newValue);
  }
);
const pathInit = atom("dashboard")
export const pathAtom = atom(
  (get) => get(pathInit),
  (get, set, newValue) => {
    set(pathInit, newValue);
  }
)
function MyApp({ Component, pageProps }) {
  return (
    <>
      <TopBar />
      <Sidebar />
      <Content>
        <Component {...pageProps} />
      </Content>
      <Footer />
    </>
  );
}

export default MyApp;
