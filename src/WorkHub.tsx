import React, { useState } from 'react';
import { ArrowLeft, Upload, X, FileText, Image, Archive } from 'lucide-react';

interface WorkHubProps {
  onBack: () => void;
}

const WorkHub: React.FC<WorkHubProps> = ({ onBack }) => {
  const [selectedWork, setSelectedWork] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [withdrawalMethod, setWithdrawalMethod] = useState('');
  const [withdrawalAccount, setWithdrawalAccount] = useState('');
  const [email, setEmail] = useState('');

  const jobs = [
    {
      id: 1,
      title: 'Facebook Account Creation',
      description: 'Create professional Facebook business accounts with complete profile setup and verification.',
      instructions: [
        'Create business Facebook account',
        'Complete profile with provided details',
        'Upload profile and cover photos',
        'Verify account via phone/email'
      ],
      income: '$25',
      category: 'Social Media',
      platform: 'Facebook',
      timeEstimate: '2 hours',
      paymentMethod: 'PayPal',
      badge: 'New',
      badgeColor: 'bg-green-500'
    },
    {
      id: 2,
      title: 'Instagram Content Posting',
      description: 'Post engaging content on Instagram accounts with proper hashtags and scheduling.',
      instructions: [
        'Post provided images/videos',
        'Add relevant hashtags (15-20)',
        'Write engaging captions',
        'Schedule posts at optimal times'
      ],
      income: '$15',
      category: 'Social Media',
      platform: 'Instagram',
      timeEstimate: '1 hour',
      paymentMethod: 'Bkash',
      badge: 'Popular',
      badgeColor: 'bg-orange-500'
    },
    {
      id: 3,
      title: 'Data Entry Task',
      description: 'Enter customer data from PDF files into Excel spreadsheets with accuracy.',
      instructions: [
        'Download provided PDF files',
        'Extract customer information',
        'Input data into Excel template',
        'Verify accuracy before submission'
      ],
      income: '$40',
      category: 'Data Entry',
      platform: 'Excel',
      timeEstimate: '3 hours',
      paymentMethod: 'Bank Transfer',
      badge: 'High Paying',
      badgeColor: 'bg-purple-500'
    },
    {
      id: 4,
      title: 'Website Content Writing',
      description: 'Write SEO-optimized content for business websites and landing pages.',
      instructions: [
        'Research target keywords',
        'Write 500-800 word articles',
        'Include SEO best practices',
        'Proofread for grammar/spelling'
      ],
      income: '$30',
      category: 'Content Creation',
      platform: 'Website',
      timeEstimate: '4 hours',
      paymentMethod: 'PayPal',
      badge: 'Urgent',
      badgeColor: 'bg-red-500'
    },
    {
      id: 5,
      title: 'YouTube Video Editing',
      description: 'Edit raw footage into engaging YouTube videos with transitions and effects.',
      instructions: [
        'Download raw video files',
        'Add intro/outro templates',
        'Include background music',
        'Export in 1080p quality'
      ],
      income: '$50',
      category: 'Video Editing',
      platform: 'YouTube',
      timeEstimate: '5 hours',
      paymentMethod: 'Nagad',
      badge: 'New',
      badgeColor: 'bg-green-500'
    },
    {
      id: 6,
      title: 'Logo Design',
      description: 'Create professional logos for small businesses and startups.',
      instructions: [
        'Review brand requirements',
        'Create 3 logo concepts',
        'Provide vector files (AI/SVG)',
        'Include color variations'
      ],
      income: '$35',
      category: 'Graphic Design',
      platform: 'Design Software',
      timeEstimate: '6 hours',
      paymentMethod: 'Rocket',
      badge: 'Popular',
      badgeColor: 'bg-orange-500'
    }
  ];

  const selectWork = (workTitle: string) => {
    setSelectedWork(workTitle);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setUploadedFiles(prev => [...prev, ...files]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert('Work submitted successfully! You will receive confirmation and payment details soon.');
    // Reset form
    setSelectedWork('');
    setUploadedFiles([]);
    setWithdrawalMethod('');
    setWithdrawalAccount('');
    setEmail('');
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Social Media':
        return '📱';
      case 'Data Entry':
        return '📊';
      case 'Content Creation':
        return '✍️';
      case 'Video Editing':
        return '🎬';
      case 'Graphic Design':
        return '🎨';
      default:
        return '💼';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={onBack}
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Portfolio</span>
              </button>
              <div className="border-l border-gray-300 pl-4">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Work Hub
                </h1>
                <p className="text-gray-500 text-sm">Professional Job Listings & Task Management</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Available Work Opportunities
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Browse through available tasks and submit your completed work
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <div className="bg-white px-4 py-2 rounded-lg shadow-sm border">
              <span className="text-2xl font-bold text-blue-600">12</span>
              <p className="text-sm text-gray-500">Active Jobs</p>
            </div>
            <div className="bg-white px-4 py-2 rounded-lg shadow-sm border">
              <span className="text-2xl font-bold text-green-600">$2,450</span>
              <p className="text-sm text-gray-500">Total Earnings</p>
            </div>
            <div className="bg-white px-4 py-2 rounded-lg shadow-sm border">
              <span className="text-2xl font-bold text-purple-600">8</span>
              <p className="text-sm text-gray-500">Completed</p>
            </div>
          </div>
        </section>

        {/* Job Listings */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold text-gray-800">Job Listings</h3>
            <div className="flex space-x-2">
              <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                <option>All Categories</option>
                <option>Social Media</option>
                <option>Data Entry</option>
                <option>Content Creation</option>
                <option>Video Editing</option>
                <option>Graphic Design</option>
              </select>
              <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                <option>Sort by: Latest</option>
                <option>Sort by: Highest Pay</option>
                <option>Sort by: Deadline</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 transition-all duration-300 cursor-pointer hover:shadow-md hover:-translate-y-1"
                onClick={() => openModal(job.title)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-lg">
                      {getCategoryIcon(job.category)}
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold text-white ${job.badgeColor}`}>
                      {job.badge}
                    </span>
                  </div>
                  <span className="text-lg font-bold text-green-600">{job.income}</span>
                </div>
                
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{job.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{job.description}</p>
                
                <div className="space-y-2 mb-4">
                  <h5 className="font-medium text-gray-700 text-sm">Instructions:</h5>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {job.instructions.map((instruction, i) => (
                      <li key={i}>• {instruction}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{getCategoryIcon(job.category)} {job.category}</span>
                  <span>⏰ {job.timeEstimate}</span>
                  <span>💰 {job.paymentMethod}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Work Submission Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-800">Submit Your Work</h3>
                <button onClick={closeModal} className="text-gray-400 hover:text-gray-600">
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
            
            <form className="p-6 space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Which work did you complete?</label>
                <select 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                  required
                  value={selectedWork}
                  onChange={(e) => setSelectedWork(e.target.value)}
                >
                  <option value="">Select completed work...</option>
                  {jobs.map((job) => (
                    <option key={job.id} value={job.title}>{job.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Work Type</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required>
                  <option value="">Select work type...</option>
                  <option value="Social Media Management">Social Media Management</option>
                  <option value="Data Entry">Data Entry</option>
                  <option value="Content Creation">Content Creation</option>
                  <option value="Video Editing">Video Editing</option>
                  <option value="Graphic Design">Graphic Design</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Platform</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required>
                  <option value="">Select platform...</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Instagram">Instagram</option>
                  <option value="YouTube">YouTube</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Twitter">Twitter</option>
                  <option value="TikTok">TikTok</option>
                  <option value="Website">Website</option>
                  <option value="Email">Email</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Upload Attachment</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                  <input 
                    type="file" 
                    id="fileUpload" 
                    className="hidden" 
                    multiple 
                    accept=".jpg,.jpeg,.png,.pdf,.doc,.docx,.zip,.rar" 
                    onChange={handleFileUpload}
                  />
                  <label htmlFor="fileUpload" className="cursor-pointer">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">Click to upload files or drag and drop</p>
                    <p className="text-sm text-gray-400 mt-1">Support: Images, Documents, ZIP files (Max 500MB)</p>
                  </label>
                </div>
                
                {uploadedFiles.length > 0 && (
                  <div className="mt-3 space-y-2">
                    {uploadedFiles.map((file, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded border">
                        <div className="flex items-center space-x-2">
                          {file.type.startsWith('image/') ? (
                            <Image className="w-4 h-4 text-gray-500" />
                          ) : file.type.includes('zip') || file.type.includes('rar') ? (
                            <Archive className="w-4 h-4 text-gray-500" />
                          ) : (
                            <FileText className="w-4 h-4 text-gray-500" />
                          )}
                          <span className="text-sm text-gray-700">{file.name}</span>
                          <span className="text-xs text-gray-500">({(file.size / (1024 * 1024)).toFixed(2)} MB)</span>
                        </div>
                        <button 
                          type="button" 
                          onClick={() => removeFile(index)} 
                          className="text-red-500 hover:text-red-700"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes (Optional)</label>
                <textarea 
                  rows={4} 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                  placeholder="Any additional information about your submission..."
                ></textarea>
              </div>

              <div className="flex space-x-4">
                <button 
                  type="button" 
                  onClick={closeModal} 
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  Submit Work
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-500">
            <p>&copy; 2025 MD Yeomun Hasan (FEEHAB). Professional Work Hub Platform.</p>
            <p className="text-sm mt-1">Secure • Reliable • Professional 🚀</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WorkHub;