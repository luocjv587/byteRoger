import "./Footer.css";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap site-footer__bar">
        <p>© {new Date().getFullYear()} ByteRoger</p>
        <a
          href="https://beian.miit.gov.cn/"
          target="_blank"
          rel="noreferrer"
        >
          沪ICP备17004502号-4
        </a>
      </div>
    </footer>
  );
}
