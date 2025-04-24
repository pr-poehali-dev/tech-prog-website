
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary text-primary-foreground font-bold">ТП</div>
              <span className="font-semibold text-lg">Технология программирования</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Качественные технологические решения для вашего бизнеса с 2010 года
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Компания</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-sm text-muted-foreground hover:text-primary">О нас</a></li>
              <li><a href="#services" className="text-sm text-muted-foreground hover:text-primary">Услуги</a></li>
              <li><a href="#advantages" className="text-sm text-muted-foreground hover:text-primary">Преимущества</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Карьера</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Правовая информация</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Условия использования</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Политика конфиденциальности</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Лицензии</a></li>
            </ul>
          </div>
          
          <div id="contacts">
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  123456, г. Москва, ул. Примерная, д. 1, офис 123
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+74951234567" className="text-sm text-muted-foreground hover:text-primary">
                  +7 (495) 123-45-67
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:info@tech-prog.ru" className="text-sm text-muted-foreground hover:text-primary">
                  info@tech-prog.ru
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-muted-foreground/10">
          <p className="text-center text-sm text-muted-foreground">
            © 2023 ООО "Технология программирования". Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
