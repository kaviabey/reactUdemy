import ExpenseItem  from './components/ExpenseItem';
function Apps() {

 const  expenses = [
 
    {
      date:new Date(2000,12,3),
      title:'Rent',
      price:10,

    },
    {
      date:new Date(2000,12,4),
      title:'Coffee',
      price:2,
    },
    {
      date:new Date(2000,12,5),
      title:'PizzaHut',
      price:5,

    },
    


  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem  date = {expenses[0].date} title = {expenses[0].title} price = {expenses[0].price}></ExpenseItem>
      <ExpenseItem date = {expenses[1].date} title = {expenses[1].title} price = {expenses[1].price}></ExpenseItem>
      <ExpenseItem  date = {expenses[2].date} title = {expenses[2].title} price = {expenses[2].price}></ExpenseItem>
      </div>
      

  );
}

export default Apps;
