import { RotatingTriangles } from "react-loader-spinner";
function Loader() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <RotatingTriangles width="100px" />
    </div>
  );
}

export default Loader;
