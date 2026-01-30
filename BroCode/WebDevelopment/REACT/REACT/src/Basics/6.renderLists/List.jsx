import PropTypes from 'prop-types'

function List({
    category = "Category",
    items = [],
}){

    const itemList = items;
    const categoryTitle = category;   // ✅ FIXED: now uses the category prop

    /*const fruits = [
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
    ];*/

    //fruits.sort((a, b) => a.name.localeCompare(b.name)); //ALPHABETICAL
    //fruits.sort((a, b) => a.calories - b.calories); // NUMERIC

    //const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

    /*const listItems = lowCalFruits.map(lowCalFruits => <li key={lowCalFruits.id}>
        {lowCalFruits.name}: &nbsp;
        <b>{lowCalFruits.calories}</b></li>);
    */

    //const highCalFruits = fruits.filter(fruit => fruit.calories > 100);

    /*const listItems = highCalFruits.map(highCalFruits => <li key={highCalFruits.id}>
        {highCalFruits.name}: &nbsp;
        <b>{highCalFruits.calories}</b></li>);
    */

    /*const listItems = fruits.map(fruit => <li key={fruit.id}>
        {fruit.name}: &nbsp;
        <b>{fruit.calories}</b></li>); */

    const listItems = itemList.map(fruit => (
        <li key={fruit.id}>
            {fruit.name}: &nbsp;
            <b>{fruit.calories}</b>
        </li>
    ));

    // NOW LIST IS A REUSABLE COMPONENT WHEN USED IN APP.JSX
    return(
        <>
            <h3 className="listCategory">{categoryTitle}</h3>
            <ol className="listItems">{listItems}</ol>
        </>
    );
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            calories: PropTypes.number
        })
    ),
};

export default List;
