'use client'
import React, { useEffect, useState } from 'react';
import Cart from './Cart';
import { useBoundStore } from '@/store/store';

const Header = async () => {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  const { products, carts, priceCart} = useBoundStore()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted){
    return
  }

  return (
    <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
      <p className="fixed bottom-0  text-xl left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        Products ({products.length})
      </p>
      <div className='flex items-center gap-4'>
        <div className="cursor-pointer fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          {"Products Price < 100"}
        </div>
        <div className="cursor-pointer fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          {"Products Price > 100"}
        </div>
      </div>
      <div className='flex items-center gap-3'>
        <div onClick={() => setOpen(true)} className="cursor-pointer fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Cart: {carts.length}
        </div>
        <div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Total Price: {priceCart.toFixed(2)}
        </div>
      </div>
      <Cart open={open} setOpen={setOpen} />
    </div>
  );
};

export default Header;