import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { usePageTitle } from '@/hooks/usePageTitle'

const content = {
  en: {
    title: 'Privacy Policy',
    updated: 'Last updated: April 2026',
    sections: [
      {
        heading: 'Overview',
        body: 'Candle Lens is a free educational web application. We are committed to protecting your privacy. This policy explains what information is collected and how it is used.',
      },
      {
        heading: 'Information We Collect',
        body: 'We use Google Analytics to collect anonymous usage data, including pages visited, session duration, and general geographic region. This data cannot be used to identify you personally. We do not collect names, email addresses, or payment information.',
      },
      {
        heading: 'Local Storage',
        body: 'Your theme preference (light/dark) and selected language are stored in your browser\'s localStorage. This data stays on your device and is never transmitted to our servers.',
      },
      {
        heading: 'Third-Party Services',
        body: 'We use Google Analytics (Google LLC). Their privacy policy is available at policies.google.com/privacy. We use Yahoo Finance data for historical chart data displayed in the app, which is subject to Yahoo\'s terms of use.',
      },
      {
        heading: 'Cookies',
        body: 'Google Analytics may set cookies to distinguish users and sessions. We do not use any other cookies.',
      },
      {
        heading: 'Your Rights',
        body: 'You can disable Google Analytics by using browser extensions such as the Google Analytics Opt-out Browser Add-on. You can clear localStorage at any time through your browser settings.',
      },
      {
        heading: 'Contact',
        body: 'If you have questions about this privacy policy, please open an issue on our GitHub repository.',
      },
    ],
  },
  zh: {
    title: '隐私政策',
    updated: '最后更新：2026年4月',
    sections: [
      {
        heading: '概述',
        body: 'Candle Lens 是一款免费的教育类网页应用。我们致力于保护您的隐私。本政策说明我们收集哪些信息以及如何使用这些信息。',
      },
      {
        heading: '我们收集的信息',
        body: '我们使用 Google Analytics 收集匿名使用数据，包括访问的页面、会话时长和大致地理区域。这些数据无法用于识别您的个人身份。我们不收集姓名、电子邮件地址或支付信息。',
      },
      {
        heading: '本地存储',
        body: '您的主题偏好（亮色/暗色）和所选语言存储在浏览器的 localStorage 中。这些数据保留在您的设备上，不会传输到我们的服务器。',
      },
      {
        heading: '第三方服务',
        body: '我们使用 Google Analytics（Google LLC）。其隐私政策可在 policies.google.com/privacy 查看。应用中展示的历史图表数据来自雅虎财经，受雅虎使用条款约束。',
      },
      {
        heading: 'Cookie',
        body: 'Google Analytics 可能会设置 Cookie 以区分用户和会话。我们不使用其他任何 Cookie。',
      },
      {
        heading: '您的权利',
        body: '您可以通过 Google Analytics 退出浏览器插件等工具禁用 Google Analytics。您可以随时通过浏览器设置清除 localStorage 数据。',
      },
      {
        heading: '联系我们',
        body: '如果您对本隐私政策有任何疑问，请在我们的 GitHub 仓库提交 Issue。',
      },
    ],
  },
}

export default function PrivacyPage() {
  const { i18n, t } = useTranslation()
  const lang = i18n.language.startsWith('zh') ? 'zh' : 'en'
  const c = content[lang]
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
