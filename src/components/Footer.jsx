export default function Footer(){
    return (
        <footer
            className="footer"
            style={{
                background: "#232629",
                color: "#babfc4",
                padding: "12px 0",
                fontSize: "13px",
                position: "fixed",
                left: 0,
                bottom: 0,
                width: "100%",
                textAlign: "center",
                zIndex: 100
            }}
        >
            &copy; {new Date().getFullYear()} Aryan College, All rights reserved
        </footer>
    );
}