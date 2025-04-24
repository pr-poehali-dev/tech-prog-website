
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary text-primary-foreground font-bold">ТП</div>
          <span className="font-semibold text-lg">Технология программирования</span>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop menu */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-sm font-medium hover:text-primary">О компании</a>
          <a href="#services" className="text-sm font-medium hover:text-primary">Услуги</a>
          <a href="#advantages" className="text-sm font-medium hover:text-primary">Преимущества</a>
          <a href="#contacts" className="text-sm font-medium hover:text-primary">Контакты</a>
        </nav>
        
        <div className="hidden md:block">
          <Button>Обратная связь</Button>
        </div>
        
        {/* Mobile menu overlay */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-16 bg-background z-30 flex flex-col p-4">
            <nav className="flex flex-col space-y-4 py-4">
              <a 
                href="#about" 
                className="px-4 py-2 text-lg hover:bg-muted rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                О компании
              </a>
              <a 
                href="#services" 
                className="px-4 py-2 text-lg hover:bg-muted rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Услуги
              </a>
              <a 
                href="#advantages" 
                className="px-4 py-2 text-lg hover:bg-muted rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Преимущества
              </a>
              <a 
                href="#contacts" 
                className="px-4 py-2 text-lg hover:bg-muted rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Контакты
              </a>
            </nav>
            <div className="mt-4">
              <Button className="w-full">Обратная связь</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
