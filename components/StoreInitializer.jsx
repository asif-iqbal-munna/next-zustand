'use client'
import { useBoundStore } from '@/store/store';
import React, { useRef } from 'react';

const StoreInitializer = ({ keyName, value }) => {
  const isInitialized = useRef(false);

  if (!isInitialized.current) {
    useBoundStore.setState({
      [keyName] : value,
    });
    isInitialized.current = true;
  }
  return null;
};

export default StoreInitializer;