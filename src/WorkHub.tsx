import React, { useState } from 'react';
import { ArrowLeft, Upload, X, FileText, Image, Archive, Clock, DollarSign, Users, CheckCircle, AlertCircle } from 'lucide-react';

interface WorkHubProps {
  onBack: () => void;
}

const WorkHub: React.FC<WorkHubProps> = ({ onBack }) => {
  const [selectedWork, setSelectedWork] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [withdrawalMethod, setWithdrawalMethod] = useState('');
  const [withdrawalAccount, setWithdrawalAccount] = useState('');
  const [email, setEmail] = useState('');
  const [showJobDetails, setShowJobDetails] = useState(false);
  const [selectedJob, setSelectedJob] = useState<any>(null);

  const jobs = [
    {
      id: 1,
      title: 'Facebook Account Creation',
      description: 'Create professional Facebook business accounts with complete profile setup and verification.',
      detailedDescription: 'You will need to create a Facebook business account using provided business information. This includes setting up the profile with business details, uploading provided images, and completing the verification process. All materials and step-by-step instructions will be provided.',
      instructions: [
        'Create business Facebook account using provided email',
        'Complete profile with provided business details',
        'Upload profile and cover photos (provided)',
        'Verify account via phone/email verification',
        'Set up basic business information and contact details',
        'Take screenshots of completed profile for submission'
      ],
      requirements: [
        'Must have valid phone number for verification',
        'Basic understanding of Facebook interface',
        'Reliable internet connection',
        'Ability to follow detailed instructions'
      ],
      payRate: '$2-3 per hour',
      estimatedTime: '2-3 hours',
      totalEarning: '$4-9',
      category: 'Social Media',
      platform: 'Facebook',
      available: true,
      badge: 'New',
      badgeColor: 'bg-green-500',
      difficulty: 'Easy',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg'
    },
    {
      id: 2,
      title: 'Gmail Account Creation',
      description: 'Create Gmail accounts with complete profile setup and verification for business use.',
      detailedDescription: 'You will need to create Gmail accounts using provided information. This includes setting up the account with proper recovery options, completing profile information, and ensuring account security. All necessary details and instructions will be provided.',
      instructions: [
        'Create Gmail account using provided information',
        'Set up recovery email and phone number',
        'Complete profile with provided details',
        'Verify account through phone/email verification',
        'Configure security settings as instructed',
        'Take screenshots of completed account for submission'
      ],
      requirements: [
        'Must have valid phone number for verification',
        'Basic understanding of Gmail interface',
        'Reliable internet connection',
        'Ability to follow security guidelines'
      ],
      payRate: '$2-3 per hour',
      estimatedTime: '2-3 hours',
      totalEarning: '$4-9',
      category: 'Account Creation',
      platform: 'Gmail',
      available: true,
      badge: 'High Paying',
      badgeColor: 'bg-purple-500',
      difficulty: 'Easy',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg'
    },
    {
      id: 3,
      title: 'X Account Creator',
      description: 'Create and set up X (Twitter) accounts with complete profile optimization and verification.',
      detailedDescription: 'You will create X (formerly Twitter) accounts using provided business information. This includes profile setup, bio writing, profile picture upload, and completing verification steps. All content and guidelines will be provided.',
      instructions: [
        'Create X account using provided information',
        'Set up profile with provided business details',
        'Write engaging bio using provided guidelines',
        'Upload profile picture and header image',
        'Configure account settings and privacy',
        'Complete verification process if required'
      ],
      requirements: [
        'Basic understanding of X (Twitter) platform',
        'Good writing skills for bio creation',
        'Reliable internet connection',
        'Ability to follow brand guidelines'
      ],
      payRate: '$2-3 per hour',
      estimatedTime: '2-3 hours',
      totalEarning: '$4-9',
      category: 'Social Media',
      platform: 'X (Twitter)',
      available: true,
      badge: 'Popular',
      badgeColor: 'bg-orange-500',
      difficulty: 'Easy',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg'
    },
    {
      id: 4,
      title: 'Instagram Account Creation',
      description: 'Create professional Instagram business accounts with complete profile setup and content strategy.',
      detailedDescription: 'You will create Instagram business accounts using provided brand information. This includes setting up the business profile, adding bio information, uploading profile pictures, and configuring business settings. All brand materials and guidelines will be provided.',
      instructions: [
        'Create Instagram business account using provided email',
        'Set up business profile with provided information',
        'Upload profile picture and write compelling bio',
        'Configure business contact information',
        'Set up Instagram Shopping if required',
        'Take screenshots of completed profile for verification'
      ],
      requirements: [
        'Must have valid phone number for verification',
        'Understanding of Instagram business features',
        'Creative skills for bio writing',
        'Reliable internet connection'
      ],
      payRate: '$2-3 per hour',
      estimatedTime: '2-3 hours',
      totalEarning: '$4-9',
      category: 'Social Media',
      platform: 'Instagram',
      available: true,
      badge: 'Trending',
      badgeColor: 'bg-pink-500',
      difficulty: 'Easy',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png'
    },
    {
      id: 5,
      title: 'LinkedIn Account Creation',
      description: 'Create professional LinkedIn profiles for business networking and professional presence.',
      detailedDescription: 'You will create LinkedIn professional accounts using provided career information. This includes setting up the professional profile, adding work experience, skills, and education details. All professional information and guidelines will be provided.',
      instructions: [
        'Create LinkedIn account using provided professional email',
        'Set up professional profile with career details',
        'Add work experience and education information',
        'Upload professional profile photo',
        'Configure privacy and networking settings',
        'Take screenshots of completed profile for submission'
      ],
      requirements: [
        'Understanding of professional networking',
        'Good writing skills for professional content',
        'Knowledge of LinkedIn platform features',
        'Attention to detail for professional presentation'
      ],
      payRate: '$2-3 per hour',
      estimatedTime: '2-3 hours',
      totalEarning: '$4-9',
      category: 'Professional',
      platform: 'LinkedIn',
      available: false,
      badge: 'Professional',
      badgeColor: 'bg-blue-600',
      difficulty: 'Medium',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png'
    }
  ];

  const selectWork = (workTitle: string) => {
    setSelectedWork(workTitle);
  };

  const showJobDetailsModal = (job: any) => {
    setSelectedJob(job);
    setShowJobDetails(true);
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
      case 'Account Creation':
        return '📧';
      case 'Professional':
        return '💼';
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
        {/* Advertisement */}
        <div className="mb-8 flex justify-center">
          <ins 
            style={{width: '300px', height: '250px'}} 
            data-width="300" 
            data-height="250" 
            className="p62f15c6fc6" 
            data-domain="//data159.click" 
            data-affquery="/96bdedf5f0e507f9653f/62f15c6fc6/?placementName=default22"
          >
            <script src="//data159.click/js/responsive.js" async></script>
          </ins>
        </div>

        <div className="space-y-8 lg:space-y-0 lg:flex lg:flex-row lg:gap-8">
          {/* Left Side - Job Listings */}
          <div className="w-full lg:flex-1">
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
                  <span className="text-2xl font-bold text-blue-600">{jobs.filter(job => job.available).length}</span>
                  <p className="text-sm text-gray-500">Available Jobs</p>
                </div>
                <div className="bg-white px-4 py-2 rounded-lg shadow-sm border">
                  <span className="text-2xl font-bold text-green-600">$3-5</span>
                  <p className="text-sm text-gray-500">Per Hour</p>
                </div>
                <div className="bg-white px-4 py-2 rounded-lg shadow-sm border">
                  <span className="text-2xl font-bold text-purple-600">2-4</span>
                  <p className="text-sm text-gray-500">Hours Work</p>
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
                    <option>Account Creation</option>
                  </select>
                  <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                    <option>All Status</option>
                    <option>Available</option>
                    <option>Unavailable</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {jobs.map((job) => (
                  <div
                    key={job.id}
                    className={`bg-white rounded-xl shadow-sm border p-6 transition-all duration-300 ${
                      job.available 
                        ? 'cursor-pointer hover:shadow-md hover:-translate-y-1' 
                        : 'opacity-60 cursor-not-allowed'
                    } ${
                      selectedWork === job.title ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                    }`}
                    onClick={() => job.available && selectWork(job.title)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-lg">
                          {getCategoryIcon(job.category)}
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold text-white ${job.badgeColor}`}>
                          {job.badge}
                        </span>
                        {job.available ? (
                          <span className="px-2 py-1 rounded-full text-xs font-semibold text-green-700 bg-green-100">
                            Available
                          </span>
                        ) : (
                          <span className="px-2 py-1 rounded-full text-xs font-semibold text-red-700 bg-red-100">
                            Unavailable
                          </span>
                        )}
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-600">{job.payRate}</div>
                        <div className="text-sm text-gray-500">{job.totalEarning} total</div>
                      </div>
                    </div>
                    
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">{job.title}</h4>
                    <p className="text-gray-600 text-sm mb-4">{job.description}</p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <span className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {job.estimatedTime}
                      </span>
                      <span className="flex items-center">
                        <Users className="w-3 h-3 mr-1" />
                        {job.difficulty}
                      </span>
                      <span>{getCategoryIcon(job.category)} {job.category}</span>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        showJobDetailsModal(job);
                      }}
                      className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 text-sm font-medium"
                      disabled={!job.available}
                    >
                      {job.available ? 'View Details' : 'Currently Unavailable'}
                    </button>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Side - Work Submission Panel */}
          <div className="w-full lg:w-96">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-4 lg:top-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                <Upload className="w-5 h-5 mr-2 text-blue-600" />
                Submit Your Work
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-900"
                  />
                </div>

                {/* Work Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Which work did you complete? *</label>
                  <select 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-900" 
                    required
                    value={selectedWork}
                    onChange={(e) => setSelectedWork(e.target.value)}
                  >
                    <option value="">Select completed work...</option>
                    {jobs.filter(job => job.available).map((job) => (
                      <option key={job.id} value={job.title}>{job.title}</option>
                    ))}
                  </select>
                </div>

                {/* Platform */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Platform *</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-900" required>
                    <option value="">Select platform...</option>
                    <option value="Facebook">Facebook</option>
                    <option value="Instagram">Instagram</option>
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="Excel">Excel</option>
                    <option value="Google Sheets">Google Sheets</option>
                    <option value="Multiple Platforms">Multiple Platforms</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Withdrawal Method */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Withdrawal Method *</label>
                  <select 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-900" 
                    required
                    value={withdrawalMethod}
                    onChange={(e) => setWithdrawalMethod(e.target.value)}
                  >
                    <option value="">Select withdrawal method...</option>
                    <option value="bkash">bKash</option>
                    <option value="nagad">Nagad</option>
                    <option value="pathao-pay">Pathao Pay</option>
                    <option value="usdt-polygon">USDT (Polygon)</option>
                  </select>
                </div>

                {/* Withdrawal Account */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {withdrawalMethod === 'usdt-polygon' ? 'Wallet Address' : 'Account Number'} *
                  </label>
                  <input
                    type="text"
                    value={withdrawalAccount}
                    onChange={(e) => setWithdrawalAccount(e.target.value)}
                    placeholder={
                      withdrawalMethod === 'usdt-polygon' 
                        ? '0x...' 
                        : withdrawalMethod === 'bkash' || withdrawalMethod === 'nagad' 
                        ? '01XXXXXXXXX' 
                        : 'Enter account details'
                    }
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-900"
                  />
                  {withdrawalMethod && (
                    <p className="text-xs text-gray-500 mt-1">
                      {withdrawalMethod === 'usdt-polygon' && 'Enter your Polygon network USDT wallet address'}
                      {(withdrawalMethod === 'bkash' || withdrawalMethod === 'nagad') && 'Enter your mobile number (11 digits)'}
                      {withdrawalMethod === 'pathao-pay' && 'Enter your Pathao Pay account number'}
                    </p>
                  )}
                </div>

                {/* File Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Upload Attachment *</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-400 transition-colors">
                    <input 
                      type="file" 
                      id="fileUpload" 
                      className="hidden" 
                      multiple 
                      accept=".jpg,.jpeg,.png,.pdf,.doc,.docx,.zip,.rar" 
                      onChange={handleFileUpload}
                    />
                    <label htmlFor="fileUpload" className="cursor-pointer">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600 text-sm">Click to upload files</p>
                      <p className="text-xs text-gray-400 mt-1">Max 500MB</p>
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
                            <span className="text-sm text-gray-700 truncate">{file.name}</span>
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

                {/* Additional Notes */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
                  <textarea 
                    rows={3} 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm resize-none text-gray-900" 
                    placeholder="Any additional information..."
                  ></textarea>
                </div>

                {/* Withdrawal Information */}
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <div className="flex items-start space-x-2">
                    <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-blue-800 mb-1">Withdrawal Information</h4>
                      <p className="text-xs text-blue-700">
                       Withdrawals may take up to 4 to 5 hours due to verification delays, but typically, you can expect to receive your withdrawal within 1 hour.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-semibold"
                >
                  Submit Work
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Job Details Modal */}
      {showJobDetails && selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg sm:text-xl font-bold text-gray-800 pr-4">{selectedJob.title}</h2>
                <button
                  onClick={() => setShowJobDetails(false)}
                  className="text-gray-500 hover:text-gray-700 flex-shrink-0"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Job Overview */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <DollarSign className="w-5 h-5 text-green-600" />
                      <span className="font-semibold text-green-800">Pay Rate</span>
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-green-600">{selectedJob.payRate}</div>
                    <div className="text-sm text-green-700">Total: {selectedJob.totalEarning}</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <span className="font-semibold text-blue-800">Time Required</span>
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-blue-600">{selectedJob.estimatedTime}</div>
                    <div className="text-sm text-blue-700">Difficulty: {selectedJob.difficulty}</div>
                  </div>
                </div>

                {/* Detailed Description */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Job Description</h3>
                  <p className="text-gray-600 leading-relaxed">{selectedJob.detailedDescription}</p>
                </div>

                {/* Step-by-step Instructions */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Step-by-step Instructions</h3>
                  <ol className="space-y-2">
                    {selectedJob.instructions.map((instruction: string, index: number) => (
                      <li key={index} className="flex items-start space-x-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                          {index + 1}
                        </span>
                        <span className="text-gray-700">{instruction}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Requirements */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Requirements</h3>
                  <ul className="space-y-2">
                    {selectedJob.requirements.map((requirement: string, index: number) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 pt-4 border-t">
                  <button
                    onClick={() => {
                      selectWork(selectedJob.title);
                      setShowJobDetails(false);
                    }}
                    className="flex-1 px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 font-semibold"
                    disabled={!selectedJob.available}
                  >
                    {selectedJob.available ? 'Select This Job' : 'Currently Unavailable'}
                  </button>
                  <button
                    onClick={() => setShowJobDetails(false)}
                    className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
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