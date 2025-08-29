"use client"; // make page a client component

import TopNavbar from '../../components/TopNavbar';
import Donate from '../../components/Donate';
import Footer from '../../components/Footer';

export default function DonatePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopNavbar />
      <Donate />
      <Footer />
    </div>
  );
}
