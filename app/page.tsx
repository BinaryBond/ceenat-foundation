import Image from "next/image";
import Button from "../components/ui/button";
import { ArrowRight} from "lucide-react";

export default function Home() {
  return (
    <main className="pt-20 min-h-screen">
      <div className="py-6">
        <div></div>
        <div>
          <div></div>
          <ul>
            <li>Lifting Lives with Love and Action</li>
            <li>
              Empowering communities through compassion and hands-on support to
              create lasting change and uplift lives with love and action.
            </li>
            <Button text="Get Started" icon={<ArrowRight className="w-5 h-5" />} />
          </ul>
        </div>
      </div>
    </main>
  );
}
