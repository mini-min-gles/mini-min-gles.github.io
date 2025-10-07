// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'mini-min-gles', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        
      },
    },
    external: {
      header: 'My Projects & Reports',
      projects: [
        {
          title: '한국어 욕설 채팅 분류 분석 머신러닝 모델',
          description:
            '한국어 욕설 채팅 분류 분석을 위한 효율적인 머신러닝 모델 탐구에 관한 보고서입니다.',
          link: '기계학습입문 기말 프로젝트 보고서_수정.pdf', // 업로드한 보고서 파일명
        }
      ]
      // To hide the `External Projects` section, keep it empty.
     
    },
  },
  seo: { title: 'Portfolio of HyeokMin Kwon', description: 'Hello, My name is HyeokMin Kwon. My major is AI. I am a student at Sungkyunkwan University.', imageURL: 'https://github.com/mini-min-gles/mini-min-gles.github.io/blob/main/%ED%94%84%EB%A1%9C%ED%95%84.jpg' },
  social: {
    linkedin: '',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: 'mini._.min_gles',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'KwonHyeokMin',
    dev: 'KwonHyeokMin',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: '',
    phone: '010-5052-6545',
    email: 'bbaa6545@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C',
    'Python',
    'Unreal Engine',
    'Excel',
    'Powerpoint',
    'Git'
  ],
  experiences: [
    {
      company: '인재의창',
      position: 'Teaching Assistant',
      from: 'July 2024',
      to: 'August 2025',
      companyLink: '',
    }
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
      to: 'prsent',
    }
  ],
  publications: [
    {
      
    }
  ],
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'winter',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,
// ... (blog 섹션 다음)
blog: {
  source: 'dev',
  username: '',
  limit: 2,
},

// 이 두 부분을 추가하거나, 원래대로 복구해주세요.
googleAnalytics: {
  id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
},
hotjar: {
  id: '',
  snippetVersion: 6,
},

themeConfig: {
  // ... (themeConfig 섹션 시작)
    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `© 2025 Kwon HyeokMin. Powered by <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a>`,

  enablePWA: true,
};

export default CONFIG;
