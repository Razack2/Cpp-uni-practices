import PricingModal from "@/app/components/PricingModal";

export default function PricingModalPage() {
  return (
    <div>
       <PricingModal isOpen={false} onClose={function (): void {
              throw new Error("Function not implemented.");
          } } />
    </div>
  );
}