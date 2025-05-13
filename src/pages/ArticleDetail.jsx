import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { getArticleData } from '../utils/articles';
import { useEffect, useState } from 'react';



export default function ArticleDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadArticle = async () => {
      try {
        const articleData = await getArticleData(id);
        setArticle(articleData);
      } catch (error) {
        console.error('Error loading article:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadArticle();
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 text-gray-100 flex items-center justify-center">
        <div className="animate-pulse">Memuat artikel...</div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-900 text-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Artikel tidak ditemukan</h1>
          <button 
            onClick={() => navigate('/articles')} 
            className="text-cyan-400 hover:underline"
          >
            Kembali ke Daftar Artikel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50"
        >
          <div className="h-96 overflow-hidden">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-8">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-2">
                <img 
                  src={article.authorImage} 
                  alt={article.author}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-medium">{article.author}</p>
                  <p className="text-sm text-gray-400">{article.date} · {article.readTime}</p>
                </div>
              </div>
              <Link 
                to="/articles" 
                className="px-4 py-2 rounded-full border border-gray-600 hover:border-cyan-400 hover:text-cyan-400 transition-colors text-sm"
              >
                ← Kembali
              </Link>
            </div>

            <h1 className="text-4xl font-bold mb-6">{article.title}</h1>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {article.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="prose prose-invert max-w-none">
              <ReactMarkdown>{article.content}</ReactMarkdown>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-700">
              <div className="flex items-center space-x-4">
                <img 
                  src={article.authorImage} 
                  alt={article.author}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <p className="font-medium text-lg">{article.author}</p>
                  <p className="text-gray-400">Penulis</p>
                </div>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
}
