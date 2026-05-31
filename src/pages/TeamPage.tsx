import { teamData } from '../data/team'
import SectionHeader from '../components/SectionHeader'

export default function TeamPage() {
  const mainPriest = teamData.find((m) => m.isMain)!
  const rest = teamData.filter((m) => !m.isMain)

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
          <p className="font-latin text-pink-200 italic text-lg mb-3">Quem somos</p>
          <h1 className="font-serif text-white text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Nossa Equipe</h1>
          <div className="w-20 h-0.5 mx-auto" style={{ background: 'linear-gradient(90deg, #3AA3FF, #FFB7E2)' }} />
        </div>
      </section>

      {/* Main priest */}
      <section className="py-20 px-4 bg-parish-white">
        <div className="max-w-5xl mx-auto">
          <SectionHeader title="Pároco" subtitle="O sacerdote responsável pela nossa comunidade" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img src={mainPriest.imageUrl} alt={mainPriest.name}
                  className="w-full max-w-sm mx-auto md:mx-0 h-96 object-cover" />
                {/* Name plate with gradient */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-center"
                  style={{ background: 'linear-gradient(to top, rgba(10,50,120,0.92), transparent)' }}>
                  <p className="font-serif text-white text-xl">{mainPriest.name}</p>
                  <p className="font-body text-xs uppercase tracking-widest" style={{ color: '#FFB7E2' }}>
                    {mainPriest.role}
                  </p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full -z-10 opacity-40"
                style={{ background: 'linear-gradient(135deg, #3AA3FF, #FFB7E2)' }} />
            </div>

            <div>
              <div className="w-12 h-0.5 mb-6" style={{ background: 'linear-gradient(90deg, #3AA3FF, #FFB7E2)' }} />
              {mainPriest.bio.split('\n\n').map((paragraph, i) => (
                <p key={i} className="font-body text-gray-600 text-base leading-relaxed mb-4">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rest of team */}
      <section className="py-16 px-4" style={{ background: '#f0f8ff' }}>
        <div className="max-w-5xl mx-auto">
          <SectionHeader title="Colaboradores" subtitle="As pessoas que fazem a paróquia acontecer" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((member) => (
              <div key={member.id}
                className="bg-white border border-blue-100 hover:border-parish-blue transition-all duration-300 hover:shadow-md p-5 flex gap-4 items-start rounded-xl">
                <div className="relative flex-shrink-0">
                  <img src={member.imageUrl} alt={member.name}
                    className="w-16 h-16 object-cover rounded-full border-2"
                    style={{ borderColor: '#3AA3FF' }} />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white"
                    style={{ background: 'linear-gradient(135deg, #3AA3FF, #FFB7E2)' }} />
                </div>
                <div>
                  <p className="font-serif text-parish-blueDeep text-base leading-tight">{member.name}</p>
                  <p className="font-body text-xs uppercase tracking-wide mb-2" style={{ color: '#3AA3FF' }}>
                    {member.role}
                  </p>
                  <p className="font-body text-gray-500 text-sm leading-relaxed line-clamp-4">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer CTA */}
      <section className="py-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #3AA3FF, #a8d8ff 50%, #FFB7E2)' }} />
        <div className="relative z-10 max-w-xl mx-auto">
          <p className="font-latin text-white/80 italic text-base mb-3">Junte-se a nós</p>
          <h2 className="font-serif text-white text-3xl mb-4 drop-shadow-lg">Quer servir na paróquia?</h2>
          <div className="w-16 h-0.5 bg-white/50 mx-auto mb-6" />
          <p className="font-body text-white/90 text-sm leading-relaxed mb-8">
            Nossa comunidade é movida por voluntários apaixonados pela fé. Se você sente o
            chamado a servir, entre em contato e descubra como colaborar.
          </p>
          <a href="mailto:paroquia@bonsucesso.org.br"
            className="inline-block bg-white font-body font-bold px-8 py-3 rounded-full tracking-wide uppercase text-sm hover:shadow-lg hover:scale-105 transition-all"
            style={{ color: '#1a7fd4' }}>
            Entre em Contato
          </a>
        </div>
      </section>
    </>
  )
}
