import "../globals.css";
import { ToastContainer } from "@/components/clients/nextToast/toastContainer";
import "react-toastify/dist/ReactToastify.css";
import type { Metadata } from "next";
import { AuthContextProvider } from "@/context/authContext";
import ReactQueryProvider from "@/components/clients/providers/reactQueryProvider";
import HomePageHeader from "@/components/Header/homePageHeader";





export const metadata: Metadata = {
  title: "Discount App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  
  return (
    <html lang="en">
      <body className="overflow-x-hidden inset-0 w-screen bg-sky-100">
        <AuthContextProvider>
          <ReactQueryProvider >
            <HomePageHeader/>
        {children}
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        </ReactQueryProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}