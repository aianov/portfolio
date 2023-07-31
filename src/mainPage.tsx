import React from 'react';
import main from './mainPage.module.scss';

// ICONS
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillHtml5,
} from 'react-icons/ai';

import {
  FaFigma,
  FaDiscord,
  FaNodeJs,
} from 'react-icons/fa';

import {
  BiSolidUserCircle,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTypescript,
  BiLogoSass,
  BiLogoRedux,
} from 'react-icons/bi';

import { GiCheckMark } from 'react-icons/gi'
import { TbPointFilled } from 'react-icons/tb'

// COMPONENTS
import ProjectItem from './components/item';

const App: React.FC = () => {

  interface typeProject {
    name: string;
    text: string;
    history: string;
    image: string;
    logo: string;
    stack: string[];
    url: string;
  }
  const arrayOfProjects: typeProject[] = [
    {
      'name': 'Riman',
      'text': 'Образовательный сайт',
      'history': 'Стартап компания в которой я проработал больше полугода, получил много опыта в react, scss а так же различных библиотек таких как axios, react-router-dom, react-skeleton и т.д.',
      'image': '/images/riman.png',
      'logo': '/images/logo.png',
      'stack': ['html', 'css', 'js', 'react', 'redux', 'nodejs', 'sass'],
      'url': 'https://46.183.163.77/tasks'
    },
    {
      'name': ':Danime',
      'text': 'Сайт по просмотру аниме',
      'history': 'Стартап компания в которой я проработал 4 месяца, получил много опыта в react, scss а так же различных библиотек таких как axios, react-router-dom, react-skeleton и т.д.',
      'image': '/images/anime.png',
      'logo': '/images/animelogo.png',
      'stack': ['html', 'css', 'js', 'react', 'nodejs', 'ts'],
      'url': 'https://www.danime.club/'
    }
  ]

  return (
    <div className={`${main.main} cw w100 h100vh`}>
      <div className={`${main.navbar} w100 df aic jcsb`}>
        <div className={`${main.left} df aic h100`}>
          <a href="https://github.com/aianov" target='_blank'><AiOutlineGithub size={30} /></a>
          <a href="https://twitter.com/nicsfiftyone" target='_blank'><AiOutlineTwitter size={30} /></a>
          <a href="https://www.youtube.com/@nics57OG" target='_blank'><AiFillYoutube size={30} /></a>
          <a href="https://www.figma.com/files/user/1193234048974614087?fuid=1193234048974614087" target='_blank'><FaFigma size={30} /></a>
          <a href="https://discord.gg/nBxxHjZr" target='_blank'><FaDiscord size={30} /></a>
        </div>
        <div className={`${main.right} df h100`}>
          <div className={`${main.navbtn} df aic cp`}>Проекты</div>
          <div className={`${main.navbtn} df aic cp`}>Опыт</div>
          <div className={`${main.navbtn} df aic cp`}>Сервис</div>
          <div className={`${main.navbtn} df aic cp h100`}>Контакты</div>
        </div>
      </div>
      <div className={`${main.header} w100 df fdc aic`}>
        <div className={`${main.me} df fdc aic w100`}>
          <div className={`${main.myname} w100 df jcc`}>
            <p>I'm Dulat</p>
          </div>
          <div className={`${main.photo} w100 df jcc`}>
            <div className={main.myphoto}>
              <BiSolidUserCircle size={175} />
              <svg xmlns="http://www.w3.org/2000/svg" width="154" height="154" viewBox="0 0 154 154" fill="none">
                <g opacity="0.77">
                  <circle cx="77" cy="77" r="77" transform="matrix(1 0 0 -1 0 154)" fill="url(#paint0_linear_1_297)" fill-opacity="0.2" />
                  <circle cx="77" cy="77" r="76.4163" transform="matrix(1 0 0 -1 0 154)" stroke="url(#paint1_linear_1_297)" stroke-opacity="0.2" stroke-width="1.16741" />
                </g>
                <defs>
                  <linearGradient id="paint0_linear_1_297" x1="77" y1="0" x2="77" y2="154" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#83828A" />
                    <stop offset="1" stop-color="#83828A" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient id="paint1_linear_1_297" x1="69.3588" y1="-59.9542" x2="94.3846" y2="98.3177" gradientUnits="userSpaceOnUse">
                    <stop stop-color="white" stop-opacity="0" />
                    <stop offset="1" stop-color="#1D172B" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className={`${main.profession} w100 df jcc aic`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="688" viewBox="0 0 1440 688" fill="none">
            <g filter="url(#filter0_f_1_292)">
              <path d="M1320.74 478.236C1365.87 447.623 1384.32 414.102 1374.38 380.79C1364.44 347.479 1326.43 315.457 1263.89 287.703C1201.34 259.948 1116.29 237.36 1016.64 222.04C916.985 206.719 805.966 199.163 693.899 200.074C581.832 200.984 472.355 210.331 375.644 227.247C278.934 244.162 198.128 268.097 140.739 296.826C83.3494 325.555 51.2388 358.146 47.3917 391.57C43.5446 424.993 68.0858 458.164 118.734 488H711.5L1320.74 478.236Z" fill="url(#paint0_radial_1_292)" />
              <path d="M1320.74 478.236C1365.87 447.623 1384.32 414.102 1374.38 380.79C1364.44 347.479 1326.43 315.457 1263.89 287.703C1201.34 259.948 1116.29 237.36 1016.64 222.04C916.985 206.719 805.966 199.163 693.899 200.074C581.832 200.984 472.355 210.331 375.644 227.247C278.934 244.162 198.128 268.097 140.739 296.826C83.3494 325.555 51.2388 358.146 47.3917 391.57C43.5446 424.993 68.0858 458.164 118.734 488H711.5L1320.74 478.236Z" fill="url(#paint1_linear_1_292)" fill-opacity="0.4" />
            </g>
            <defs>
              <filter id="filter0_f_1_292" x="-153" y="0" width="1730" height="688" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_1_292" />
              </filter>
              <radialGradient id="paint0_radial_1_292" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(616 322.625) rotate(70.6997) scale(290.452 941.811)">
                <stop stop-color="#621ABE" />
                <stop offset="1" stop-color="#24214B" stop-opacity="0" />
              </radialGradient>
              <linearGradient id="paint1_linear_1_292" x1="899.5" y1="398.795" x2="410.252" y2="378.496" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF9C54" />
                <stop offset="0.459917" stop-color="white" stop-opacity="0.540083" />
                <stop offset="1" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <p className='tac'>Junior<br />React-Frontend<br />Developer<br /></p>
        </div>
        <div className={`${main.stack} w100 df jcc`}>
          <div className={`${main.stackcontent} df`}>
            <p>Мой основной стэк:</p>
            <AiFillHtml5 size={35} style={{ color: 'rgb(255, 102, 0)' }} />
            <BiLogoCss3 size={35} style={{ color: 'rgb(0, 153, 255)' }} />
            <BiLogoJavascript size={35} style={{ color: 'rgb(239, 243, 0)' }} />
            <BiLogoReact size={35} style={{ color: 'rgb(0, 204, 255)' }} />
            <BiLogoRedux size={35} style={{ color: 'rgb(170, 0, 220)' }} />
            <BiLogoTypescript size={35} style={{ color: 'rgb(0, 149, 218)' }} />
            <FaNodeJs size={35} style={{ color: 'rgba(0, 255, 13, 0.658)' }} />
            <BiLogoSass size={35} style={{ color: 'rgb(240, 0, 200)' }} />
          </div>
        </div>
        <div className={`${main.titletext} w100`} style={{ margin: '100px 0px 10px 0px' }}>
          <p className='tac w100' style={{ fontSize: '40px' }}>Проекты:</p>
        </div>
        <div className={`${main.portfolio} w100`}>
          {arrayOfProjects.map((arr) =>
            <ProjectItem
              name={arr.name}
              text={arr.text}
              history={arr.history}
              image={arr.image}
              logo={arr.logo}
              stack={arr.stack}
              url={arr.url}
            />)}
        </div>
        <div className={`${main.experience} w100 df jcc aic`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="688" viewBox="0 0 1440 688" fill="none">
            <g filter="url(#filter0_f_1_292)">
              <path d="M1320.74 478.236C1365.87 447.623 1384.32 414.102 1374.38 380.79C1364.44 347.479 1326.43 315.457 1263.89 287.703C1201.34 259.948 1116.29 237.36 1016.64 222.04C916.985 206.719 805.966 199.163 693.899 200.074C581.832 200.984 472.355 210.331 375.644 227.247C278.934 244.162 198.128 268.097 140.739 296.826C83.3494 325.555 51.2388 358.146 47.3917 391.57C43.5446 424.993 68.0858 458.164 118.734 488H711.5L1320.74 478.236Z" fill="url(#paint0_radial_1_292)" />
              <path d="M1320.74 478.236C1365.87 447.623 1384.32 414.102 1374.38 380.79C1364.44 347.479 1326.43 315.457 1263.89 287.703C1201.34 259.948 1116.29 237.36 1016.64 222.04C916.985 206.719 805.966 199.163 693.899 200.074C581.832 200.984 472.355 210.331 375.644 227.247C278.934 244.162 198.128 268.097 140.739 296.826C83.3494 325.555 51.2388 358.146 47.3917 391.57C43.5446 424.993 68.0858 458.164 118.734 488H711.5L1320.74 478.236Z" fill="url(#paint1_linear_1_292)" fill-opacity="0.4" />
            </g>
            <defs>
              <filter id="filter0_f_1_292" x="-153" y="0" width="1730" height="688" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_1_292" />
              </filter>
              <radialGradient id="paint0_radial_1_292" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(616 322.625) rotate(70.6997) scale(290.452 941.811)">
                <stop stop-color="#621ABE" />
                <stop offset="1" stop-color="#24214B" stop-opacity="0" />
              </radialGradient>
              <linearGradient id="paint1_linear_1_292" x1="899.5" y1="398.795" x2="410.252" y2="378.496" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF9C54" />
                <stop offset="0.459917" stop-color="white" stop-opacity="0.540083" />
                <stop offset="1" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <p className='tac'>1+ года коммерческого опыта</p>
          <div className={`${main.expdiv} df fdc aic`}>
            <div className={`${main.services} df jcsb`}>
              <div className={`${main.servicediv} df jcsb aic`}>
                <GiCheckMark size={15} />
                <p>Website</p>
                <p></p>
              </div>
              <div className={`${main.servicediv} df jcsb aic`}>
                <GiCheckMark size={15} />
                <p>Socskills</p>
                <p></p>
              </div>
              <div className={`${main.servicediv} df jcsb aic`}>
                <GiCheckMark size={15} />
                <p>Productivity</p>
                <p></p>
              </div>
              <div className={`${main.servicediv} df jcsb aic`}>
                <GiCheckMark size={15} />
                <p>Teamwork</p>
                <p></p>
              </div>
              <div className={`${main.servicediv} df jcsb aic`}>
                <GiCheckMark size={15} />
                <p>Product</p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
        <div className={`${main.contact} w100 df jcc aic`}>
          <div className={`${main.contactdiv} df`}>
            <img src='/images/decoration.png' alt="decorations" className={main.decor} />
            <div className={`${main.left} w50 df fdc aifs`}>
              <div className={`${main.top} df jcfs`}>
                <div className={`${main.topme} df jcc aic`}>
                  <BiSolidUserCircle size={60} />
                  <svg xmlns="http://www.w3.org/2000/svg" width="77" height="77" viewBox="0 0 77 77" fill="none">
                    <g opacity="0.4">
                      <circle cx="38.5" cy="38.5" r="38.5" fill="url(#paint0_linear_1_194)" fill-opacity="0.2" />
                      <circle cx="38.5" cy="38.5" r="37.9542" stroke="url(#paint1_linear_1_194)" stroke-opacity="0.2" stroke-width="1.0916" />
                    </g>
                    <defs>
                      <linearGradient id="paint0_linear_1_194" x1="38.5" y1="0" x2="38.5" y2="77" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#83828A" />
                        <stop offset="1" stop-color="#83828A" stop-opacity="0" />
                      </linearGradient>
                      <linearGradient id="paint1_linear_1_194" x1="34.6794" y1="-29.9771" x2="47.1923" y2="49.1589" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" stop-opacity="0" />
                        <stop offset="1" stop-color="#1D172B" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className={`${main.servicediv} df jcc aic`}>
                  <div className={`${main.btn} df aic jcc`}>
                    <TbPointFilled size={15} />
                    <p>Готов к работе</p>
                  </div>
                </div>
              </div>
              <div className={`${main.bottom} df fdc aifs`}>
                <p>Напишите мне в любых социальных сетях</p>
                <p>Я надеюсь что моя кандидатура заинтересовала вас и вы рассмотрите меня в качестве вашего будущего работника. Я буду рад поговорить о ваших проектах и реализовать новые и интересные сайты, накапливая свой опыт на пути к становлению Сеньором!</p>
              </div>
            </div>
            <div className={`${main.right} w50 df fdc jcfe aifs`}>
              <div className={`${main.socicons} df jcse aic w100`}>
                <a href="https://twitter.com/nicsfiftyone" target='_blank'><AiOutlineTwitter size={30} /></a>
                <a href="https://www.youtube.com/@nics57OG" target='_blank'><AiFillYoutube size={30} /></a>
                <a href="https://www.figma.com/files/user/1193234048974614087?fuid=1193234048974614087" target='_blank'><FaFigma size={30} /></a>
                <a href="https://discord.gg/nBxxHjZr" target='_blank'><FaDiscord size={30} /></a>
              </div>
              <div className={`${main.rightbtn} w100 df jcc aic`}>
                <p>Let's create magic together! ✨</p>
              </div>
            </div>
          </div>
        </div>
        <div className={`${main.footer} df fdc jcc aic w100`}>
          <div className={`${main.text} df`}>
            <p>Cooked with love in <span>🇰🇿</span> with</p>
            <div className={`${main.figmaimg} df jcc aic`}>
              <img src="/images/figma.png" alt="figma" />
            </div>
          </div>
          <p className={main.endtext}>@nics57 2023</p>
        </div>
      </div>
    </div>
  )
}

export default App;