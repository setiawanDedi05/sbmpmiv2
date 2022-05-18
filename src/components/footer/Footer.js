import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
  footer: {
    position: "fixed",
    width: "100%",
    height: '30px',
    bottom: 0,
    left: 0,
    borderTop: "1px solid rgba(0, 0, 0, 0.05)",
    background: "#fff",
    padding: "5px",
    color: "#444",
    borderTop: "1px solid #eee",
    zIndex: 1000,
  },
});
export default function Footer() {
  const classes = useStyle();
  return (
    <div className={classes.footer}>
      Footer
    </div>
  );
}
