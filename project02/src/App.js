import './App.css';
import MenuBox from './components/MenuBox';
import MemberBox from './components/MemberBox';
function App() {
   
      /*
      컴포넌트(Component)
      - react로 만들어진 앱을 이루는 최소 단위
      -반복되는 코드를 하나로 묶어 컴포넌트로 만든다
      -내가 원하는 코드를 묵ㄲ어서 태그화 시키는 것
      **반드시 컴포넌트는 "대문자"로 시작 html과 구분하기 위해
      */

      /*
      프로퍼티 프롭스(props)
      -상위 컴포넌트가 하위컴포넌트에 값을 전달할 때 사용
      -하위컴포넌트
      -함수의 매개변수로 object형태의 값을 전달받는다.
      const 컴포넌트이름 = (매개변수)=>{
        매개변수.속성 <= 값이 넘어온다
        }
      */
     
     let price = 3500
     let saledPrice = 3000
     let teamName ='신록'
    
  return (
    
 <div>
  
   
   <MemberBox memberName="이정훈" teamName={teamName}/>
   <MemberBox memberName="조승혁" teamName={teamName}/>
   <MemberBox memberName="임정윤" teamName={teamName}/>
   <MemberBox memberName="고원희" teamName={teamName}/>
   <MemberBox memberName="안수현" teamName={teamName}/>
   

</div>
  );
}

export default App;
