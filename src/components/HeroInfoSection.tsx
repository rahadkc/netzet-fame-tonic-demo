// HeroInfoSection.tsx
const benefits = [
  'Start growing your influence right away—no waiting required!',
  'Create viral TikToks and Reels step by step with easy-to-follow lessons',
  'Use a Personal AI Worker to boost your content',
  'Learn from expert-led courses designed for aspiring influencers',
];

export default function HeroInfoSection() {
  return (
    <div className="flex flex-col gap-20 items-start flex-1 relative lg:w-[516px]">
      <div className="flex flex-col gap-[30px] items-start self-stretch relative w-full">
        {/* Headline */}
        <div className="flex flex-col gap-4 items-start self-stretch relative w-full">
          <hgroup className="flex flex-col gap-0 items-start text-center lg:text-left self-stretch relative w-full">
            <h1 className="text-[25px] lg:text-[35px] leading-[30px] lg:leading-[42px] text-white font-[var(--font-urbanist)] font-bold">
              Want to Turn Social Media Into a Profitable Career?
            </h1>
            <h2 className="text-[25px] lg:text-[35px] leading-[30px] lg:leading-[42px] text-cyan-500 font-[var(--font-urbanist)] font-bold [text-shadow:0_4px_4px_#FC004E,0_0_10px_#FC004E66]">
              Discover your way to success with Fametonic:
            </h2>
          </hgroup>

          {/* Benefits */}
          <ul className="flex flex-col gap-[13px] items-start self-stretch relative w-full">
            {benefits.map(text => (
              <li key={text} className="flex gap-2.5 items-center self-stretch relative w-full">
                <span className="text-[22px] leading-[26px]">✨</span>
                <p className="text-base leading-[22px]">
                  <span className="text-white text-base font-semibold">{text}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="flex flex-col self-stretch gap-2.5 items-start relative lg:w-[313px]">
          <button className="cursor-pointer rounded-[10px] px-10 py-1.5 flex gap-2.5 justify-center items-center self-stretch relative w-full bg-red-600 drop-shadow">
            <h5 className="leading-6">
              <span className="text-white text-xl font-bold">GET STARTED</span>
            </h5>
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.19238 6.26465C7.60266 6.67918 7.60225 7.33287 7.19141 7.74707L2.29102 12.6875C1.87768 13.1039 1.22189 13.104 0.808594 12.6875C0.607462 12.4847 0.50002 12.2157 0.5 11.9512L0.5 11.7451L0.538086 11.707C0.551454 11.6485 0.568204 11.5907 0.591797 11.5352C0.644656 11.4108 0.722378 11.2983 0.819336 11.2041L4.97949 7L0.818359 2.7959L0.819336 2.79492C0.408805 2.3804 0.4084 1.72679 0.819336 1.3125C1.23271 0.895833 1.88939 0.895784 2.30273 1.3125L2.30273 1.31348L7.19238 6.26465Z"
                fill="white"
                stroke="white"
              />
            </svg>
          </button>
          <small className="self-stretch text-xs leading-4 text-center text-white">
            1-minute quiz for personalized Insights
          </small>
        </div>

        {/* Legal */}
        <footer className="flex flex-col gap-3 justify-center items-center lg:items-start text-center lg:text-left self-stretch relative w-full">
          <small className="text-xs leading-[16px] text-gray-400 font-medium">
            By clicking &quot;Get Started&quot;, you agree with Terms and Conditions, Privacy Policy,
            Subscription Terms
          </small>
          <small className="text-[10px] leading-3 text-gray-400 font-medium">
            © Fametonic 2025. All Rights Reserved.
          </small>
        </footer>
      </div>
    </div>
  );
}
