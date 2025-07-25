import { useState, useEffect, useRef } from 'react';

const flags = {
  pt: (
    <img
      src="https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg"
      alt="Brasil"
      className="w-6 h-4 object-cover"
      loading="lazy"
    />
  ),
  en: (
    <img
      src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
      alt="Estados Unidos"
      className="w-6 h-4 object-cover"
      loading="lazy"
    />
  ),
  es: (
    <img
      src="https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg"
      alt="Espanha"
      className="w-6 h-4 object-cover"
      loading="lazy"
    />
  ),
};

export default function LanguageSelector() {
  const [currentLang, setCurrentLang] = useState('pt');
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const path = window.location.pathname;

    const firstSegment = path.split('/')[1];

    if (firstSegment === 'en') setCurrentLang('en');
    else if (firstSegment === 'es') setCurrentLang('es');
    else setCurrentLang('pt');
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function handleSelect(lang) {
    setCurrentLang(lang);
    setOpen(false);
    window.location.href = lang === 'pt' ? '/pt' : `/${lang}`;
  }

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        className="inline-flex justify-center w-10 h-10 rounded items-center shadow-sm bg-white hover:bg-gray-50 focus:outline-none"
        onClick={() => setOpen(!open)}
        aria-haspopup="true"
        aria-expanded={open}
      >
        {flags[currentLang]}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-28 rounded-md bg-white z-50">
          <div className="py-1">
            {Object.entries(flags).map(([lang, flagImg]) => (
              <button
                key={lang}
                onClick={() => handleSelect(lang)}
                className={`flex items-center justify-center w-full py-2 px-2 hover:bg-gray-100 ${lang === currentLang ? 'bg-gray-200' : ''
                  }`}
                type="button"
              >
                {flagImg}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
