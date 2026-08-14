import { Button } from "@/components/ui/Button";

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[95] border-t border-line bg-white/92 px-5 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl sm:hidden">
      <Button href="#contact" block>
        無料相談はこちら
      </Button>
    </div>
  );
}
