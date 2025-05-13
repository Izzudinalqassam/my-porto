// Simple YAML frontmatter parser
function parseFrontmatter(content) {
  const frontmatter = {};
  const contentStart = '---\n';
  const contentEnd = '\n---';
  
  const start = content.indexOf(contentStart);
  const end = content.indexOf(contentEnd, start + contentStart.length);
  
  if (start === -1 || end === -1) {
    return { data: {}, content };
  }
  
  const frontmatterStr = content.slice(start + contentStart.length, end);
  const contentStartIndex = end + contentEnd.length;
  
  // Parse YAML frontmatter
  const lines = frontmatterStr.split('\n');
  for (const line of lines) {
    const match = line.match(/^(\w+):\s*(.*)$/);
    if (match) {
      const [, key, value] = match;
      try {
        // Try to parse as JSON first (for arrays, numbers, etc.)
        frontmatter[key] = JSON.parse(value);
      } catch (e) {
        // If not valid JSON, use as string
        frontmatter[key] = value.replace(/^['"](.*)['"]$/, '$1'); // Remove quotes
      }
    }
  }
  
  return {
    data: frontmatter,
    content: content.slice(contentStartIndex).trim()
  };
}

// Get all markdown files from the articles directory
const articleModules = import.meta.glob('/src/content/articles/*.md', { as: 'raw', eager: true });

// Function to parse date from filename (format: YYYY-MM-DD-slug.md)
const parseDateFromFilename = (filename) => {
  const [datePart] = filename.split('-').slice(0, 3);
  return datePart;
};

// Parse a single article file
const parseArticle = (fileContent, filePath) => {
  // Extract the slug from the file path
  const slug = filePath
    .split('/')
    .pop()
    .replace(/\.[^/.]+$/, '');

  // Parse the frontmatter and content
  const { data, content } = parseFrontmatter(fileContent);

  return {
    id: slug,
    content,
    ...data,
    // Ensure required fields have default values
    date: data.date || parseDateFromFilename(slug),
    readTime: data.readTime || '5 min read',
    tags: Array.isArray(data.tags) ? data.tags : (data.tags ? [data.tags] : []),
    image: data.image || 'https://via.placeholder.com/800x400',
    author: data.author || 'Izzudin Alqassam',
    authorImage: data.authorImage || 'https://via.placeholder.com/40',
  };
};

// Get all article slugs
export function getAllArticleSlugs() {
  return Object.keys(articleModules).map((filePath) => {
    const slug = filePath
      .split('/')
      .pop()
      .replace(/\.[^/.]+$/, '');
    return {
      params: {
        id: slug,
      },
    };
  });
}

// Get all articles
export function getAllArticles() {
  const articles = Object.entries(articleModules).map(([filePath, fileContent]) => {
    return parseArticle(fileContent, filePath);
  });

  // Sort articles by date in descending order (newest first)
  return articles.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
}

// Get a single article by ID
export async function getArticleData(id) {
  try {
    // In development, we can use dynamic import
    if (import.meta.env.DEV) {
      const fileContent = await import(`../content/articles/${id}.md?raw`);
      return parseArticle(fileContent.default, `${id}.md`);
    }
    
    // In production, find the article from the pre-loaded files
    const filePath = Object.keys(articleModules).find(path => 
      path.endsWith(`/${id}.md`)
    );
    
    if (!filePath) {
      throw new Error(`Article with id ${id} not found`);
    }
    
    return parseArticle(articleModules[filePath], filePath);
  } catch (error) {
    console.error('Error loading article:', error);
    throw error;
  }
}
