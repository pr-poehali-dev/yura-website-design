import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  date: string;
  image: string;
  readTime: string;
  size: 'large' | 'medium' | 'small';
}

const articles: Article[] = [
  {
    id: 1,
    title: 'Путь к творчеству: как я стала дизайнером',
    excerpt: 'История моего становления от студентки архитектуры до креативного директора',
    category: 'Биография',
    tags: ['путь', 'вдохновение', 'становление'],
    date: '12 ноября 2024',
    image: 'https://cdn.poehali.dev/projects/486dbe88-06e6-4c2c-9dc3-882627b94536/files/245b6705-1e85-4f6e-bdf8-500f006e8468.jpg',
    readTime: '8 мин',
    size: 'large'
  },
  {
    id: 2,
    title: 'Цветовая психология в веб-пространстве',
    excerpt: 'Влияние палитры на эмоциональный отклик аудитории',
    category: 'Психология',
    tags: ['цвет', 'UX', 'эмоции'],
    date: '10 ноября 2024',
    image: 'https://cdn.poehali.dev/projects/486dbe88-06e6-4c2c-9dc3-882627b94536/files/cda60094-fd11-4454-9b7c-aa005fdb9d66.jpg',
    readTime: '5 мин',
    size: 'medium'
  },
  {
    id: 3,
    title: 'Типографика как инструмент повествования',
    excerpt: 'Выбор шрифтов для создания уникального голоса бренда',
    category: 'Типографика',
    tags: ['шрифты', 'брендинг'],
    date: '8 ноября 2024',
    image: 'https://cdn.poehali.dev/projects/486dbe88-06e6-4c2c-9dc3-882627b94536/files/01983dc9-b589-46a1-a0a7-8614c13c4eac.jpg',
    readTime: '6 мин',
    size: 'small'
  },
  {
    id: 4,
    title: 'Анимация и микровзаимодействия',
    excerpt: 'Создание живых интерфейсов через детали',
    category: 'Интерфейсы',
    tags: ['анимация', 'UI', 'взаимодействие'],
    date: '5 ноября 2024',
    image: 'https://cdn.poehali.dev/projects/486dbe88-06e6-4c2c-9dc3-882627b94536/files/245b6705-1e85-4f6e-bdf8-500f006e8468.jpg',
    readTime: '7 мин',
    size: 'medium'
  },
  {
    id: 5,
    title: 'Баланс контента и визуала',
    excerpt: 'Гармония текста и изображений в современных макетах',
    category: 'Композиция',
    tags: ['баланс', 'контент', 'визуал'],
    date: '3 ноября 2024',
    image: 'https://cdn.poehali.dev/projects/486dbe88-06e6-4c2c-9dc3-882627b94536/files/cda60094-fd11-4454-9b7c-aa005fdb9d66.jpg',
    readTime: '4 мин',
    size: 'small'
  }
];

const categories = ['Все', 'Биография', 'Психология', 'Типографика', 'Интерфейсы', 'Композиция'];

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [showAuthor, setShowAuthor] = useState(false);

  const filteredArticles = selectedCategory === 'Все' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-serif font-bold text-foreground">Креативный блог</h1>
            <nav className="flex items-center gap-6">
              <Button 
                variant="ghost" 
                onClick={() => setShowAuthor(!showAuthor)}
                className="font-medium"
              >
                О авторе
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {showAuthor && (
        <section className="bg-secondary py-16 animate-fade-in">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-48 h-48 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon name="User" size={80} className="text-primary" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-4xl font-serif font-bold mb-4">Анна Иванова</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Дизайнер и творческий писатель с 8-летним опытом в создании визуальных историй. 
                  Исследую пересечение искусства, технологий и человеческого опыта.
                </p>
                <div className="flex gap-4 justify-center md:justify-start">
                  <Badge variant="secondary" className="px-4 py-2 text-sm">
                    <Icon name="Palette" size={16} className="mr-2" />
                    Дизайн
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2 text-sm">
                    <Icon name="Pen" size={16} className="mr-2" />
                    Письмо
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2 text-sm">
                    <Icon name="Sparkles" size={16} className="mr-2" />
                    Креатив
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full px-6 transition-all hover:scale-105"
              >
                {category}
              </Button>
            ))}
          </div>
          <div className="text-center text-lg font-medium text-foreground">
            ИМЯ-Вика. МЕСТОИМЕНИЯ-она её. ВОЗРАСТ-10лет. ФД-роблокс, валорант, пони таун
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]">
          {filteredArticles.map((article, index) => {
            const colSpan = article.size === 'large' ? 'md:col-span-2' : 
                           article.size === 'medium' ? 'md:col-span-1' : 
                           'md:col-span-1';
            const rowSpan = article.size === 'large' ? 'md:row-span-2' : 
                           article.size === 'medium' ? 'md:row-span-1' : 
                           'md:row-span-1';
            
            return (
              <Card 
                key={article.id}
                className={`${colSpan} ${rowSpan} group cursor-pointer overflow-hidden hover:shadow-2xl transition-all duration-500 animate-scale-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-0 h-full relative">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${article.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  </div>
                  
                  <div className="relative h-full flex flex-col justify-end p-6 text-white">
                    <div className="mb-3 flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-primary text-white border-0">
                        {article.category}
                      </Badge>
                      {article.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="border-white/30 text-white">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <h3 className={`font-serif font-bold mb-2 group-hover:text-primary transition-colors ${
                      article.size === 'large' ? 'text-3xl' : 'text-xl'
                    }`}>
                      {article.title}
                    </h3>
                    
                    {article.size !== 'small' && (
                      <p className="text-white/90 mb-3 text-sm leading-relaxed">
                        {article.excerpt}
                      </p>
                    )}
                    
                    <div className="flex items-center gap-4 text-sm text-white/70">
                      <span className="flex items-center gap-1">
                        <Icon name="Calendar" size={14} />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="Clock" size={14} />
                        {article.readTime}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </main>

      <footer className="bg-foreground/5 border-t border-border py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Креативный блог</h2>
          <p className="text-muted-foreground mb-6">
            Исследуем мир дизайна, типографики и визуального повествования
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Icon name="Mail" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Icon name="Twitter" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Icon name="Instagram" size={20} />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}