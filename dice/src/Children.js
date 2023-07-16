import React from 'react';

//children [단일태그가 아니라, 반드시 열고 닫고 사이에 구현]

// function Button({children}){
// return <button>{children}</button>
// }

// export default function Children() {
//   return (
//     <div>
//       <Button>Click Me!</Button>
//       <Button>Submit</Button>
//       <Button>Cencle</Button>

//     </div>
//   );
// }


function Menu({children,url}){
    return <li><a href={url}>{children}</a></li>
    }
    
    export default function Children() {
      return (
        <div>
          <Menu url='https://www.google.com/'>구글 바로가기</Menu>
          <Menu url='https://www.naver.com/'>네이버 바로가기</Menu>
          <Menu url='https://www.daum.net/'>다음 바로가기</Menu>
        </div>
      );
    }
    