// import logo from './logo.svg';
import './App.css';
import Avatar from './components/Avatar';
import Profile from './components/Profile';




function AppProfile() {
  const handelclick = (event) => {
    console.log(event);
    alert("버튼이 클릭됨");

  }
  
  return(
  <>
  <button onClick={handelclick}>버튼</button>
  
  <Avatar image="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3348&q=80"
  isNew={true}/>
  <Profile image="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3348&q=80"
  name="tommy"
  title="프론트엔드강아지"
  isNew={true}
  />
  <Profile image="https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=770&q=80"
  name="jem"
  title="프론트엔드강아지"
  />
  <Profile image="https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
  name="ally"
  title="프론트엔드강아지"
  />

   </>
   );
} 

export default AppProfile;
