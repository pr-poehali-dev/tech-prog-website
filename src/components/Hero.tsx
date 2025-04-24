
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-primary/10 to-secondary/10 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Качественная разработка программного обеспечения
            </h1>
            <p className="text-lg text-muted-foreground">
              Мы создаем инновационные технологические решения для бизнеса любого масштаба
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg">Связаться с нами</Button>
              <Button size="lg" variant="outline">
                Узнать больше
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-full max-w-md h-80 bg-primary/5 rounded-lg shadow-lg flex items-center justify-center relative overflow-hidden">
              <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-primary/20 rounded-full"></div>
              <div className="absolute top-12 -left-12 w-40 h-40 bg-secondary/20 rounded-full"></div>
              <div className="relative z-10 text-center p-6">
                <div className="text-5xl mb-4">💻</div>
                <h3 className="text-2xl font-semibold mb-2">ООО "Технология программирования"</h3>
                <p className="text-muted-foreground">Ваш надежный партнер в мире IT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
