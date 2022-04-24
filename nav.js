const Nav = () => `
  <nav>
            <a href="#" class="logo">
                     <img src="https://w7.pngwing.com/pngs/921/388/png-transparent-instagram-computer-icons-logo-instagram-text-logo-area.png"  alt="logo">
            </a>
            <input type="text" class="search" placeholder="Search">
        <span class="nav-links">
         <a href="#"><i class="fas fa-home"></i></a>
         <a href="#"><i class="fad fa-plus-circle"></i></a> 
        </span>
  </nav>
`
export default Nav;

//인스타 로고 가져오기 2번째 방법?
// import Logo from './Instagram_logo.png';
//      <a href="#" class="logo">
//                      <img src=${Logo}  alt="logo">
//      </a> 


//3. modules 내 생성된 Nav를 import 해서 내비게이션 바를 반환하세요.

import Nav from './modules/nav/Nav.js'
const App = () => {

//4. 탬플릿 리터럴을 사용해서 내비게이션 바를 렌더링한 후 return 문내에 반환하세요.
  return `
    ${Nav()}
    <div class="container">
    </div>
  
  `
}


 document.getElementById('root').innerHTML = App()