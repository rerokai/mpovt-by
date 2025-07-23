import { PageHero } from "@/components/common/PageHero";
import Footer from "@/components/Footer";

const Notebooks = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black">
      <PageHero 
        title="H-Book Pro"
        subtitle="Ноутбук нового поколения"
        description="Мощный ноутбук для профессиональных задач и развлечений"
      />
      
      <div className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Технические характеристики</h2>
              <div className="space-y-4">
                <div className="flex justify-between p-4 bg-slate-800/50 rounded-lg">
                  <span className="text-slate-300">Процессор</span>
                  <span className="text-white">Intel Core i7-12700H</span>
                </div>
                <div className="flex justify-between p-4 bg-slate-800/50 rounded-lg">
                  <span className="text-slate-300">Память</span>
                  <span className="text-white">32GB DDR5</span>
                </div>
                <div className="flex justify-between p-4 bg-slate-800/50 rounded-lg">
                  <span className="text-slate-300">Накопитель</span>
                  <span className="text-white">1TB NVMe SSD</span>
                </div>
                <div className="flex justify-between p-4 bg-slate-800/50 rounded-lg">
                  <span className="text-slate-300">Дисплей</span>
                  <span className="text-white">15.6" 4K OLED</span>
                </div>
                <div className="flex justify-between p-4 bg-slate-800/50 rounded-lg">
                  <span className="text-slate-300">Графика</span>
                  <span className="text-white">NVIDIA RTX 4060</span>
                </div>
              </div>
            </div>
            <div>
              <img src="/imgs/laptops/p1.png" alt="H-Book Pro" className="w-full rounded-xl shadow-2xl" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="bg-slate-800/50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">Высокая производительность</h3>
              <p className="text-slate-300">Мощный процессор Intel и графика NVIDIA для любых задач</p>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">4K OLED дисплей</h3>
              <p className="text-slate-300">Яркий и четкий экран с превосходной цветопередачей</p>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">Защищенность</h3>
              <p className="text-slate-300">Встроенные средства безопасности и шифрование данных</p>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">Подключения</h3>
              <p className="text-slate-300">Wi-Fi 6E, Bluetooth 5.2, множество портов</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Notebooks;