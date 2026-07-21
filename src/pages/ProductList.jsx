import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/CartSlice';

const plantCategories = [
  {
    name: '🌿 Indoor Plants',
    plants: [
      { id: 1, name: 'Monstera Deliciosa', price: 25.99, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=200' },
      { id: 2, name: 'Fiddle Leaf Fig', price: 35.50, image: 'https://images.unsplash.com/photo-1558602936-a0af61231275?w=200' },
      { id: 3, name: 'Snake Plant', price: 18.75, image: 'https://images.unsplash.com/photo-1593482892290-fc7e85e71d7c?w=200' },
      { id: 4, name: 'Pothos', price: 12.99, image: 'https://images.unsplash.com/photo-1593989951558-7cbf378a096e?w=200' },
      { id: 5, name: 'Peace Lily', price: 22.00, image: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=200' },
      { id: 6, name: 'ZZ Plant', price: 28.50, image: 'https://images.unsplash.com/photo-1583485088032-95b5c60e0da1?w=200' },
    ],
  },
  {
    name: '🌵 Succulents',
    plants: [
      { id: 7, name: 'Aloe Vera', price: 9.99, image: 'https://images.unsplash.com/photo-1583485088032-95b5c60e0da1?w=200' },
      { id: 8, name: 'Echeveria', price: 7.50, image: 'https://images.unsplash.com/photo-1593482892290-fc7e85e71d7c?w=200' },
      { id: 9, name: 'Jade Plant', price: 14.25, image: 'https://images.unsplash.com/photo-1558602936-a0af61231275?w=200' },
      { id: 10, name: 'Haworthia', price: 6.99, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=200' },
      { id: 11, name: 'String of Pearls', price: 16.50, image: 'https://images.unsplash.com/photo-1593989951558-7cbf378a096e?w=200' },
      { id: 12, name: 'Burro\'s Tail', price: 11.75, image: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=200' },
    ],
  },
  {
    name: '🌳 Outdoor Plants',
    plants: [
      { id: 13, name: 'Lavender', price: 12.99, image: 'https://images.unsplash.com/photo-1593482892290-fc7e85e71d7c?w=200' },
      { id: 14, name: 'Rosemary', price: 8.50, image: 'https://images.unsplash.com/photo-1558602936-a0af61231275?w=200' },
      { id: 15, name: 'Bamboo', price: 19.99, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=200' },
      { id: 16, name: 'Olive Tree', price: 45.00, image: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=200' },
      { id: 17, name: 'Citrus Tree', price: 39.50, image: 'https://images.unsplash.com/photo-1593989951558-7cbf378a096e?w=200' },
      { id: 18, name: 'Maple Tree', price: 55.00, image: 'https://images.unsplash.com/photo-1583485088032-95b5c60e0da1?w=200' },
    ],
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState({});

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedItems((prev) => ({ ...prev, [plant.id]: true }));
  };

  return (
    <div className="product-page">
      <h1 className="page-title">🌱 Our Plants</h1>

      {plantCategories.map((category) => (
        <div key={category.name} className="category-section">
          <h2 className="category-title">{category.name}</h2>
          <div className="product-grid">
            {category.plants.map((plant) => (
              <div key={plant.id} className="product-card">
                <img src={plant.image} alt={plant.name} className="product-image" />
                <h3 className="product-name">{plant.name}</h3>
                <p className="product-price">${plant.price.toFixed(2)}</p>
                <button
                  className="btn-add-cart"
                  onClick={() => handleAddToCart(plant)}
                  disabled={addedItems[plant.id]}
                >
                  {addedItems[plant.id] ? '✓ Added' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
