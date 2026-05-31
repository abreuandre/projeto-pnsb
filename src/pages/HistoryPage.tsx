import SectionHeader from '../components/SectionHeader'
import { timelineData } from '../data/history'

export default function HistoryPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/img2.avif" alt="Igreja" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(160deg, rgba(10,50,120,0.85) 0%, rgba(255,183,226,0.60) 100%)'
          }} />
        </div>
        <div className="absolute top-0 left-0 right-0 h-1"
          style={{ background: 'linear-gradient(90deg, #3AA3FF, #FFB7E2, #3AA3FF)' }} />
        <div className="relative z-10">
          <p className="font-latin text-pink-200 italic text-lg mb-3">Nossa Trajetória</p>
          <h1 className="font-serif text-white text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">História da Paróquia</h1>
          <div className="w-20 h-0.5 mx-auto" style={{ background: 'linear-gradient(90deg, #3AA3FF, #FFB7E2)' }} />
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 px-4 bg-parish-white max-w-3xl mx-auto text-center">
        <p className="font-body text-gray-600 text-base leading-relaxed">
          A história da Paróquia Nossa Senhora do Bonsucesso é a história de uma comunidade
          que, movida pela fé e pelo amor, construiu ao longo de décadas um espaço sagrado de
          encontro com Deus e com o próximo.
        </p>
      </section>

      {/* Timeline */}
      <section className="py-8 pb-24 px-4 bg-parish-white">
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 hidden md:block"
            style={{ background: 'linear-gradient(to bottom, #3AA3FF, #FFB7E2)' }} />

          <div className="space-y-12">
            {timelineData.map((event, index) => {
              const isLeft = index % 2 === 0
              return (
                <div key={event.year} className="relative flex flex-col md:flex-row items-center gap-6 md:gap-0">
                  <div className={`md:w-1/2 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 md:order-last'}`}>
                    {isLeft ? <EventCard event={event} /> : <div className="hidden md:block" />}
                  </div>
                  {/* Year bubble */}
                  <div className="md:absolute md:left-1/2 md:-translate-x-1/2 z-10 w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg text-white"
                    style={{ background: 'linear-gradient(135deg, #3AA3FF, #FFB7E2)' }}>
                    <span className="font-serif text-xs font-bold text-center leading-tight px-1">{event.year}</span>
                  </div>
                  <div className={`md:w-1/2 ${!isLeft ? 'md:pl-12' : 'md:pr-12 md:order-last'}`}>
                    {!isLeft ? <EventCard event={event} /> : <div className="hidden md:block" />}
                  </div>
                  <div className="md:hidden w-full"><EventCard event={event} /></div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-4" style={{ background: '#f0f8ff' }}>
        <div className="max-w-5xl mx-auto">
          <SectionHeader title="Galeria Histórica" subtitle="Imagens que contam a história de nossa comunidade" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['/img1.avif', '/img2.avif', '/img1.avif', '/img2.avif'].map((src, i) => (
              <div key={i} className="overflow-hidden aspect-square rounded-xl group cursor-pointer shadow-sm hover:shadow-md transition-shadow">
                <img src={src} alt={`Foto ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-6 font-body italic">
            Adicione suas fotos históricas editando o arquivo <code>src/pages/HistoryPage.tsx</code>
          </p>
        </div>
      </section>
    </>
  )
}

function EventCard({ event }: { event: (typeof timelineData)[0] }) {
  return (
    <div className="bg-white border border-blue-100 rounded-xl p-5 shadow-sm hover:border-parish-blue hover:shadow-md transition-all">
      <h3 className="font-serif text-parish-blueDeep text-lg mb-1">{event.title}</h3>
      <p className="font-body text-gray-500 text-sm leading-relaxed mb-3">{event.description}</p>
      {event.imageUrl ? (
        <img src={event.imageUrl} alt={event.title} className="w-full h-36 object-cover rounded-lg" />
      ) : (
        <div className="w-full h-36 rounded-lg border-2 border-dashed border-blue-100 flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, rgba(58,163,255,0.05), rgba(255,183,226,0.05))' }}>
          <span className="text-gray-300 text-xs font-body italic">Insira uma imagem aqui</span>
        </div>
      )}
    </div>
  )
}
