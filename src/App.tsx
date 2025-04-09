import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { CapabilityCards, FilterableCapabilities, ProductComparisonTable } from './Merged.tsx';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header bg-primary text-white p-3">
        <h1>Skunkworks Capability Portfolio</h1>
      </header>
      <main>
        <CapabilityCards />
        <FilterableCapabilities />
        <ProductComparisonTable />
      </main>
    </div>
  );
};

export default App;
