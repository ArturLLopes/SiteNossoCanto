import type { Favorite, GalleryItem, Memorial, RecentUpdate, RemembranceDay, Story, TimelineEvent, Tribute } from '@/types/memorial';

export const memorialInfo: Memorial = {
  name: 'Eleanor Hart',
  birthDate: '14 de maio de 1942',
  deathDate: '18 de março de 2026',
  birthPlace: 'Santa Aurora',
  deathPlace: 'Vila Serena',
  quote: 'Uma vida para lembrar, histórias para continuar compartilhando.',
  biography: [
    'Eleanor foi professora, jardineira e amiga dedicada. Tinha o raro talento de transformar encontros simples em memórias duradouras.',
    'Ao longo dos anos, cultivou uma família unida, amizades sinceras e pequenas tradições que permanecem presentes nas pessoas que tiveram a alegria de conhecê-la.',
    'Este espaço reúne fotografias, histórias e palavras de carinho para que sua trajetória continue viva através de quem a ama.'
  ],
  familyCredit: 'Compartilhado pela família Hart'
};

export const timelineEvents: TimelineEvent[] = [
  { date: '1942', title: 'Nascimento', description: 'Início de uma história marcada por afeto, curiosidade e generosidade.' },
  { date: '1965', title: 'Casamento', description: 'Começo de uma nova etapa ao lado de seu companheiro de vida.' },
  { date: '1970', title: 'Nascimento dos filhos', description: 'A família cresceu e vieram novos capítulos cheios de descobertas.' },
  { date: '1985', title: 'Mudança de cidade', description: 'Uma mudança que trouxe novos amigos, novas rotinas e novas lembranças.' },
  { date: '2001', title: 'Aposentadoria', description: 'Mais tempo para jardinagem, leituras, café e caminhadas.' },
  { date: '2026', title: 'Despedida', description: 'Uma despedida serena, deixando um legado de amor e presença.' }
];

export const favorites: Favorite[] = [
  { label: 'Jardinagem', description: 'Flores, sementes e tardes cuidando do jardim.' },
  { label: 'Literatura', description: 'Romances, poesia e livros compartilhados.' },
  { label: 'Música', description: 'Canções que acompanhavam os encontros em família.' },
  { label: 'Café da tarde', description: 'Um pequeno ritual para conversar e ouvir histórias.' },
  { label: 'Caminhadas', description: 'Passeios tranquilos por lugares conhecidos.' },
  { label: 'Tradições', description: 'Receitas e costumes preservados entre gerações.' }
];

export const galleryItems: GalleryItem[] = [1,2,3,4,5,6].map((n) => ({
  id: `gallery-${n}`,
  title: `Fotografia ${n}`,
  description: 'Espaço reservado para uma fotografia do memorial.',
  date: n % 2 ? 'Década de 1980' : 'Década de 1990'
}));

export const stories: Story[] = [
  { id: 'story-1', title: 'Uma tarde que nunca esqueceremos', author: 'Margaret', date: '22 de março de 2026', summary: 'Uma lembrança simples sobre café, chuva e uma conversa que ficou no coração.' },
  { id: 'story-2', title: 'O jardim da frente', author: 'Thomas', date: '26 de março de 2026', summary: 'Como uma pequena muda de flores virou parte da história da família.' },
  { id: 'story-3', title: 'Domingos em família', author: 'Helen', date: '2 de abril de 2026', summary: 'As refeições, as risadas e os costumes que atravessaram gerações.' }
];

export const initialTributes: Tribute[] = [
  { id: 'tribute-1', author: 'Margaret Hart', message: 'Sua bondade continua presente em cada história que compartilhamos.', createdAt: '20 de março de 2026' },
  { id: 'tribute-2', author: 'Thomas Reed', message: 'Sempre lembraremos do cuidado, da calma e da alegria que Eleanor levava consigo.', createdAt: '28 de março de 2026' }
];

export const recentUpdates: RecentUpdate[] = [
  { type: 'tributo', title: 'Novo tributo publicado por Helen', date: '2 de abril de 2026' },
  { type: 'fotografia', title: 'Nova fotografia adicionada à galeria', date: '30 de março de 2026' },
  { type: 'historia', title: 'Nova história: Domingos em família', date: '2 de abril de 2026' }
];

export const remembranceDays: RemembranceDay[] = [
  { label: 'Aniversário', date: '14 de maio', description: 'Um dia para celebrar a vida e as histórias que ficaram.' },
  { label: 'Aniversário de falecimento', date: '18 de março', description: 'Um dia de lembrança e carinho.' },
  { label: 'Dia especial da família', date: '12 de outubro', description: 'Uma tradição importante para os encontros da família.' }
];
