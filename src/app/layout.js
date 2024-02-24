import { Nunito, Quicksand } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapClient from "../../Effects/BootstrapClients";
import "./globals.css";
import "./responsive.css";

const nubito = Nunito({
   subsets: ["latin"] ,
   weight:['300', '500' , '600', '700', '800', '900', '1000'],
   variable:'--font-nunito',
  });

  const quicksand = Quicksand({
    subsets: ["latin"] ,
    weight:['300', '400', '500', '600', '700'],
    variable:'--font-quiksand',
   });

export const metadata = {
  title: "VIJAY KALE | Frontend Web Developer",
  description: "My Portfolio",
  icons:{
    icon:['/logo/logo.png?v=4'] ,
    apple:['/logo/logo.png?v=4'],
    shortcut:['/logo/logo.png']
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nubito.variable} ${quicksand.variable}`}> {children}
      <BootstrapClient/>
      </body>
    </html>
  );
}
