import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="min-h-[calc(100vh-213px)] flex justify-center items-center">
      <Button asChild>
        <Link to="/products">Go to products page</Link>
      </Button>
    </div>
  );
}

export default HomePage;
