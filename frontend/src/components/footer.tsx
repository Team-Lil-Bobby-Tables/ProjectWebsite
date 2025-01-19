/**
 * Put extra information at the bottom of the page
 * @returns Footer component
 */
const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        height: "50px",
        backgroundColor: "#333",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        display: "flex",
        zIndex: 100,
        fontFamily: "monospace",
      }}
    >
      © 2025 Lil' Bobby Tables
    </footer>
  );
};

export default Footer;
