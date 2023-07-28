import Image from "next/image";
import { Inter } from "next/font/google";
import { DatePicker } from "antd";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="text-blue-500">
      hello next js <DatePicker />;
    </div>
  );
}
