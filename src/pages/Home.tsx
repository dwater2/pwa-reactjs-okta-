import React from 'react';
import { Home as HomeIcon, Users, Settings, HelpCircle } from 'lucide-react';

const menuItems = [
  { icon: HomeIcon, title: 'Início', description: 'Voltar para a página inicial' },
  { icon: Users, title: 'Usuários', description: 'Gerenciar usuários do sistema' },
  { icon: Settings, title: 'Configurações', description: 'Ajustes do sistema' },
  { icon: HelpCircle, title: 'Ajuda', description: 'Suporte e documentação' },
];

function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-900">Bem-vindo!</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {menuItems.map((item) => (
          <button
            key={item.title}
            className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition group"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-3 bg-slate-900 text-white rounded-full group-hover:scale-110 transition">
                <item.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-600 mt-1">{item.description}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Home;