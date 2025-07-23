import { PageHero } from "@/components/common/PageHero";
import Footer from "@/components/Footer";

const Products = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black">
      <PageHero 
        title="Наша продукция"
        subtitle="Инновационные решения для бизнеса и дома"
        description="Откройте для себя полную линейку высокотехнологичных продуктов МПОВТ"
      />
      
      <div className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-8 rounded-xl hover:bg-slate-700/50 transition-all duration-300">
              <img src="/imgs/mini-pc/h-top.jpg" alt="H-Top Mini PC" className="w-full h-48 object-cover rounded-lg mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">H-Top Mini PC</h3>
              <p className="text-slate-300 mb-6">Компактные мини-компьютеры для профессиональных задач</p>
              <a href="/products/computers" className="text-blue-400 hover:text-blue-300 font-medium">Подробнее →</a>
            </div>
            
            <div className="bg-slate-800/50 p-8 rounded-xl hover:bg-slate-700/50 transition-all duration-300">
              <img src="/imgs/laptops/h-book-pro.jpg" alt="H-Book Pro" className="w-full h-48 object-cover rounded-lg mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">H-Book Pro</h3>
              <p className="text-slate-300 mb-6">Мощные ноутбуки для работы и развлечений</p>
              <a href="/products/laptops" className="text-blue-400 hover:text-blue-300 font-medium">Подробнее →</a>
            </div>
            
            <div className="bg-slate-800/50 p-8 rounded-xl hover:bg-slate-700/50 transition-all duration-300">
              <img src="/imgs/displays/h-monitor.jpg" alt="H-Monitor" className="w-full h-48 object-cover rounded-lg mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">H-Monitor</h3>
              <p className="text-slate-300 mb-6">Профессиональные мониторы с высоким разрешением</p>
              <a href="/products/monitors" className="text-blue-400 hover:text-blue-300 font-medium">Подробнее →</a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Products;