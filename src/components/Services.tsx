
import { 
  Code, 
  Database, 
  Smartphone 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Разработка ПО",
    description: "Создание надежных программных решений с применением современных технологий",
    icon: Code,
  },
  {
    title: "Мобильные приложения",
    description: "Разработка приложений для iOS и Android с интуитивно понятным интерфейсом",
    icon: Smartphone,
  },
  {
    title: "Базы данных",
    description: "Проектирование и оптимизация баз данных для эффективного хранения информации",
    icon: Database,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Наши услуги</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Мы предлагаем широкий спектр услуг для удовлетворения различных потребностей в области информационных технологий
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="text-primary h-6 w-6" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span> Высокое качество кода
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span> Современные технологии
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span> Техническая поддержка
                  </li>
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
