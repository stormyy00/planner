import "@/styles/globals.css";
import Session from "@/components/Session";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/server/auth";
import Navigation from "@/components/Navigation"

export const metadata: Metadata = {
  title: "Course",
  description: "Course Planner Built with the modern Tech",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

type Props = {
  children: React.ReactNode;
};

const RootLayout = async ({ children }: Props) => {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
      <div className="h-full w-full">
        <Session session={session}>
          <Navigation/>
          {children}
          </Session>
          </div>
      </body>
    </html>
  );
};

export default RootLayout;
