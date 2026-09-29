import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'src/App.jsx');
let content = fs.readFileSync(filePath, 'utf-8');

const newCard = `
            <a 
              href={\`\${import.meta.env.BASE_URL}assets/docs/CV_Temas.html\`}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col items-center justify-center gap-4 p-8 bg-gradient-to-br from-yellow-50 to-amber-100 border-2 border-yellow-200 rounded-2xl hover:scale-105 transition-all shadow-sm hover:shadow-md group cursor-pointer text-decoration-none"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform text-yellow-600">
                <Briefcase size={32} />
              </div>
              <h2 className="text-xl font-bold text-slate-800 text-center">Lamaran PT TEMAS Tbk</h2>
              <p className="text-sm text-slate-500 text-center">CV & Surat Lamaran (Posisi AP Officer)</p>
            </a>
`;

// Insert the new card before the end of the grid
content = content.replace('</a>\n          </div>\n\n          <div className="mt-12 pt-8 border-t', '</a>' + newCard + '          </div>\n\n          <div className="mt-12 pt-8 border-t');

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Successfully injected Temas card into App.jsx');
