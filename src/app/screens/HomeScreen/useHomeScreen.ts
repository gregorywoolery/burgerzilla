import { useState } from 'react';

const useHomeScreen = ( navigation ) => {
  const [orderAmount, setOrderAmount] = useState(0);

  const predefinedMenu = [
    {
      name: 'Whozzer',
      price: '$ 599.00',
    },
    {
      name: 'Bacon Double LX',
      price: '$ 1,255.00',
    },
    {
      name: 'Chicken Burger',
      price: '$ 1999.00',
    },
    {
      name: 'Bacon King',
      price: '$ 877.00',
    },
    {
      name: 'Chicken Chilli Cheese',
      price: '$ 988.00',
    },
  ];

  return {
    orderAmount,
    setOrderAmount,
    predefinedMenu
  };
};

export default useHomeScreen;