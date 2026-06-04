import Link from "next/link";

const getNews = (language: "ko" | "en") => [
  {
    date: "2026.05.20",
    category: language === "ko" ? "업데이트" : "Update",
    categoryColor: "bg-blue-100 text-blue-700",
    title: language === "ko"
      ? "방문자 관리 기능 업데이트 안내"
      : "Visitor Management Feature Update",
    desc: language === "ko"
      ? "현장 방문자 사전 등록 및 출입 관리 기능이 업데이트되었습니다. QR코드 기반 비접촉 출입 관리를 지원합니다."
      : "Site visitor pre-registration and access management has been updated. Now supports QR-based contactless entry control.",
    href: "#news-1",
  },
  {
    date: "2026.05.15",
    category: language === "ko" ? "기능 추가" : "New Feature",
    categoryColor: "bg-green-100 text-green-700",
    title: language === "ko"
      ? "안전모 미착용 AI 감지 정확도 99% 달성"
      : "99% Accuracy in Helmet Detection AI",
    desc: language === "ko"
      ? "딥러닝 모델 업그레이드로 안전모 미착용 감지 정확도가 99%로 향상되었습니다. 야간 및 역광 환경에서도 정확한 감지가 가능합니다."
      : "A deep learning model upgrade raised helmet-missing detection accuracy to 99%, accurate even at night and in backlight.",
    href: "#news-2",
  },
  {
    date: "2026.05.08",
    category: language === "ko" ? "공지" : "Notice",
    categoryColor: "bg-orange-100 text-orange-700",
    title: language === "ko"
      ? "2026년 중대재해처벌법 시행 가이드"
      : "2026 Serious Accidents Punishment Act Guide",
    desc: language === "ko"
      ? "중대재해처벌법 적용 범위 확대에 따른 대응 가이드를 배포합니다. 50인 이상 사업장의 필수 준수 사항을 확인하세요."
      : "We're releasing a compliance guide for the expanded scope of the Serious Accidents Punishment Act. Check requirements for workplaces with 50+ employees.",
    href: "#news-3",
  },
  {
    date: "2026.04.28",
    category: language === "ko" ? "업데이트" : "Update",
    categoryColor: "bg-blue-100 text-blue-700",
    title: language === "ko"
      ? "대시보드 UI 개편 및 성능 개선"
      : "Dashboard UI Redesign & Performance Boost",
    desc: language === "ko"
      ? "더 빠르고 직관적인 대시보드로 개편했습니다. 현장별 안전 현황을 한눈에 파악할 수 있도록 시각화를 강화했습니다."
      : "We redesigned the dashboard to be faster and more intuitive, with enhanced visualization to grasp each site's safety status at a glance.",
    href: "#news-4",
  },
];

const getBlogPosts = (language: "ko" | "en") => [
  {
    date: "2026.05.22",
    tag: language === "ko" ? "가이드" : "Guide",
    tagColor: "bg-purple-100 text-purple-700",
    title: language === "ko"
      ? "스마트 안전장비 도입 전 꼭 알아야 할 5가지"
      : "5 Things to Know Before Adopting Smart Safety Equipment",
    imgBg: "bg-gradient-to-br from-purple-600 to-purple-800",
    href: "#blog-1",
  },
  {
    date: "2026.05.10",
    tag: language === "ko" ? "사례" : "Case Study",
    tagColor: "bg-blue-100 text-blue-700",
    title: language === "ko"
      ? "AI CCTV 도입 후 재해율 40% 감소한 OO건설 사례"
      : "How a Construction Firm Cut Accidents 40% with AI CCTV",
    imgBg: "bg-gradient-to-br from-blue-600 to-blue-800",
    href: "#blog-2",
  },
  {
    date: "2026.04.30",
    tag: language === "ko" ? "규정" : "Regulation",
    tagColor: "bg-red-100 text-red-700",
    title: language === "ko"
      ? "2026년 달라지는 건설현장 영상기록 의무 총정리"
      : "2026 Changes to Construction Site Video Recording Mandates",
    imgBg: "bg-gradient-to-br from-red-600 to-red-800",
    href: "#blog-3",
  },
];

export default function NewsSection({ language = "ko" }: { language?: "ko" | "en" }) {
  const news = getNews(language);
  const blogPosts = getBlogPosts(language);

  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* News */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">
              {language === "ko" ? "소식·공지" : "News & Notices"}
            </p>
            <h2 className="text-2xl font-black text-gray-900">{language === "ko" ? "최신 소식" : "Latest News"}</h2>
          </div>
          <Link href="#news" className="text-sm text-blue-600 font-medium hover:underline">
            {language === "ko" ? "전체보기 →" : "View All →"}
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {news.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="group bg-white rounded-xl p-5 border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs font-medium px-2 py-0.5 rounded ${item.categoryColor}`}>
                  {item.category}
                </span>
                <span className="text-xs text-gray-400">{item.date}</span>
              </div>
              <h3 className="text-sm font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">{item.desc}</p>
            </Link>
          ))}
        </div>

        {/* Blog */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">
              {language === "ko" ? "블로그" : "Blog"}
            </p>
            <h2 className="text-2xl font-black text-gray-900">{language === "ko" ? "전문가 인사이트" : "Expert Insights"}</h2>
          </div>
          <Link href="#blog" className="text-sm text-blue-600 font-medium hover:underline">
            {language === "ko" ? "전체보기 →" : "View All →"}
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <Link
              key={i}
              href={post.href}
              className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all"
            >
              <div className={`${post.imgBg} aspect-video flex items-center justify-center`}>
                <svg className="w-10 h-10 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded ${post.tagColor}`}>
                    {post.tag}
                  </span>
                  <span className="text-xs text-gray-400">{post.date}</span>
                </div>
                <h3 className="text-[15px] font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
