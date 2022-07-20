import './App.css';
import Customer from './components/Customers';

const customers =[
  {
  'id':1,
  'name':'홍길동',
  'birthday':'980822',
  'gender':'남자',
  'gob':'대학생'
},
{
  'id':2,
  'name':'박효진',
  'birthday':'980422',
  'gender':'여자',
  'gob':'졸업생'
},
{
  'id':3,
  'name':'김제니',
  'birthday':'930822',
  'gender':'여자',
  'gob':'아이돌'
}

]

function App() {
  return (
    <div>
{
  customers.map(c => {
    return(
      <Customer 
      key={c.id}
      id={c.id}
      name={c.name}
      birthday={c.birthday}
      gender={c.gender}
      gob={c.gob}
      />
    )
  })
}
     
    
    </div>
  );
}

export default App;
