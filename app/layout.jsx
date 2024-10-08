import { Poppins } from "next/font/google"
import "./globals.css"

//components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";


const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500", "400", "700", "800"],
  variable: "--f0nt-poppins",
});

export const metadata = {
  title: "Petebuks portfolio",
  description: "A Web Developer, Web Designer and Content creator",
  icons: {
    icon: '/assets/images/petebuks_transparent.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className= {`${poppins.variable}`}>
      <div className="bg_gradient"></div>
      <Header />
      <PageTransition>
      <div className="gradient_1"></div> 
        {children}
      </PageTransition>
      </body>
    </html>
  );
}
