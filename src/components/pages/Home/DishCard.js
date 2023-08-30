const DishList = () => {
  const menuList = [
    {
      id: 1,
      title: "Hummus",
      price: 8.99,
      description:
        "A creamy blend of chickpeas, tahini, lemon, and garlic, served with pita bread.",
    },
    {
      id: 2,
      title: "Falafel Wrap",
      price: 10.99,
      description:
        "Crispy falafel balls wrapped in pita bread with fresh veggies and tahini sauce.",
    },
    {
      id: 3,
      title: "Greek Salad",
      price: 9.49,
      description:
        "A refreshing mix of tomatoes, cucumbers, red onions, olives, and feta cheese.",
    },
    {
      id: 4,
      title: "Moussaka",
      price: 12.99,
      description:
        "Layers of eggplant, ground meat, and béchamel sauce, baked to perfection.",
    },
    {
      id: 5,
      title: "Shawarma Plate",
      price: 14.99,
      description:
        "Grilled marinated meat slices served with rice, salad, and garlic sauce.",
    },
    // Add more dishes here...
  ];
  return (
    <div className="menu flow">
      <h2>Popular dishes</h2>
      <ul className="dish-list flow">
        {menuList.map((dish) => (
          <li key={dish.id} className="dish-item">
            <h3>{dish.title}</h3>
            <p className="price">${dish.price.toFixed(2)}</p>
            <p>{dish.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DishList;
