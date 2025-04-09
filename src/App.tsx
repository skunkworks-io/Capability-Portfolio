// Option 1: Import Bootstrap in main.tsx instead of App.tsx
// In main.tsx, add this line before your React imports:
import 'bootstrap/dist/css/bootstrap.min.css';

// Option 2: Use a CDN link in index.html instead of importing
// In index.html, add this line in the <head> section:
<link 
  rel="stylesheet" 
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" 
  integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" 
  crossorigin="anonymous"
/>

// Option 3: Update your App.tsx to use a dynamic import
// In App.tsx, replace the direct import with:
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Dynamically import Bootstrap CSS
    import('bootstrap/dist/css/bootstrap.min.css')
      .catch(err => console.error('Bootstrap CSS could not be loaded', err));
  }, []);
  
  return (
    // Your component JSX
  );
}

export default App;
