import React from 'react';
import { X } from 'lucide-react';

interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: any;
}

function UserModal({ isOpen, onClose, user }: UserModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Perfil do Usuário</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-4 space-y-4">
          <div className="flex items-center justify-center">
            <div className="bg-slate-900 text-white p-6 rounded-full">
              <User className="h-12 w-12" />
            </div>
          </div>
          
          <div className="space-y-2">
            <p><strong>Nome:</strong> {user?.name}</p>
            <p><strong>Email:</strong> {user?.email}</p>
            <p><strong>Último login:</strong> {new Date(user?.auth_time * 1000).toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserModal;