import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [searchQuery, setSearchQuery] = useState('');

  const featuredBooks = [
    {
      id: 1,
      title: "Космическая Одиссея",
      author: "Анна Звездная",
      price: 599,
      rating: 4.8,
      reviews: 142,
      genre: "Фантастика",
      cover: "/img/feae13cc-a3a7-4447-aa79-68cd02fa89ae.jpg",
      description: "Захватывающее путешествие по галактике"
    },
    {
      id: 2,
      title: "Тайны Розового Города",
      author: "Мария Фиолетова",
      price: 450,
      rating: 4.5,
      reviews: 89,
      genre: "Детектив",
      cover: "/img/feae13cc-a3a7-4447-aa79-68cd02fa89ae.jpg",
      description: "Мистический детектив в волшебном мире"
    },
    {
      id: 3,
      title: "Цифровые Грезы",
      author: "Иван Кодов",
      price: 799,
      rating: 4.9,
      reviews: 203,
      genre: "Киберпанк",
      cover: "/img/feae13cc-a3a7-4447-aa79-68cd02fa89ae.jpg",
      description: "Будущее уже здесь"
    }
  ];

  const genres = [
    { name: "Фантастика", count: 245, icon: "Rocket" },
    { name: "Детектив", count: 189, icon: "Search" },
    { name: "Роман", count: 156, icon: "Heart" },
    { name: "Киберпанк", count: 78, icon: "Zap" },
    { name: "Фэнтези", count: 134, icon: "Wand2" }
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />);
    }
    
    if (hasHalfStar) {
      stars.push(<Icon key="half" name="StarHalf" size={16} className="text-yellow-400 fill-current" />);
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Icon key={`empty-${i}`} name="Star" size={16} className="text-gray-300" />);
    }
    
    return stars;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-pink-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="BookOpen" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                КнигаДом
              </h1>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Главная</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Новинки</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Жанры</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Авторы</a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Input
                  placeholder="Поиск книг..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 pr-10"
                />
                <Icon name="Search" size={20} className="absolute right-3 top-2.5 text-gray-400" />
              </div>
              
              <Button variant="outline" size="icon">
                <Icon name="User" size={20} />
              </Button>
              
              <Button variant="outline" size="icon">
                <Icon name="ShoppingCart" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-600 to-secondary bg-clip-text text-transparent animate-fade-in">
            Мир Электронных Книг
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in">
            Откройте для себя тысячи захватывающих историй. Читайте, оценивайте, делитесь впечатлениями.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
            <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary">
              <Icon name="BookOpen" size={20} className="mr-2" />
              Начать чтение
            </Button>
            <Button variant="outline" size="lg">
              <Icon name="TrendingUp" size={20} className="mr-2" />
              Популярные книги
            </Button>
          </div>
        </div>
      </section>

      {/* Genre Tabs */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 mb-8">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="new">Новинки</TabsTrigger>
              <TabsTrigger value="popular">Популярные</TabsTrigger>
              <TabsTrigger value="bestsellers">Бестселлеры</TabsTrigger>
              <TabsTrigger value="free">Бесплатные</TabsTrigger>
              <TabsTrigger value="sale">Скидки</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-8">
              {/* Featured Books */}
              <div>
                <h2 className="text-3xl font-bold text-center mb-8">Рекомендуемые книги</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {featuredBooks.map((book) => (
                    <Card key={book.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-pink-200">
                      <CardHeader className="pb-4">
                        <div className="aspect-[3/4] mb-4 overflow-hidden rounded-lg">
                          <img 
                            src={book.cover} 
                            alt={book.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex justify-between items-start">
                          <Badge variant="secondary" className="mb-2">
                            {book.genre}
                          </Badge>
                          <Button variant="ghost" size="icon" className="text-pink-400 hover:text-pink-600">
                            <Icon name="Heart" size={16} />
                          </Button>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="pb-4">
                        <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors">
                          {book.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600 mb-3">
                          {book.author}
                        </CardDescription>
                        <p className="text-sm text-gray-500 mb-4">{book.description}</p>
                        
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-2">
                            <div className="flex items-center">
                              {renderStars(book.rating)}
                            </div>
                            <span className="text-sm text-gray-600">
                              {book.rating} ({book.reviews} отзывов)
                            </span>
                          </div>
                        </div>
                      </CardContent>
                      
                      <CardFooter className="pt-0">
                        <div className="flex items-center justify-between w-full">
                          <span className="text-2xl font-bold text-primary">
                            {book.price}₽
                          </span>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Icon name="Eye" size={16} className="mr-1" />
                              Читать
                            </Button>
                            <Button size="sm" className="bg-gradient-to-r from-primary to-purple-600">
                              <Icon name="ShoppingCart" size={16} className="mr-1" />
                              Купить
                            </Button>
                          </div>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Genres Grid */}
              <div>
                <h2 className="text-3xl font-bold text-center mb-8">Популярные жанры</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {genres.map((genre) => (
                    <Card key={genre.name} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-pink-50 border-pink-200 cursor-pointer">
                      <CardContent className="p-6 text-center">
                        <div className="mb-4 flex justify-center">
                          <div className="p-3 bg-gradient-to-r from-primary to-purple-600 rounded-full text-white group-hover:scale-110 transition-transform">
                            <Icon name={genre.icon as any} size={24} />
                          </div>
                        </div>
                        <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                          {genre.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {genre.count} книг
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="new">
              <div className="text-center py-12">
                <Icon name="BookOpen" size={64} className="mx-auto text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Новинки скоро появятся!</h3>
                <p className="text-gray-600">Следите за обновлениями</p>
              </div>
            </TabsContent>

            <TabsContent value="popular">
              <div className="text-center py-12">
                <Icon name="TrendingUp" size={64} className="mx-auto text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Популярные книги</h3>
                <p className="text-gray-600">Самые читаемые произведения</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-primary to-purple-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="BookOpen" size={24} />
                <h3 className="text-xl font-bold">КнигаДом</h3>
              </div>
              <p className="text-pink-100">
                Ваш проводник в мир электронных книг
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-pink-100">
                <li><a href="#" className="hover:text-white transition-colors">Новинки</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Бестселлеры</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Жанры</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Авторы</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-pink-100">
                <li><a href="#" className="hover:text-white transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Условия</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Связь</h4>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-pink-100 hover:text-white">
                  <Icon name="Mail" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-pink-100 hover:text-white">
                  <Icon name="Phone" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-pink-100 hover:text-white">
                  <Icon name="MessageCircle" size={20} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-pink-400 mt-8 pt-8 text-center text-pink-100">
            <p>&copy; 2024 КнигаДом. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}