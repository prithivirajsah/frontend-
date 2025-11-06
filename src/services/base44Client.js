// Lightweight Base44 client stub to mock the requested API shape
// Replace with the actual SDK/client when available

const mockFooter = [{
  company_name: 'Car Rental',
  address: '44600 Kathmandu, Nepal',
  email: 'demo@gmail.com',
  phone: '+1012 3456 789',
  about_text: 'We provide the best rental experience with a wide range of vehicles and excellent customer support.',
  navigation_links: [
    { label: 'Home', url: '/' },
    { label: 'Vehicles', url: '#' },
    { label: 'FAQs', url: '#' },
    { label: 'Contact', url: '/contact' }
  ],
  legal_links: [
    { label: 'Privacy Policy', url: '#' },
    { label: 'Terms of Service', url: '#' }
  ],
  copyright_text: 'Exclusive rights PrithviRajSah © 2025'
}];

export const base44 = {
  entities: {
    Footer: {
      list: async () => {
        // simulate network delay
        await new Promise(r => setTimeout(r, 200));
        return mockFooter;
      }
    }
  }
};
