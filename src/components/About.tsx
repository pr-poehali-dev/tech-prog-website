
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">О компании</h2>
            <p className="text-muted-foreground mb-4">
              ООО "Технология программирования" — это команда профессионалов, 
              специализирующихся на разработке современного программного обеспечения. 
              Мы предоставляем полный цикл услуг от проектирования до внедрения и сопровождения.
            </p>
            <p className="text-muted-foreground mb-6">
              Наша компания основана в 2010 году и за это время успешно реализовала 
              более 200 проектов различной сложности для клиентов из разных отраслей.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="border-0 bg-primary/5">
                <CardContent className="p-4 text-center">
                  <p className="text-3xl font-bold text-primary">12+</p>
                  <p className="text-sm">лет опыта</p>
                </CardContent>
              </Card>
              <Card className="border-0 bg-primary/5">
                <CardContent className="p-4 text-center">
                  <p className="text-3xl font-bold text-primary">200+</p>
                  <p className="text-sm">проектов</p>
                </CardContent>
              </Card>
              <Card className="border-0 bg-primary/5">
                <CardContent className="p-4 text-center">
                  <p className="text-3xl font-bold text-primary">50+</p>
                  <p className="text-sm">специалистов</p>
                </CardContent>
              </Card>
              <Card className="border-0 bg-primary/5">
                <CardContent className="p-4 text-center">
                  <p className="text-3xl font-bold text-primary">98%</p>
                  <p className="text-sm">довольных клиентов</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-video bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-lg shadow-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🚀</div>
                  <h3 className="text-xl font-medium mb-2">Наша миссия</h3>
                  <p className="text-muted-foreground">
                    Создавать инновационные программные решения, которые помогают нашим клиентам 
                    достигать успеха и превосходить их ожидания
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
