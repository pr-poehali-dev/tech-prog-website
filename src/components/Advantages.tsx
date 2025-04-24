
import { Shield, Clock, Users } from "lucide-react";

const advantages = [
  {
    title: "Надежность",
    description: "Мы гарантируем высокое качество и надежность наших решений",
    icon: Shield,
  },
  {
    title: "Оперативность",
    description: "Соблюдаем сроки и оперативно реагируем на запросы клиентов",
    icon: Clock,
  },
  {
    title: "Опытная команда",
    description: "Наши специалисты обладают обширным опытом в разработке ПО",
    icon: Users,
  },
];

const Advantages = () => {
  return (
    <section id="advantages" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Наши преимущества</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Почему клиенты выбирают именно нас для реализации своих проектов
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {advantages.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <item.icon className="text-primary h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-primary/5 rounded-lg">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Готовы начать проект?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Свяжитесь с нами сегодня, чтобы обсудить ваши идеи и требования. 
              Мы поможем воплотить их в жизнь.
            </p>
            <div className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 cursor-pointer">
              Заказать консультацию
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
