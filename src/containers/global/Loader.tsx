import { RotatingTriangles } from "react-loader-spinner";
function Loader() {
  return (
    <div className="w-full min-h-[calc(100vh-213px)] flex justify-center items-center">
      <RotatingTriangles width="100px" />
    </div>
  );
}

export default Loader;
