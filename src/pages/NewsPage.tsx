import { useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import NewsCard from '../components/NewsCard'
import { newsData } from '../data/news'

const categories = ['Todos', 'Evento', 'Catequese', 'Retiro']

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const filtered = activeCategory === 'Todos' ? newsData : newsData.filter((n) => n.category === activeCategory)

  return (
    <>
      <section className="py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/img1.avif" alt="Igreja" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(135deg, rgba(10,50,120,0.88) 0%, rgba(255,183,226,0.60) 100%)'
          }} />
        </div>
        <div className="absolute top-0 left-0 right-0 h-1"
          style={{ background: 'linear-gradient(90deg, #3AA3FF, #FFB7E2, #3AA3FF)' }} />
        <div className="relative z-10">
          <p className="font-latin text-pink-200 italic text-lg mb-3">Fique informado</p>
          <h1 className="font-serif text-white text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Notícias e Eventos</h1>
          <div className="w-20 h-0.5 mx-auto" style={{ background: 'linear-gradient(90deg, #3AA3FF, #FFB7E2)' }} />
        </div>
      </section>

      {/* Filter */}
      <section className="bg-white py-6 px-4 border-b border-blue-50 shadow-sm">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-3 justify-center">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`font-body text-xs uppercase tracking-widest px-5 py-2 rounded-full border-2 transition-all ${
                activeCategory === cat
                  ? 'text-white border-transparent'
                  : 'text-gray-500 border-gray-200 hover:border-parish-blue hover:text-parish-blue'
              }`}
              style={activeCategory === cat ? { background: 'linear-gradient(135deg, #3AA3FF, #FFB7E2)', borderColor: 'transparent' } : {}}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-parish-white">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            title={activeCategory === 'Todos' ? 'Todas as Publicações' : activeCategory}
            subtitle={`${filtered.length} publicação${filtered.length !== 1 ? 'ões' : ''} encontrada${filtered.length !== 1 ? 's' : ''}`}
          />
          {filtered.length === 0 ? (
            <p className="text-center text-gray-400 font-body py-16">Nenhuma publicação nesta categoria.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filtered.map((item) => <NewsCard key={item.id} item={item} />)}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
