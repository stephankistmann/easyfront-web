import React from 'react';

import { AuthProvider } from './auth';
import { ToastProvider } from './toast';
import { SuperunitProvider } from './superunit';

const AppProvider: React.FC = ({ children }) => (
  <ToastProvider>
    <AuthProvider>
      <SuperunitProvider>{children}</SuperunitProvider>
    </AuthProvider>
  </ToastProvider>
);

export default AppProvider;
