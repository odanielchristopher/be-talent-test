# BeTalent - Frontend Test

## 🚀 Projeto de Gestão de Funcionários

Aplicação **React + TypeScript** organizada de forma modular, com foco em **escalabilidade, boas práticas e legibilidade**.
Foram aplicados padrões como **Composition Pattern**, **Data Mappers**, **Custom Hooks** e **Context API** para manter a arquitetura limpa e reutilizável.

---

### 📂 Estrutura de Pastas

```plaintext
src/
├── app/                 # Lógica de aplicação
│   ├── entities/        # Entidades de domínio (Employee, etc.)
│   ├── hooks/           # Hooks reutilizáveis (useMediaQuery, useHomeController)
│   ├── services/        # Comunicação com API (httpClient axios-like, datamappers)
│   ├── contexts/        # Contextos globais
│   ├── errors/          # Erros customizados
│   ├── datamappers/     # Classes de mapeamento das entidades de domínio e persistência
│   ├── types/           # Tipos globais e reutilizados
│   └── utils/           # Funções utilitárias
│
├── views/               # Interface do usuário
│   ├── components/      # Componentes reutilizáveis (Button, Popover, Table, etc.)
│   ├── layouts/         # Layouts de página (Header, Sidebar, etc.)
│   ├── pages/           # Páginas (Home, Employees, etc.)
│   └── styles/          # Estilos globais (themes, globalStyles, etc.)
│
└── index.tsx            # Ponto de entrada
```

---

### 🛠️ Tecnologias

- Frontend: React, TypeScript, Styled-components
- Build: Vite
- Qualidade: ESLint, Prettier, Husky + Git Hooks (conventional commits)
- Arquitetura:
  - Separação em app (lógica/domínio) e views (UI)
  - Componentes desacoplados via Composition Pattern
  - Custom Hooks para isolar regras de negócio

---

### 🎨 Principais Padrões

#### ✅ Custom Hook de Request à API

```typescript
export function useEmployees({ enable }: IUseEmplyeesInput = { enable: true }) {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const loadEmployees = useCallback(async () => {
    try {
      setHasError(false);
      setIsLoading(true);

      await sleep(2000);
      const employeeList = await employeesService.getAll();

      setEmployees(employeeList);
    } catch {
      setHasError(true);
      setEmployees([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (enable) loadEmployees();
  }, [loadEmployees, enable]);

  return {
    employees,
    isLoading,
    hasError,
    refetch: loadEmployees,
  };
}
```

#### ✅ Composition Pattern em Componentes

```tsx
<Table>
  <Table.Head>
    <Table.Row>
      <Table.Cell>Name</Table.Cell>
      <Table.Cell>Job</Table.Cell>
    </Table.Row>
  </Table.Head>
  <Table.Body>
    {employees.map((e) => (
      <Table.Row key={e.id}>
        <Table.Cell>{e.name}</Table.Cell>
        <Table.Cell>{e.job}</Table.Cell>
      </Table.Row>
    ))}
  </Table.Body>
</Table>
```

#### ✅ Accordion com Context + Portal

```tsx
<Accordion.Root>
  <Accordion.Trigger>Open</Accordion.Trigger>
  <Accordion.Content>
    <EmployeeInfos />
  </Accordion.Content>
</Accordion.Root>
```

#### 🐳 Docker Compose

O docker-compose.yml criado já está configurado para:

- Usar a imagem node:20-alpine
- Instalar dependências automaticamente
- Rodar o projeto com Vite em localhost:5173
- Montar o volume para hot reload no desenvolvimento

---

#### 🔄 Fluxo da Aplicação

1. Carregamento de dados → via httpClient customizado e datamappers
2. Exibição → componentes em views/components e views/pages
3. Interação → controlada via hooks (useHomeController) e contextos

### 🚀 Como executar o projeto

Você pode rodar o frontend **com Docker** (forma mais simples, sem precisar instalar dependências locais) ou **sem Docker** (usando Node.js instalado na máquina).

---

#### ▶️ Rodando com Docker

1. Clone o repositório:
   ```bash
    git clone git@github.com:odanielchristopher/be-talent-test.git
   # ou
   git clone https://github.com/odanielchristopher/be-talent-test.git
   ```

2. Faça o build da imagem e suba o container
   ```bash
   docker compose up --build
   ```
3. O projeto estará disponível em:
   ```bash
   👉 http://localhost:5173
   ```
   
#### ▶️ Rodando sem Docker

1. Clone o repositório:
   ```bash
    git clone git@github.com:odanielchristopher/be-talent-test.git
    # ou
    git clone https://github.com/odanielchristopher/be-talent-test.git
   ```
2. Instale as dependências:
   ```bash
    pnpm install
    # ou
    npm install
    # ou
    yarn install
   ```
3. Adicione a variável de ambiente:
   ```sql
    VITE_API_URL="http://localhost:3001"
   ```
4. Inicie a api de desenvolvimento:
   ```bash
    pnpm start:api
    # ou
    npm run start:api
    # ou
    yarn start:api
   ```
5. Inicie o servidor de desenvolvimento:
   ```bash
    pnpm dev
    # ou
    npm run dev
    # ou
    yarn dev
   ```
6. O projeto estará disponível em:
   ```bash
   👉 http://localhost:5173
   ```
   
---

#### 👨‍💻 Autor

Feito com 💙 por **Daniel Christopher Souza Rodrigues**
