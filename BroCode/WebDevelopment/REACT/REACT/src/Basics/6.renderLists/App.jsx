import List from './List.jsx'
import "./index.css"
function App(){
    const fruits = [
        {id: 1, name:"Kiwi", calories: 55},
        {id: 2, name:"Grapes", calories:115},
        {id: 3, name:"Apricot", calories: 22},
        {id: 4, name:"Mango", calories: 80},
        {id: 5, name:"Blackberries", calories: 75},
        {id: 6, name:"Apple", calories: 96},
        {id: 7, name:"Cantaloupe", calories: 80},
        {id: 8, name:"Cherries", calories: 85},
        {id: 9, name:"Avocado", calories: 80},
        {id: 10, name:"Blueberries", calories: 110}
    ];
    const vegetables = [
    {id: 11, name:"Carrot", calories: 41},
    {id: 12, name:"Broccoli", calories: 55},
    {id: 13, name:"Spinach", calories: 23},
    {id: 14, name:"Potato", calories: 87},
    {id: 15, name:"Tomato", calories: 22},
    {id: 16, name:"Cucumber", calories: 16},
    {id: 17, name:"Bell Pepper", calories: 31},
    {id: 18, name:"Zucchini", calories: 33},
    {id: 19, name:"Cauliflower", calories: 25},
    {id: 20, name:"Eggplant", calories: 35}
];
    return(
        <>
            {fruits.length > 0 && <List items = {fruits} category="Fruits"/>}
            {vegetables.length > 0 && <List items = {vegetables} category="Vegetables"/>}
        </>
    );
}
export default App