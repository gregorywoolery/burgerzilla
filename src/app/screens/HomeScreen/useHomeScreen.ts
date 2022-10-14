import { useState } from 'react';

const useHomeScreen = () => {
  const [orderAmount, setOrderAmount] = useState(0);

  return {
    orderAmount,
    setOrderAmount
  };
};

export default useHomeScreen;