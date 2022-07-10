import Profil from './profil/profilcomponent'
import './App.css';
function App() {
  const HandleName = (props)=>{
      alert('The user is '+ props);
}
  return (
    <div className="App">
      <div className='container card  shadow-lg p-3 mb-5 bg-body rounded mt-5 w-25'>
        <Profil fullname='Flen ben Foulen' bio='I am too shy to talk' profession='Student' handle={HandleName}>
          <img className='w-75' src="https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1606/tuktukdesign160600119/59070200-user-icon-man-profil-homme-d-affaires-avatar-personne-ic%C3%B4ne-illustration-vectorielle.jpg" alt="Profil" />
        </Profil>
      </div>
    </div>
  );
}

export default App;
