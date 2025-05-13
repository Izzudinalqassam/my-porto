import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getAllArticles } from '../utils/articles';

// Get all articles and tags
const allArticles = getAllArticles();
const allTags = ['All', ...new Set(allArticles.flatMap(article => article.tags))];

// Date options for filter
const dateFilters = [
  { id: 'newest', label: 'Terbaru' },
  { id: 'oldest', label: 'Terlama' },
];

function ArticleCard({ article }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10"
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-blue-400">{article.date}</span>
          <span className="text-sm text-gray-400">{article.readTime}</span>
        </div>
        <h3 className="text-2xl font-bold mb-3 text-white">{article.title}</h3>
        <p className="text-gray-300 mb-4">{article.excerpt}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {article.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          to={`/article/${article.id}`}
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          Baca Selengkapnya
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </motion.article>
  );
}

// Function to parse date from Indonesian format (e.g., "14 Mei 2024")
const parseDate = (dateStr) => {
  // First check if the date is in the expected format
  if (!dateStr) return new Date(0); // Return epoch if no date
  
  const months = {
    'Januari': 0, 'Februari': 1, 'Maret': 2, 'April': 3, 'Mei': 4, 'Juni': 5,
    'Juli': 6, 'Agustus': 7, 'September': 8, 'Oktober': 9, 'November': 10, 'Desember': 11
  };
  
  const parts = dateStr.split(' ');
  if (parts.length < 3) return new Date(0); // Invalid format
  
  const day = parseInt(parts[0], 10);
  const monthName = parts[1];
  const year = parseInt(parts[2], 10);
  
  if (isNaN(day) || isNaN(year) || !months.hasOwnProperty(monthName)) {
    return new Date(0); // Return epoch for invalid dates
  }
  
  return new Date(year, months[monthName], day);
};

export default function ArticlesPage() {
  const navigate = useNavigate();
  const [selectedTag, setSelectedTag] = useState('All');
  const [dateFilter, setDateFilter] = useState('newest');
  const [filteredArticles, setFilteredArticles] = useState(allArticles);

  useEffect(() => {
    let result = [...allArticles];
    
    // Filter by tag
    if (selectedTag !== 'All') {
      result = result.filter(article => 
        article.tags && article.tags.includes(selectedTag)
      );
    }
    
    // Sort by date
    result.sort((a, b) => {
      try {
        const dateA = parseDate(a.date);
        const dateB = parseDate(b.date);
        return dateFilter === 'newest' 
          ? dateB.getTime() - dateA.getTime()
          : dateA.getTime() - dateB.getTime();
      } catch (error) {
        console.error('Error sorting articles:', error, { a, b });
        return 0;
      }
    });
    
    setFilteredArticles(result);
  }, [selectedTag, dateFilter, allArticles]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <Link
            to="/"
            className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Kembali ke Portfolio
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Artikel Saya
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Kumpulan tulisan dan pemikiran saya seputar pengembangan web, teknologi, dan hal-hal menarik lainnya.
          </p>
        </motion.div>

        {/* Filter Section */}
        <div className="bg-gray-800/50 rounded-xl p-6 mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="w-full md:w-auto">
              <h3 className="text-sm font-medium text-gray-400 mb-2">Filter Berdasarkan Tag</h3>
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                      selectedTag === tag
                        ? 'bg-cyan-500 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="w-full md:w-auto">
              <h3 className="text-sm font-medium text-gray-400 mb-2">Urutkan Berdasarkan</h3>
              <div className="flex gap-2">
                {dateFilters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setDateFilter(filter.id)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                      dateFilter === filter.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-400">Tidak ada artikel dengan tag "{selectedTag}"</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
