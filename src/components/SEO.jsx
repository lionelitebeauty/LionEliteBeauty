import { useEffect } from 'react'

export default function SEO({ title, description, ogImage }) {
  useEffect(() => {
    document.title = title ? `${title} | Lion Elite Beauty` : 'Lion Elite Beauty | Peptide Skincare & Wellness'
    const setMeta = (name, content) => {
      let el = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`)
      if (!el) {
        el = document.createElement('meta')
        if (name.startsWith('og:')) el.setAttribute('property', name)
        else el.setAttribute('name', name)
        document.head.appendChild(el)
      }
      if (content) el.setAttribute('content', content)
    }
    setMeta('description', description || 'Premium peptide-powered skincare and personalized wellness programs. Science-backed formulations designed to help you look, feel, and perform at your best.')
    setMeta('og:title', title ? `${title} | Lion Elite Beauty` : 'Lion Elite Beauty')
    setMeta('og:description', description || 'Premium peptide skincare and wellness programs.')
    setMeta('og:image', ogImage || '')
    setMeta('og:type', 'website')
  }, [title, description, ogImage])

  return null
}