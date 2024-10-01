import React from 'react';
import Menubar from "@/components/NavBar/menubar";
import Footer from "@/components/Footer/Footer";


const addTailwind = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      />
    </>
  );
};

export const metadata = {
  title:{
    template: '%s | Next js',
  default:'Next js'},
  }
  

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {addTailwind()}
      </head>
      <body className="bg-gray-100">
       <Menubar />
       <section className="my-6 ">
        {children}
       </section>
        <Footer />
      </body>
    </html>
  );
}