import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useLocale } from '@/hooks/useLocale'
import { usePageTitle } from '@/hooks/usePageTitle'

const content = {
  en: {
    title: 'Terms of Service',
    updated: 'Last updated: April 2026',
    sections: [
      {
        heading: 'Educational Purpose Only',
        body: 'Candle Lens is provided solely for educational and informational purposes. The content is based on Steve Nison\'s "Japanese Candlestick Charting Techniques" and is intended to help users learn about technical analysis concepts.',
      },
      {
        heading: 'Not Financial Advice',
        body: 'Nothing on this website constitutes financial, investment, trading, or any other type of advice. Candlestick patterns are educational tools only. Past performance of any pattern does not guarantee future results. Always consult a qualified financial professional before making investment decisions.',
      },
      {
        heading: 'Use of the Service',
        body: 'You may use Candle Lens for personal, non-commercial educational purposes. You may not reproduce, distribute, or create derivative works from the content without permission.',
      },
      {
        heading: 'Disclaimer of Warranties',
        body: 'Candle Lens is provided "as is" without warranty of any kind. We make no representations about the accuracy, completeness, or suitability of the content for any purpose.',
      },
      {
        heading: 'Limitation of Liability',
        body: 'To the fullest extent permitted by law, we shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of this service.',
      },
      {
        heading: 'Changes to Terms',
        body: 'We may update these terms at any time. Continued use of the service after changes constitutes acceptance of the new terms.',
      },
    ],
  },
  zh: {
    title: '服务条款',
    updated: '最后更新：2026年4月',
    sections: [
      {
        heading: '仅供教育目的',
        body: 'Candle Lens 仅用于教育和信息目的。内容基于史蒂夫·尼森的《日本蜡烛图技术》，旨在帮助用户了解技术分析概念。',
      },
      {
        heading: '非金融建议',
        body: '本网站上的任何内容均不构成金融、投资、交易或任何其他类型的建议。蜡烛图形态仅为教育工具。任何形态的历史表现不保证未来结果。在做出投资决策之前，请务必咨询合格的金融专业人士。',
      },
      {
        heading: '服务使用',
        body: '您可以将 Candle Lens 用于个人非商业教育目的。未经许可，您不得复制、分发或基于本内容创建衍生作品。',
      },
      {
        heading: '免责声明',
        body: 'Candle Lens 按"现状"提供，不提供任何形式的保证。我们不对内容的准确性、完整性或适用性作任何陈述。',
      },
      {
        heading: '责任限制',
        body: '在法律允许的最大范围内，我们对因您使用本服务而产生的任何直接、间接、附带或后果性损害不承担责任。',
      },
      {
        heading: '条款变更',
        body: '我们可能随时更新这些条款。在变更后继续使用本服务即表示接受新条款。',
      },
    ],
  },
}

export default function TermsPage() {
  const { t } = useTranslation()
  const { locale } = useLocale()
  const c = content[locale]
  usePageTitle(c.title)

  return (
    <div className="max-w-2xl mx-auto px-6 py-10">
      <Link
        to="/"
        className="text-sm text-gray-500 dark:text-[#787b86] hover:text-gray-900 dark:hover:text-[#d1d4dc] transition-colors mb-6 inline-block"
      >
        ← {t('notFound.backToHome')}
      </Link>
      <h1 className="text-2xl font-bold text-gray-900 dark:text-[#d1d4dc] mb-1">{c.title}</h1>
      <p className="text-xs text-gray-400 dark:text-[#787b86] mb-8">{c.updated}</p>
      <div className="space-y-6">
        {c.sections.map((s) => (
          <section key={s.heading}>
            <h2 className="text-sm font-semibold text-gray-800 dark:text-[#d1d4dc] mb-1">{s.heading}</h2>
            <p className="text-sm text-gray-600 dark:text-[#787b86] leading-relaxed">{s.body}</p>
          </section>
        ))}
      </div>
    </div>
  )
}
