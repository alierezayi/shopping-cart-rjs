import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="py-2 text-slate-500 text-sm">
      <p className="text-center">
        Developed by:{" "}
        <Link
          to="https://github.com/alierezayi"
          target="blank"
          className="underline text-black"
        >
          Ali Rezaei
        </Link>{" "}
        with ❤️
      </p>
    </footer>
  );
}

export default Footer;
