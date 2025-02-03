interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

interface LanguageCategories {
  [key: string]: string; // категории, напр. { general: "Allgemein", ... }
}

interface LanguageTranslation {
  app_title: string;
  search_term: string;
  search_placeholder: string;
  search_button: string;
  language: string;
  category: string;
  sort_by: string;
  relevance: string;
  popularity: string;
  date: string;
  read_more: string;
  error_loading: string;
  categories: LanguageCategories;
}

interface Translations {
  [lang: string]: LanguageTranslation;
}

const translations: Translations = {
  de: {
    app_title: "Nachrichten App",
    search_term: "Suchbegriff",
    search_placeholder: "Nachrichten suchen...",
    search_button: "Suchen",
    language: "Sprache",
    category: "Kategorie",
    sort_by: "Sortieren nach",
    relevance: "Relevanz",
    popularity: "Beliebtheit",
    date: "Datum",
    read_more: "Weiterlesen",
    error_loading: "Fehler beim Laden der Nachrichten.",
    categories: {
      general: "Allgemein",
      business: "Wirtschaft",
      technology: "Technologie",
      sports: "Sport",
      entertainment: "Unterhaltung",
      health: "Gesundheit",
      science: "Wissenschaft",
    },
  },
  en: {
    app_title: "News App",
    search_term: "Search Term",
    search_placeholder: "Search for news...",
    search_button: "Search",
    language: "Language",
    category: "Category",
    sort_by: "Sort by",
    relevance: "Relevance",
    popularity: "Popularity",
    date: "Date",
    read_more: "Read more",
    error_loading: "Error loading news.",
    categories: {
      general: "General",
      business: "Business",
      technology: "Technology",
      sports: "Sports",
      entertainment: "Entertainment",
      health: "Health",
      science: "Science",
    },
  },
  fr: {
    app_title: "Application de Nouvelles",
    search_term: "Terme de recherche",
    search_placeholder: "Rechercher des nouvelles...",
    search_button: "Rechercher",
    language: "Langue",
    category: "Catégorie",
    sort_by: "Trier par",
    relevance: "Pertinence",
    popularity: "Popularité",
    date: "Date",
    read_more: "Lire la suite",
    error_loading: "Erreur lors du chargement des nouvelles.",
    categories: {
      general: "Général",
      business: "Affaires",
      technology: "Technologie",
      sports: "Sport",
      entertainment: "Divertissement",
      health: "Santé",
      science: "Science",
    },
  },
  es: {
    app_title: "Aplicación de Noticias",
    search_term: "Término de búsqueda",
    search_placeholder: "Buscar noticias...",
    search_button: "Buscar",
    language: "Idioma",
    category: "Categoría",
    sort_by: "Ordenar por",
    relevance: "Relevancia",
    popularity: "Popularidad",
    date: "Fecha",
    read_more: "Leer más",
    error_loading: "Error al cargar las noticias.",
    categories: {
      general: "General",
      business: "Negocios",
      technology: "Tecnología",
      sports: "Deportes",
      entertainment: "Entretenimiento",
      health: "Salud",
      science: "Ciencia",
    },
  },
  it: {
    app_title: "App di Notizie",
    search_term: "Termine di ricerca",
    search_placeholder: "Cerca notizie...",
    search_button: "Cerca",
    language: "Lingua",
    category: "Categoria",
    sort_by: "Ordina per",
    relevance: "Rilevanza",
    popularity: "Popolarità",
    date: "Data",
    read_more: "Leggi di più",
    error_loading: "Errore durante il caricamento delle notizie.",
    categories: {
      general: "Generale",
      business: "Affari",
      technology: "Tecnologia",
      sports: "Sport",
      entertainment: "Intrattenimento",
      health: "Salute",
      science: "Scienza",
    },
  },
  pt: {
    app_title: "App de Notícias",
    search_term: "Termo de pesquisa",
    search_placeholder: "Pesquisar notícias...",
    search_button: "Pesquisar",
    language: "Idioma",
    category: "Categoria",
    sort_by: "Ordenar por",
    relevance: "Relevância",
    popularity: "Popularidade",
    date: "Data",
    read_more: "Leia mais",
    error_loading: "Erro ao carregar as notícias.",
    categories: {
      general: "Geral",
      business: "Negócios",
      technology: "Tecnologia",
      sports: "Esportes",
      entertainment: "Entretenimento",
      health: "Saúde",
      science: "Ciência",
    },
  },
  ru: {
    app_title: "Приложение Новостей",
    search_term: "Поисковый запрос",
    search_placeholder: "Поиск новостей...",
    search_button: "Поиск",
    language: "Язык",
    category: "Категория",
    sort_by: "Сортировать по",
    relevance: "Релевантность",
    popularity: "Популярность",
    date: "Дата",
    read_more: "Читать далее",
    error_loading: "Ошибка загрузки новостей.",
    categories: {
      general: "Общее",
      business: "Бизнес",
      technology: "Технологии",
      sports: "Спорт",
      entertainment: "Развлечения",
      health: "Здоровье",
      science: "Наука",
    },
  },
  uk: {
    app_title: "Новинний Додаток",
    search_term: "Пошуковий термін",
    search_placeholder: "Пошук новин...",
    search_button: "Пошук",
    language: "Мова",
    category: "Категорія",
    sort_by: "Сортувати за",
    relevance: "Релевантність",
    popularity: "Популярність",
    date: "Дата",
    read_more: "Читати далі",
    error_loading: "Помилка завантаження новин.",
    categories: {
      general: "Загальне",
      business: "Бізнес",
      technology: "Технології",
      sports: "Спорт",
      entertainment: "Розваги",
      health: "Здоров'я",
      science: "Наука",
    },
  },
  tr: {
    app_title: "Haber Uygulaması",
    search_term: "Arama Terimi",
    search_placeholder: "Haber ara...",
    search_button: "Ara",
    language: "Dil",
    category: "Kategori",
    sort_by: "Sırala",
    relevance: "Alaka",
    popularity: "Popülerlik",
    date: "Tarih",
    read_more: "Devamını oku",
    error_loading: "Haberler yüklenirken hata oluştu.",
    categories: {
      general: "Genel",
      business: "İş",
      technology: "Teknoloji",
      sports: "Spor",
      entertainment: "Eğlence",
      health: "Sağlık",
      science: "Bilim",
    },
  },
};

const elements = {
  newsContainer: document.getElementById("newsContainer") as HTMLElement,
  searchInput: document.getElementById("searchInput") as HTMLInputElement,
  searchBtn: document.getElementById("searchBtn") as HTMLButtonElement,
  languageSelect: document.getElementById(
    "languageSelect"
  ) as HTMLSelectElement,
  categorySelect: document.getElementById(
    "categorySelect"
  ) as HTMLSelectElement,
  sortSelect: document.getElementById("sortSelect") as HTMLSelectElement,
};

function updateTranslations(lang: string) {
  // 1️⃣ Перевод текстовых элементов
  document.querySelectorAll("[data-translate]").forEach((element) => {
    const key = element.getAttribute("data-translate")!;
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  // 2️⃣ Перевод placeholder полей
  document
    .querySelectorAll("[data-translate-placeholder]")
    .forEach((element) => {
      const key = element.getAttribute("data-translate-placeholder")!;
      if (translations[lang][key]) {
        (element as HTMLInputElement).placeholder = translations[lang][key];
      }
    });

  // 3️⃣ Обновляем список категорий
  const categories = translations[lang].categories;
  elements.categorySelect.innerHTML = Object.entries(categories)
    .map(([value, text]) => `<option value="${value}">${text}</option>`)
    .join("");
}

/* async function fetchNews() {
  const params = new URLSearchParams();
  const API_KEY = "0e30f5157e8a490cb1a3a540b56f7d52";
  const NEWS_API_URL = "https://newsapi.org/v2/everything";
  ({
    q: elements.searchInput.value || "news",
    language: elements.languageSelect.value,
    sortBy: elements.sortSelect.value,
    apiKey: API_KEY,
  });

  try {
    const response = await fetch(`${NEWS_API_URL}?${params}`);
    if (!response.ok) throw new Error("Fehler beim Laden der Nachrichten");
    const data = await response.json();
    displayNews(data.articles);
  } catch (error) {
    elements.newsContainer.innerHTML = `<p class="error">${
      translations[elements.languageSelect.value].error_loading
    }</p>`;
  }
} */

async function fetchNews() {
  const params = new URLSearchParams();
  const API_KEY = "0e30f5157e8a490cb1a3a540b56f7d52";
  const NEWS_API_URL = "https://newsapi.org/v2/everything";

  // Add parameters to the URLSearchParams object
  params.append("q", elements.searchInput.value || "news");
  params.append("language", elements.languageSelect.value);
  params.append("sortBy", elements.sortSelect.value);
  params.append("apiKey", API_KEY);

  try {
    const response = await fetch(`${NEWS_API_URL}?${params.toString()}`);
    if (!response.ok) throw new Error("Fehler beim Laden der Nachrichten");
    const data = await response.json();
    displayNews(data.articles);
  } catch (error) {
    elements.newsContainer.innerHTML = `<p class="error">${
      translations[elements.languageSelect.value].error_loading
    }</p>`;
  }
}

function displayNews(articles: Article[]) {
  const lang = elements.languageSelect.value;
  if (!elements.newsContainer) return;

  elements.newsContainer.innerHTML = articles
    .map((article) => {
      const imageTag = article.urlToImage
        ? `<img src="${article.urlToImage}" class="news-image" alt="${article.title}">`
        : "";

      return `
        <div class="news-card">
          ${imageTag}
          <h3>${article.title}</h3>
          <p>${article.description || ""}</p>
          <a href="${article.url}" target="_blank">${
        translations[lang].read_more
      }</a>
        </div>
      `;
    })
    .join("");
}

// Слушатели событий
elements.languageSelect.addEventListener("change", () => {
  updateTranslations(elements.languageSelect.value);
  fetchNews();
});

elements.searchBtn.addEventListener("click", fetchNews);
elements.categorySelect.addEventListener("change", fetchNews);
elements.sortSelect.addEventListener("change", fetchNews);

// Инициализация
updateTranslations("de");
fetchNews();
