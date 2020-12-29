import React from 'react';

import { AuthProvider } from './auth';
import { ToastProvider } from './toast';
import { SuperunitProvider } from './superunit';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ToastProvider>
      <SuperunitProvider>{children}</SuperunitProvider>
    </ToastProvider>
  </AuthProvider>
);

export default AppProvider;
