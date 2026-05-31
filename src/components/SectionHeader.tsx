interface SectionHeaderProps {
  title: string
  subtitle?: string
  light?: boolean
}

export default function SectionHeader({ title, subtitle, light = false }: SectionHeaderProps) {
  return (
    <div className="text-center mb-12">
      <h2 className={`section-title ${light ? 'text-white' : 'text-parish-blueDeep'}`}>{title}</h2>
      <div className="pink-divider" />
      {subtitle && (
        <p className={`font-body mt-4 max-w-xl mx-auto text-base leading-relaxed ${light ? 'text-blue-100' : 'text-gray-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
