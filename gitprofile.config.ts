// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'mini-min-gles',
  },
  base: '/',
  projects: {
    github: {
      display: true,
      header: 'Github Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'updated',
        limit: 8,
        exclude: {
          forks: true, 
          projects: [],
        },
      },
      manual: {
        projects: [], // 비워둠
      },
    },
    external: {
      header: 'My Projects & Reports',
      projects: [
        {
          title: '한국어 욕설 채팅 분류 분석 머신러닝 모델',
          description:
            '한국어 욕설 채팅 분류 분석을 위한 효율적인 머신러닝 모델 탐구에 관한 보고서입니다.',
          imageUrl: 'https://i.imgur.com/example.png', // 임시 이미지 URL, 나중에 교체 가능
          link: 'https://drive.google.com/file/d/12th1MHv-v7ZYQWZpeetZ3V8szOo13P8-/view?usp=sharing',
        },
        {
          title: "ADHD 증상 판단 모델 개발을 위한 프로젝트 진행 중",
          description: "최종 목표 VR를 통한 모델 개발을 위하여 언리얼 엔진을 통해 프로젝트 진행 중에 있습니다.",
          imageUrl: '',
          link: 'https://www.notion.so/Theraplay-26a717d2812380d88e1bc0eadc13f0b4?source=copy_link',
        }
      ],
    },
  },
  seo: {
    title: 'Portfolio of HyeokMin Kwon',
    description: 'Hello, My name is HyeokMin Kwon. My major is AI. I am a student at Sungkyunkwan University.',
    imageURL: 'https://raw.githubusercontent.com/mini-min-gles/mini-min-gles.github.io/main/프로필.jpg',
  },
  social: {
    linkedin: '',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: 'mini._.min_gles',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'KwonHyeokMin',
    dev: 'KwonHyeokMin',
    stackoverflow: '',
    discord: '',
    telegram: '',
    website: '',
    phone: '010-5052-6545',
    email: 'bbaa6545@gmail.com',
  },
  resume: {
    fileUrl: '', // 이력서 파일이 있다면 './resume.pdf'와 같이 경로를 지정
  },
  skills: ['C', 'Python', 'Unreal Engine', 'Excel', 'Powerpoint', 'Git'],
  experiences: [
    {
      company: '인재의창',
      position: 'Teaching Assistant',
      from: 'July 2024',
      to: 'August 2025',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: '지게차운전기능사',
      body: '한국산업인력공단',
      year: 'October 2025',
      link: 'https://www.q-net.or.kr/',
    },
  ],
  educations: [
    {
      institution: 'Sungkyunkwan University',
      degree: 'B.S. in AI Convergence',
      from: '2024',
      to: 'Present', // 'prsent' 오타 수정
    },
  ],
  publications: [], // 빈 객체 {} 대신 빈 배열 []로 수정
  blog: {
    source: 'dev',
    username: '',
    limit: 2,
  },
  googleAnalytics: {
    id: '',
  },
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'winter',
    disableSwitch: false,
    respectPrefersColorScheme: true, // 방문자 시스템 설정(다크/라이트) 존중
    displayAvatarRing: true,
    themes: [ // 전문적인 테마 위주로 정리
      'light',
      'dark',
      'corporate',
      'winter',
      'nord',
      'business',
    ],
  },
  footer: `© 2025 Kwon HyeokMin. Powered by <a
      class: "text-primary",
      href: "https://github.com/arifszn/gitprofile",
      target: "_blank",
      rel: "noreferrer",
    >GitProfile</a>`,
  enablePWA: true,
};

export default CONFIG;