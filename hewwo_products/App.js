// BSCS 3-4
// Legaspi, Vincent
// Singson, Grace Pauline
// Villareal, Ralph Samuel

// highlights: #fd63fe
// background: #fdcffd

import React, { useEffect } from "react";
import Navigation from './routes/Drawer';
import { LogBox } from 'react-native';

export default function App() {
  /*cheat code hahaha*/
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, [])
  
  return (
    <Navigation />

  );
}
