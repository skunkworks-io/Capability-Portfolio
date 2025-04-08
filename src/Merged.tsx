import { useState } from 'react';

// interface Capability {
//   id: number;
//   title: string;
//   icon: string;
//   color: string;
//   products: string[];
//   description: string;
//   keyCapability: string;
// }

const CapabilityCards = () => {
  // ... CapabilityCards component code remains the same
  const capabilities = [
    {
      id: 1,
      title: "Analytics Solutions",
      icon: "📊",
      color: "#8a3ffc",
      products: ["Cognos Analytics", "Planning Analytics", "SPSS Modeler"],
      description: "Enterprise BI, dashboarding, and predictive analytics solutions",
      keyCapability: "BI Dashboarding & KPI Reporting"
    },
    {
      id: 2,
      title: "IBM Cloud Pak for Data",
      icon: "☁️",
      color: "#1192e8",
      products: ["CP4D", "watsonx.ai", "watsonx.data"],
      description: "Cloud-native deployment on Red Hat OpenShift with AI model lifecycle management",
      keyCapability: "MLOps, DataOps, and Model Management"
    },
    {
      id: 3,
      title: "Digital Business Automation",
      icon: "⚙️",
      color: "#ee538b",
      products: ["Cloud Pak for Business Automation", "FileNet Content Manager"],
      description: "End-to-end process automation with content management",
      keyCapability: "Business Process Modeling & Optimization"
    },
    {
      id: 4,
      title: "Watson AI & AIOps",
      icon: "🤖",
      color: "#0f62fe",
      products: ["watsonx.ai", "Cloud Pak for AIOps", "watsonx.governance"],
      description: "Enterprise AI with foundation models and AIOps for IT operations",
      keyCapability: "LLM Deployment and Prompt Engineering"
    },
    {
      id: 5,
      title: "IBM Security Services",
      icon: "🛡️",
      color: "#da1e28",
      products: ["Guardium Data Protection", "QRadar SIEM", "X-Force"],
      description: "Comprehensive security services for data, identity, and threat management",
      keyCapability: "Threat Intelligence Correlation"
    },
    {
      id: 6,
      title: "Systems & Mainframe",
      icon: "💻",
      color: "#4589ff",
      products: ["IBM Power Systems", "Storage Management", "z/OS"],
      description: "Enterprise computing systems, storage, and mainframe solutions",
      keyCapability: "Mission-critical infrastructure management"
    }
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-center mb-8">Skunkworks Capability Portfolio</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {capabilities.map(capability => (
          <div 
            key={capability.id} 
            className="rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px]"
            style={{ borderTop: `4px solid ${capability.color}` }}
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{capability.icon}</span>
                <h3 className="text-xl font-bold">{capability.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-4">{capability.description}</p>
              
              <div className="mb-4">
                <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Key Products</h4>
                <div className="flex flex-wrap gap-2">
                  {capability.products.map((product, idx) => (
                    <span 
                      key={idx} 
                      className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
                    >
                      {product}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Highlight Capability</h4>
                <div 
                  className="p-3 rounded-md font-medium text-sm"
                  style={{ backgroundColor: `${capability.color}15`, color: capability.color }}
                >
                  {capability.keyCapability}
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 px-6 py-4 flex justify-end">
              <button 
                className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                style={{ color: capability.color }}
              >
                Explore Capability →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const FilterableCapabilities = () => {
  // ... FilterableCapabilities component code remains the same
  
    const [activeFilter, setActiveFilter] = useState('all');
    
    // Sample categories for filtering
    const categories = [
      { id: 'all', name: 'All Capabilities' },
      { id: 'analytics', name: 'Analytics' },
      { id: 'ai', name: 'AI & Watson' },
      { id: 'security', name: 'Security' },
      { id: 'automation', name: 'Automation' },
      { id: 'systems', name: 'Systems & Power' },
      { id: 'sustainability', name: 'Sustainability' }
    ];
    
    // Sample capabilities data from your deck
    const capabilities = [
      {
        id: 1,
        title: 'Cognos Analytics',
        category: 'analytics',
        description: 'BI Dashboarding & KPI Reporting',
        icon: '📊',
        color: '#8a3ffc'
      },
      {
        id: 2,
        title: 'watsonx.ai',
        category: 'ai',
        description: 'LLM Deployment and Prompt Engineering',
        icon: '🤖',
        color: '#1192e8'
      },
      {
        id: 3,
        title: 'Guardium Data Protection',
        category: 'security',
        description: 'Sensitive Data Discovery & Classification',
        icon: '🛡️',
        color: '#da1e28'
      },
      {
        id: 4,
        title: 'Maximo Application Suite',
        category: 'sustainability',
        description: 'Smart Asset Lifecycle & Predictive Maintenance',
        icon: '🌱',
        color: '#24a148'
      },
      {
        id: 5,
        title: 'IBM Power Systems',
        category: 'systems',
        description: 'Enterprise computing with AIX, IBM i and Linux',
        icon: '💻',
        color: '#4589ff'
      },
      {
        id: 6,
        title: 'Cloud Pak for Business Automation',
        category: 'automation',
        description: 'Business Process Modeling & Optimization',
        icon: '⚙️',
        color: '#ee538b'
      }
    ];
    
    // Filter capabilities based on selected category
    const filteredCapabilities = activeFilter === 'all' 
      ? capabilities 
      : capabilities.filter(cap => cap.category === activeFilter);
    
    return (
      <div className="w-full max-w-4xl mx-auto">
        {/* Filter Controls */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCapabilities.map(capability => (
            <div 
              key={capability.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div 
                className="p-4 text-white"
                style={{ backgroundColor: capability.color }}
              >
                <div className="text-3xl mb-2">{capability.icon}</div>
                <h3 className="text-lg font-bold">{capability.title}</h3>
              </div>
              <div className="p-4">
                <p className="text-gray-700">{capability.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm font-medium px-2 py-1 bg-gray-100 rounded-full">
                    {categories.find(cat => cat.id === capability.category)?.name ?? 'Unknown Category'}
                  </span>
                  <button className="text-blue-600 hover:text-blue-800 font-medium">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredCapabilities.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No capabilities found in this category
          </div>
        )}
      </div>
    );
  
};

const ProductComparisonTable = () => {
  // ... ProductComparisonTable component code remains the same
  
    type CategoryKey = 'analytics' | 'ai' | 'security' | 'automation';
    const [selectedCategory, setSelectedCategory] = useState<CategoryKey>('analytics');
    
    const categories = [
      { id: 'analytics', name: 'Analytics' },
      { id: 'ai', name: 'AI & Watson' },
      { id: 'security', name: 'Security' },
      { id: 'automation', name: 'Automation' }
    ];
    
    // Sample comparison data
    const comparisonData = {
      analytics: {
        title: "Analytics Products",
        description: "Compare IBM's analytics solutions to find the best fit for your needs",
        products: [
          {
            name: "Cognos Analytics",
            description: "Enterprise BI & reporting platform",
            deploymentOptions: ["Cloud", "On-Premise", "Hybrid"],
            idealFor: "Enterprise reporting & dashboards",
            keyFeature: "Self-service analytics with AI assistance",
            pricing: "Subscription-based"
          },
          {
            name: "Planning Analytics",
            description: "Enterprise planning & analysis",
            deploymentOptions: ["Cloud", "On-Premise"],
            idealFor: "Financial planning & forecasting",
            keyFeature: "Multi-dimensional analysis",
            pricing: "Subscription-based"
          },
          {
            name: "SPSS Modeler",
            description: "Predictive analytics platform",
            deploymentOptions: ["Cloud", "On-Premise", "CP4D"],
            idealFor: "Predictive modeling & ML",
            keyFeature: "Visual modeling interface",
            pricing: "Subscription or perpetual"
          }
        ],
        compareAttributes: [
          "deploymentOptions",
          "idealFor",
          "keyFeature",
          "pricing"
        ]
      },
      ai: {
        title: "AI & Watson Products",
        description: "Compare IBM's AI solutions to find the best fit for your needs",
        products: [
          {
            name: "watsonx.ai",
            description: "LLM & AI foundation models",
            deploymentOptions: ["Cloud", "CP4D"],
            idealFor: "Natural language processing & generation",
            keyFeature: "Foundation models with prompt engineering",
            pricing: "Consumption-based"
          },
          {
            name: "Watson Orchestrate",
            description: "AI-driven process automation",
            deploymentOptions: ["Cloud"],
            idealFor: "Digital workforce automation",
            keyFeature: "AI-powered process orchestration",
            pricing: "Subscription-based"
          }
        ],
        compareAttributes: [
          "deploymentOptions",
          "idealFor",
          "keyFeature",
          "pricing"
        ]
      },
      security: {
        // Security products data
        title: "Security Products",
        description: "Compare IBM's security solutions",
        products: [
          {
            name: "Guardium Data Protection",
            description: "Data security & compliance",
            deploymentOptions: ["On-Premise", "Cloud"],
            idealFor: "Data protection & compliance",
            keyFeature: "Real-time data monitoring",
            pricing: "Subscription-based"
          },
          {
            name: "QRadar SIEM",
            description: "Security information & event management",
            deploymentOptions: ["On-Premise", "Cloud", "Hybrid"],
            idealFor: "Threat detection & response",
            keyFeature: "AI-powered threat analytics",
            pricing: "Subscription or perpetual"
          }
        ],
        compareAttributes: [
          "deploymentOptions",
          "idealFor",
          "keyFeature",
          "pricing"
        ]
      },
      automation: {
        // Automation products data
        title: "Automation Products",
        description: "Compare IBM's automation solutions",
        products: [
          {
            name: "Cloud Pak for Business Automation",
            description: "Comprehensive automation platform",
            deploymentOptions: ["Cloud", "On-Premise"],
            idealFor: "End-to-end process automation",
            keyFeature: "Integrated workflow, decisions & content",
            pricing: "Subscription-based"
          },
          {
            name: "Robotic Process Automation",
            description: "Digital worker automation",
            deploymentOptions: ["Cloud", "On-Premise"],
            idealFor: "Repetitive task automation",
            keyFeature: "No-code bot development",
            pricing: "Per-bot licensing"
          }
        ],
        compareAttributes: [
          "deploymentOptions",
          "idealFor", 
          "keyFeature",
          "pricing"
        ]
      }
    };
    
    const currentCategory = comparisonData[selectedCategory];
    
    // Helper to format deployment options
    const formatDeploymentOptions = (options: string[]) => {
      return options.map((option, index) => (
        <span 
          key={index} 
          className={`inline-block px-2 py-1 mr-1 rounded-full text-xs font-medium 
            ${option === 'Cloud' ? 'bg-blue-100 text-blue-800' : 
              option === 'On-Premise' ? 'bg-green-100 text-green-800' : 
              option === 'Hybrid' ? 'bg-purple-100 text-purple-800' : 
              option === 'CP4D' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'}`}
        >
          {option}
        </span>
      ));
    };
    
    const renderAttributeValue = (product: { [key: string]: any }, attribute: string) => {
      if (attribute === 'deploymentOptions') {
        return formatDeploymentOptions(product[attribute]);
      }
      return product[attribute];
    };
  
    return (
      <div className="w-full max-w-4xl mx-auto">
        {/* Category Selector */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setSelectedCategory(category.id as CategoryKey)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Comparison Title */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">{currentCategory.title}</h2>
          <p className="text-gray-600">{currentCategory.description}</p>
        </div>
        
        {/* Comparison Table */}
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                {currentCategory.compareAttributes.map(attr => (
                  <th 
                    key={attr} 
                    scope="col" 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {attr === 'deploymentOptions' ? 'Deployment' : 
                     attr === 'idealFor' ? 'Ideal For' :
                     attr === 'keyFeature' ? 'Key Feature' : 
                     attr}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentCategory.products.map((product, idx) => (
                <tr key={product.name} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                  <td className="px-6 py-4">
                                    <div className="font-medium text-gray-900">{product.name}</div>
                                    <div className="text-gray-500 text-sm">{product.description}</div>
                                  </td>
                                  {currentCategory.compareAttributes.map(attr => (
                                    <td key={attr} className="px-6 py-4">
                                      {renderAttributeValue(product, attr)}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    );
};

// Export all components
export { CapabilityCards, FilterableCapabilities, ProductComparisonTable };
