'use client';

import React from 'react';
import { Quantum } from 'ldrs/react';
import 'ldrs/react/Quantum.css';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] grid place-items-center bg-white">
      <Quantum size="55" speed="1.2" color="#7c3aed" />
      <span className="sr-only">Loading</span>
    </div>
  );
}


